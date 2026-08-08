# The Answer Line — multi-tenant voice product

**Role:** founder and engineer · **Status:** live with paying clients

## Problem

Missed calls are lost opportunities for small service businesses. The product needed to answer naturally, capture the right job details, send a useful summary and hand off when the conversation required a person.

## What I built

- A multi-tenant configuration model for business-specific agents.
- A public marketing and demo flow that explains the product in one pass.
- Voice ingress, conversational agent configuration and structured job capture.
- A prospecting pipeline that generates and works a qualified outbound list.
- Human escalation boundaries for cases where the agent should stop acting alone.

## Engineering decisions

The product is designed around an operational handoff, not just a conversation. Every call has a clear path from ingress to captured details, notification and follow-up. Tenant configuration is data-driven so the same runtime can serve different service businesses without forking the application.

## Representative stack

`Next.js` · `ElevenLabs Conversational AI` · `Twilio` · `Node.js` · `Python` · `multi-tenant configuration`

## Outcome

The product is live with New Zealand service businesses. The public site is available at [theanswerline.kiwi](https://theanswerline.kiwi/); private customer configuration and call data are excluded from this repository.
