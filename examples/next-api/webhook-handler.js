/**
 * Provider-neutral webhook boundary.
 * Production adapters supply verifySignature and persistEvent; this example
 * keeps those dependencies injectable so the handler is easy to test.
 */
export function createWebhookHandler({ verifySignature, hasProcessed, recordEvent, applyEvent }) {
  return async function handleWebhook({ rawBody, headers }) {
    if (!verifySignature(rawBody, headers)) {
      return { status: 401, body: { error: 'invalid_signature' } };
    }

    const event = JSON.parse(rawBody);
    if (!event.id || !event.type) {
      return { status: 400, body: { error: 'invalid_event' } };
    }

    // Webhook delivery is at-least-once: the event ID is the idempotency key.
    if (await hasProcessed(event.id)) {
      return { status: 200, body: { accepted: true, duplicate: true } };
    }

    await recordEvent(event.id, event.type);
    await applyEvent(event);
    return { status: 200, body: { accepted: true } };
  };
}
