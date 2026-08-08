# Security and privacy boundary

This is a public portfolio repository. Treat every file as publicly readable.

Never commit:

- `.env` files or credential values
- API keys, access tokens, JWTs, cookies or signing secrets
- Database URLs, service-role keys or private storage URLs
- Customer names, emails, phone numbers, revenue figures or internal IDs
- Production logs, exported CRM data or private screenshots

Use `.env.example` for variable names only. The examples in this repository use local mock data and do not require provider credentials.

If a real private system is discussed, it is described at the level of architecture, responsibilities and sanitized outcomes. A private walkthrough can be provided to an authorized reviewer when appropriate.
