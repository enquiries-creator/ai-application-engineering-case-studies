import test from 'node:test';
import assert from 'node:assert/strict';
import { createWebhookHandler } from './webhook-handler.js';

test('rejects an invalid signature before parsing or writing', async () => {
  let wrote = false;
  const handler = createWebhookHandler({
    verifySignature: () => false,
    hasProcessed: async () => false,
    recordEvent: async () => { wrote = true; },
    applyEvent: async () => {}
  });

  const result = await handler({ rawBody: '{"id":"evt_demo_001"}', headers: {} });
  assert.equal(result.status, 401);
  assert.equal(wrote, false);
});

test('treats a retry as a successful duplicate without reapplying it', async () => {
  let applied = 0;
  const handler = createWebhookHandler({
    verifySignature: () => true,
    hasProcessed: async () => true,
    recordEvent: async () => {},
    applyEvent: async () => { applied += 1; }
  });

  const result = await handler({ rawBody: '{"id":"evt_demo_001","type":"payment.completed"}', headers: {} });
  assert.deepEqual(result.body, { accepted: true, duplicate: true });
  assert.equal(applied, 0);
});
