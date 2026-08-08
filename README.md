# AI application engineering case studies

Selected, sanitized examples from Kieran Stapleton's production work as an AI Application Engineer.

This repository is designed for technical review. It documents the systems, decisions, integration boundaries and representative implementation patterns behind several products. The original production repositories remain private; this repository contains no customer records, production credentials or private infrastructure access.

## Start here

- [Industry DJ School — platform rebuild](case-studies/industry-dj-school.md)
- [DJ Hub NZ — marketplace and operator tools](case-studies/dj-hub-nz.md)
- [The Answer Line — multi-tenant voice product](case-studies/answer-line.md)
- [Earpiece — AI sales copilot](case-studies/earpiece.md)
- [System architecture](architecture/system-overview.md)
- [Representative API and agent-tool examples](examples/README.md)

Portfolio: [stapleton.vercel.app](https://stapleton.vercel.app/)

## What is intentionally included

- Architecture diagrams and system boundaries
- Public product links and high-level outcomes
- Sanitized screenshots where useful
- Mock data and provider-independent examples
- Decisions around auth, payments, webhooks, idempotency and human handoff

## What is intentionally excluded

- Production source code and deployment configuration
- API keys, tokens, cookies, signing secrets or database URLs
- Customer names, contact details, internal identifiers or private business data
- Unpublished client requirements and internal operational notes

## Running the examples

The examples are intentionally dependency-light. They use Node.js 20+ and TypeScript-shaped code to show the contracts and validation boundaries without requiring a provider account.

```bash
npm test
```

The examples use mock data only. They do not call Stripe, Twilio, Meta, Supabase or an LLM provider.

## Disclosure

Some case studies describe private systems. Names, figures, identifiers and implementation details have been generalized or removed. The public links are real; the example code is representative and is not presented as a verbatim export of any private production repository.
