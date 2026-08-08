# Representative examples

These examples show the kinds of boundaries used in the production systems without copying private application code.

- `next-api/webhook-handler.js` — signature verification, idempotency and a narrow write boundary.
- `agent-tools/lead-tools.js` — schema-shaped agent tools with authorization and explicit side effects.
- `data/mock-records.js` — fictional records used by the tests.

The examples are deliberately small. The important part is the contract: validate at the edge, authorize before mutation, make retries safe, and keep provider-specific code behind an adapter.
