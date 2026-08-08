# DJ Hub NZ — marketplace and operator tools

**Role:** product engineer · **Status:** web live in testing, iOS in TestFlight beta

## Problem

Independent DJs needed a way to present their work, receive enquiries and manage quotes without stitching together a directory profile, website builder, inbox and payment workflow by hand.

## What I built

- A public directory and profile surface for discovery.
- A guided website editor with theme selection, structured content sections and publish state.
- An operator console for leads, quotes, invoices, content and approval workflows.
- Mobile surfaces for lead triage, quote responses and business activity away from a desk.
- An architecture that keeps public profile data separate from private operational data.

## Engineering decisions

The product uses a shared domain model rather than treating the website, directory and operator console as separate products. Enquiry and quote state is explicit, so the public experience can be read-only while authenticated operators retain control over customer-facing changes.

## Representative stack

`Next.js` · `Node.js` · `Supabase Auth` · `Supabase Postgres` · `Supabase Storage` · `Capacitor` · `Spotify Web API` · `Stripe` · `Vercel`

## Outcome

The system gives a DJ a single workflow from public profile to enquiry, quote and booking. It is a good example of product engineering where the difficult part is not a single screen, but keeping several surfaces consistent around one business state model.

## Privacy boundary

Screenshots and names in private source material are not reproduced here. Any public-facing examples should use demo records or approved marketing assets only.
