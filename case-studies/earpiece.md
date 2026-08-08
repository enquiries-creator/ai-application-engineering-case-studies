# Earpiece — AI sales copilot

**Role:** product engineer · **Status:** internal testing

## Problem

Sales calls produce useful information, but it is easy to miss context before the call, lose track of the conversation during it or delay the follow-up afterwards.

## What I built

- Pre-call research and a concise briefing surface.
- Live talk-ratio and conversation coaching signals.
- Post-call scoring, key points and follow-up email drafting.
- A boundary between suggestions and actions so a human can review before sending.

## Engineering decisions

The system treats AI output as a proposed operational artifact, not an automatic truth. Context is gathered before the call, live signals are kept lightweight, and the post-call workflow makes the reasoning inspectable before a user sends a message or updates a record.

## Representative stack

`Next.js` · `Node.js` · `Anthropic API` · `voice and transcript processing` · `structured output` · `human review`

## Privacy boundary

All call transcripts, names, contact details and commercial information are private. This public description focuses on the workflow and safety boundary rather than reproducing any conversation.
