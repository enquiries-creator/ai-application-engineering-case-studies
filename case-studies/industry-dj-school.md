# Industry DJ School — platform rebuild

**Role:** founding engineer and product owner · **Status:** live production platform

## Problem

The business had a fragmented operating model: hosted SaaS seats, a learning platform, marketing funnels, support conversations, bookings and payment events lived in separate systems. Staff needed to move between tools to answer a simple customer question.

## What I built

- A self-hosted Next.js application with a Supabase/Postgres data boundary.
- An LMS with protected lessons, progress tracking, quizzes, booking rules and magic-link access.
- A CRM surface for leads, conversations, campaigns, content, booking and operational reporting.
- Provider adapters for Stripe checkout events, Twilio communication, Meta APIs and transactional email.
- Agent workflows that use explicit server tools rather than free-form database access.
- Web and mobile application shells distributed for iOS and Android.

## Engineering decisions

The key design choice was to make the application contracts the centre of the system. Agents and staff use the same validated operations, while provider-specific webhook handlers normalize external events at the edge. Stripe completion events are treated as the authoritative enrolment trigger; retries are safe through event IDs and idempotency checks.

## Representative stack

`Next.js` · `Node.js` · `Supabase Postgres` · `Supabase Auth` · `Supabase Storage` · `Stripe` · `Twilio` · `Meta Graph API` · `Anthropic API` · `Resend` · `Capacitor` · `Vercel`

## Outcome

The platform replaced recurring SaaS spend, consolidated the operating workflow and created a shared base for the LMS, CRM, agent tools and mobile apps. The public marketing site and app listings are available from the [portfolio](https://stapleton.vercel.app/).

## Privacy boundary

This case study intentionally omits private customer records, production URLs, credentials, internal identifiers and exact operational exports. The public product links are real; the implementation examples in this repository are representative rather than a copy of the private codebase.
