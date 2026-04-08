---
title: "You Can't Govern What You Can't Describe."
subtitle: "Proposal for a Framework for Governing AI Agents"
date: 2026-04-06
author: nfriacowboy
excerpt: "AI agents have shifted from experimental tools to operational actors — taking actions, interacting with systems, and making consequential decisions. Most governance frameworks were built for a world that no longer exists."
category: "AI Governance"
tags:
  - "AI Agents"
  - "EU AI Act"
  - "Policy Engines"
  - "Governance by Design"
  - "Responsible AI"
  - "GDPR"
  - "Compliance"
  - "Agentic AI"
  - "AI Governance"
image: /images/posts/you-cant-govern-what-you-cant-describe/frontier-notes_00003_.png
imageAlt: "AI policy framework shielding IoT devices"
draft: true
aiDisclosure: true
---

## Introduction

AI agents have shifted from experimental tools to operational actors — taking
actions, interacting with systems, and making consequential decisions. Existing
governance models were built for deterministic, centrally deployed, passive
software. The result is an operationalization gap: frameworks like the EU AI Act
exist, but turning their principles into enforceable, scalable controls remains
the challenge.

> "We cannot govern what we cannot describe."

Three building blocks form the proposed framework:

- **Taxonomy** — shared language describing what an agent is, what it accesses,
  and what it may do
- **Technical proofs** — visibility demonstrating rules were followed, without
  exposing sensitive data
- **Policy engines** — automated allow/block/escalate decisions based on
  predefined rules

## The Problem: Agents Break Implicit Governance

Traditional software governance rests on four implicit assumptions that AI
agents violate entirely:

1. Applications are known in advance
2. Capabilities change slowly
3. Control happens at deployment
4. Responsibility can be assigned statically

**Illustrative example:** A non-technical employee builds an agent in an
afternoon. It reads inbound emails, classifies sender intent via an external AI
model, and sends automated responses. No risk assessment is triggered. No flag is
raised when personal data leaves the organisation. No record is created of
automated decisions made about individuals.

Multiplied across dozens of teams, the governance gap becomes acute. The article
argues governance applied after deployment is already too late, calling instead
for **governance by design** — controls embedded into how agents are described,
observed, and permitted to act.

## Pillar 1 — Describe Agents Before Deployment

Governance begins with language. A shared taxonomy must work across technical,
security, and compliance domains. A useful agent description captures at minimum:

- **Role and intent** — what problem the agent solves
- **Resources** — what data and systems it can access
- **Actions** — what it can do with what it finds
- **Context** — who it affects, and under what conditions

Without shared taxonomy, developers, security teams, and compliance teams talk
past each other.

| Agent | What it does | Who it affects | Risk class |
|---|---|---|---|
| Email router | Reads and forwards support emails | Internal team | Low |
| CV screener | Filters applicants using AI scoring | External candidates | High (EU AI Act) |
| Invoice processor | Approves or rejects payments automatically | Suppliers, finances | Critical |

The same underlying technology produces radically different risk profiles
depending on who is affected and what is decided.

Structured description of capabilities and context is the foundation making
every subsequent governance decision possible — not administrative overhead.

## Pillar 2 — Gain Visibility Without Exposing Sensitive Data

Description alone is insufficient; governance also requires evidence. In
traditional systems, evidence means logs and raw data disclosure. In agentic
systems, this quickly conflicts with privacy and confidentiality obligations.

This pillar advocates for **selective visibility** using cryptographic proofs —
mechanisms that attest a result without disclosing the inputs that produced it:

> "A compliance receipt that says 'the rules were followed on real data.'"

This shifts the governance question from demanding full disclosure to asking
whether rules were demonstrably followed. Especially critical in healthcare, HR,
and financial services — sectors where data cannot be freely shared.

Accountability does not require exposing sensitive data; selective visibility
satisfies regulatory necessity without compromising confidentiality.

## Pillar 3 — Turn Visibility Into Automated Decisions

Dashboard-and-report governance does not scale. Once agents can be consistently
described and their behaviour validated, a **policy engine** provides the
operational layer: a component evaluating predefined rules in real time,
returning deterministic decisions — allow, block, or escalate for human review.

Policy logic is separated from application code. The division of labour becomes:

- Humans define intent, risk appetite, and rules
- Machines enforce them consistently and at speed

Automated enforcement at the point of action is what makes governance
sustainable as agent populations grow. Policy engines connect principles to
practice.

## Sector Implications

The framework is not sector-specific, but urgency varies:

- **HR and Recruitment:** CV screening and candidate ranking fall squarely in the
  EU AI Act's high-risk category; description and registration are legal
  obligations, not best practices.
- **Financial Services:** Agents approving transactions, assessing
  creditworthiness, or flagging fraud require audit trails that don't expose
  customer data.
- **Healthcare:** Agents triaging, recommending, or routing based on patient data
  face both GDPR and medical software compliance layers.
- **Customer Operations:** Most common deployment context; low perceived risk
  but high volume creates significant accumulated data exposure.

In every case, the same underlying challenge: deployment speed has outpaced
oversight maturity.

## Implementation: What to Expect

Four anticipated obstacles:

1. **Resistance to description** — Start with high-risk cases; twenty documented
   critical agents outvalue documentation for hundreds of low-risk ones.
2. **Taxonomy disagreement** — This is not failure but the first productive
   governance conversation.
3. **Policy maintenance** — Regulations evolve; policy logic should be versioned
   separately from application code.
4. **Partial visibility** — Start with observable data, make gaps explicit, and
   expand coverage incrementally.

## Why This Matters Now

Many organisations currently cannot answer these fundamental questions:

- How many agents do we have?
- What can they access?
- Who is accountable for their actions?

Without description, selective visibility, and automated enforcement, these
questions remain permanently unanswered. The framework's purpose is not to
introduce new regulation but to make existing governance principles executable in
an agentic context.

Governance is not a constraint on innovation — it is what allows autonomy to
exist safely at scale.

## Conclusion

Three linked dependencies:

- Without shared structured descriptions, risk cannot be reasoned about
- Without reasoning about risk that avoids sensitive data exposure, trust cannot
  be maintained
- Without converting that reasoning into automated decisions, scale is impossible

Governance does not start with control — it starts with description. This design
problem must be addressed when agents are conceived, not after they are deployed.

---

*Article enhanced by AI and always reviewed and verified by the human.*

*The author is building an open-source reference implementation of this framework
designed for no-code agent platforms. Input welcome from professionals in AI
governance, regulatory compliance, or responsible AI adoption.*