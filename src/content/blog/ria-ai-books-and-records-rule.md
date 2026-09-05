---
title: "AI at your RIA: what the books-and-records rule really means for client data in third-party tools."
seoTitle: "AI at Your RIA: The Books-and-Records Rule Explained"
description: "What SEC Rule 204-2 and Regulation S-P mean when advisers use AI on client data, and why private deployment keeps the records inside the firm."
date: "2026-07-21T09:00:00-04:00"
updated: "2026-07-21T09:00:00-04:00"
author: "Mitch Boraski"
section: "Wealth Management"
keywords: ["SEC Rule 204-2", "RIA books and records rule", "Regulation S-P amendments", "RIA AI compliance", "investment adviser AI tools", "private AI deployment"]
cta:
  eyebrow: "Private AI for RIAs"
  heading: "Your book of business, answerable in seconds."
  sub: "Bring us one real question about a client relationship. We will show you where the answer comes from."
faq:
  - q: "Is there an SEC rule that prohibits RIAs from using AI?"
    a: "No. The SEC's only AI-specific rulemaking for advisers, the 2023 predictive data analytics proposal, was formally withdrawn on June 12, 2025 and never took effect. RIAs may use AI, but existing rules govern how: Rule 204-2 controls what must be kept as records, Regulation S-P controls how client information must be safeguarded, and the adviser's fiduciary duty applies to any advice AI helps produce."
  - q: "Are AI prompts and outputs considered books and records under Rule 204-2?"
    a: "They can be. Rule 204-2 requires advisers to retain communications and records relating to recommendations and advice given or proposed to be given, regardless of the medium. If an adviser uses an AI tool to research a client question, draft a client communication, or support a recommendation, those interactions can fall within the rule. The practical question is whether the firm can retain, safeguard, and promptly produce them, which depends entirely on where the tool runs and who controls the data."
  - q: "How do the 2024 Regulation S-P amendments affect AI tools?"
    a: "The amendments, adopted May 2024 with compliance required by December 3, 2025 for advisers with $1.5 billion or more in assets under management and June 3, 2026 for all others, require a written incident response program, notification to affected clients within 30 days of determining a breach of sensitive customer information occurred or likely occurred, and oversight of service providers through due diligence and monitoring. A third-party AI tool that receives client information is a service provider under this framework, which makes every such tool part of the adviser's compliance perimeter."
  - q: "Does an RIA have to notify clients if an AI vendor is breached?"
    a: "If sensitive customer information held by the vendor was accessed or used without authorization, or is reasonably likely to have been, amended Regulation S-P puts the notification obligation on the adviser. The firm must notify affected individuals within 30 days of making that determination. The vendor's breach becomes the adviser's client conversation, which is why service provider selection and the decision to keep client data out of third-party systems entirely are now core compliance decisions."
  - q: "How does private AI deployment change the compliance analysis for an RIA?"
    a: "Private deployment keeps both obligations inside systems the firm already controls. Records created with AI assistance stay in the firm's environment where they can be retained under the firm's existing Rule 204-2 procedures and produced on demand. Client information never reaches a third-party service provider, so the Regulation S-P analysis stays within the firm's own safeguards program instead of extending to a vendor's security posture, retention practices, and breach history. The obligations do not disappear, but they attach to infrastructure the firm already governs."
alternativeHeadline: "The SEC withdrew its AI rule. Your existing rules already answer the question."
wordCount: 2100
about:
  - {"@type":"Thing","name":"Investment adviser compliance"}
  - {"@type":"Thing","name":"SEC recordkeeping requirements"}
  - {"@type":"Thing","name":"Artificial intelligence in wealth management"}
mentions:
  - {"@type":"CreativeWork","name":"SEC Rule 204-2 under the Investment Advisers Act of 1940 (Books and Records Rule)","author":{"@type":"Organization","name":"U.S. Securities and Exchange Commission"}}
  - {"@type":"CreativeWork","name":"Amendments to Regulation S-P","author":{"@type":"Organization","name":"U.S. Securities and Exchange Commission"},"datePublished":"2024-05-16"}
  - {"@type":"CreativeWork","name":"Withdrawal of Proposed Rule: Conflicts of Interest Associated with the Use of Predictive Data Analytics by Broker-Dealers and Investment Advisers","author":{"@type":"Organization","name":"U.S. Securities and Exchange Commission"},"datePublished":"2025-06-12"}
---

<aside class="answer-box"><p class="answer-box__label">The Short Answer</p><p><strong>No SEC rule prohibits RIAs from using AI.</strong> The SEC's AI-specific rule proposal was withdrawn in June 2025, which means existing rules govern instead. Rule 204-2 makes AI-assisted advice and communications potential records the firm must retain and produce. Amended Regulation S-P, fully in effect for all advisers as of June 3, 2026, makes any third-party AI tool that receives client information a service provider the firm must oversee, with a 30-day client notification duty if that vendor is breached. The compliance question is not whether to use AI. It is where client data goes when you do.</p></aside>

Wealth management runs on exactly the kind of knowledge AI is good at: client histories, meeting notes, planning documents, account data, years of email. Which is why advisers at RIAs of every size are already using AI tools, with or without a firm policy. The question principals and CCOs are asking is the right one: what do the rules actually require when client data touches these tools?

The answer is more navigable than most compliance commentary suggests, and it turns almost entirely on a single variable. Not which model. Not which vendor. Where the data lives.

## There is no AI rule for RIAs. That is the point.

In August 2023, the SEC proposed a rule targeting conflicts of interest from predictive data analytics and AI used by broker-dealers and investment advisers. The industry pushed back hard on its breadth, and on June 12, 2025 the Commission formally withdrew the proposal along with thirteen others. Any future AI rulemaking starts from scratch.

Some read the withdrawal as deregulation. That reading gets it backwards. The withdrawal means AI at an RIA is governed by the rules that already exist, all of which are technology-neutral and none of which were written with an AI exception:

-   **Rule 204-2** under the Advisers Act, the books-and-records rule, which controls what must be kept, for how long, and how it must be produced.
-   **Regulation S-P**, which controls how nonpublic personal information about clients must be safeguarded, and which was substantially amended in May 2024.
-   **The adviser's fiduciary duty**, which attaches to any advice regardless of what tools helped produce it.

The first two are where AI decisions get made, so let's take them in order.

## Rule 204-2: when AI output becomes a record

The books-and-records rule requires every registered adviser to make and keep true, accurate, and current records of its advisory business. That includes communications relating to recommendations and advice given or proposed to be given. Records generally must be kept for five years, the first two in an easily accessible place, and the rule attaches specific conditions to electronic records:

<figure class="rule-quote"><figcaption>Rule 204-2 · Electronic Records</figcaption><blockquote>"In the case of records on electronic storage media, the investment adviser must establish and maintain procedures: (i) to maintain and preserve the records, so as to reasonably safeguard them from loss, alteration, or destruction; (ii) to limit access to the records to properly authorized personnel..."</blockquote><cite>17 CFR § 275.204-2(g), Books and records to be maintained by investment advisers</cite></figure>

Now apply that to how AI actually gets used at an advisory firm. An adviser asks an AI tool to summarize a client's planning history before a review meeting. Another uses it to draft a client email explaining a rebalancing decision. A third researches a concentrated-position question for a specific client. Depending on content and use, those interactions can relate to advice given or proposed to be given, which is the heart of what Rule 204-2 exists to capture.

That raises three questions most firms have not answered:

1.  **Retention.** If an AI conversation is a record, where is it retained? A consumer AI tool holds it on the vendor's servers, under the vendor's retention schedule, outside the firm's archive.
2.  **Control.** Rule 204-2 requires safeguarding records from loss and alteration and limiting access to authorized personnel. A firm cannot enforce access controls on infrastructure it does not govern.
3.  **Production.** Records must be promptly producible in an examination. Could your firm produce its advisers' AI interactions today? For most firms using cloud tools individually, the honest answer is no, because the firm does not even know which tools are in use.

The industry has run this movie before. The SEC's off-channel communications sweep, which produced billions of dollars in combined penalties across dozens of firms, was at bottom a Rule 204-2 story: business communications happening in systems the firms did not capture. Individual advisers using personal AI accounts for client work is the same fact pattern with a new tool. The lesson is not "ban the tool." The lesson is "the firm must control the system the communication happens in."

## Reg S-P just changed, and both compliance dates have passed

In May 2024, the SEC adopted the most significant amendments to Regulation S-P since its adoption. Larger advisers, those with $1.5 billion or more in assets under management, had to comply by December 3, 2025. Every other covered adviser's date was June 3, 2026. As of this writing, both dates have passed. If your firm is registered, this is your current rulebook, and the SEC's Division of Examinations named Reg S-P compliance in its fiscal year 2026 examination priorities.

Three amended requirements bear directly on AI tools:

**Incident response program.** Firms must maintain written policies and procedures reasonably designed to detect, respond to, and recover from unauthorized access to or use of customer information. Detection presupposes knowing where customer information is. Every third-party tool holding client data expands the surface the program has to cover.

**30-day client notification.** When sensitive customer information was accessed or used without authorization, or is reasonably likely to have been, the firm must notify affected individuals within 30 days of making that determination. Note whose obligation that is. If an AI vendor holding your client data is breached, the notification letter goes out under your firm's name, to your clients.

**Service provider oversight.** The amendments require oversight of service providers through due diligence and monitoring. A third-party AI tool that receives client information is a service provider under this framework. That means vendor security review before adoption, contractual protections, and ongoing monitoring, for every tool, for as long as it is in use.

<aside class="takeaway"><p>Under amended Reg S-P, every third-party AI tool that touches client data is a compliance obligation with a subscription fee attached.</p></aside>

## The compliance perimeter problem

Put the two rules together and a pattern emerges. Every cloud AI tool an adviser uses on client work extends the firm's compliance perimeter to include that vendor: its retention practices become a records question, its security posture becomes a safeguards question, its breach becomes your client conversation, and its terms of service become a document your CCO has to re-read every time it changes.

For a large firm with dedicated compliance technology staff, that is manageable overhead. For the typical RIA, a principal and a handful of advisers with an outsourced or part-time CCO, it is a recurring diligence burden with no end date. That burden, not any prohibition, is the honest reason many firms have defaulted to "no AI," even while their advisers quietly use it anyway, which is the worst position of all: full exposure, zero control, no records.

## How private deployment changes the analysis

Now run the same obligations against an AI system deployed in the firm's own environment, on infrastructure the firm controls.

| Obligation | Third-party cloud AI tool | Private deployment |
| --- | --- | --- |
| Rule 204-2 retention | AI interactions live on vendor servers, outside the firm's archive and retention schedule. | Interactions stay in the firm's environment, retained under the firm's existing 204-2 procedures. |
| Access controls on records | Governed by the vendor's security model, not the firm's. | The firm's existing access controls and permissions apply directly. |
| Prompt production in an exam | Depends on which tools advisers used and what the vendor can export. | Records are in firm systems and producible like any other electronic record. |
| Reg S-P safeguards scope | Firm's safeguards program must extend to the vendor's environment and practices. | Client information never leaves the firm's existing safeguards program. |
| Service provider oversight | Full due diligence and ongoing monitoring required for each AI vendor holding client data. | No third party holds client data, so the oversight obligation does not extend outward. |
| Breach notification exposure | A vendor breach can trigger the firm's 30-day notification to affected clients. | Breach exposure stays within the firm's own perimeter, already covered by its incident response program. |

The consistent theme: [private deployment](/blog/private-ai-vs-chatgpt-enterprise/) does not eliminate any obligation. It relocates every obligation onto infrastructure the firm already governs, documents, and answers for. The compliance program the firm already runs for its CRM, its portfolio accounting system, and its document storage simply extends to one more internal system, instead of stretching to cover an outside vendor the firm can neither control nor fully see.

## A practical checklist for principals and CCOs

1.  **Inventory actual AI use.** Survey advisers and staff. The gap between the firm's official AI posture and actual behavior is where the risk lives.
2.  **Write the policy around client data flow, not tool names.** "No client information in systems the firm does not control" tracks both Rule 204-2 and Reg S-P, and it survives every new tool launch.
3.  **Map AI use cases to the records rule.** Anything touching recommendations, advice, or client communications belongs in a system where the firm can retain and produce it.
4.  **Fold AI into your Reg S-P program.** Both compliance dates have passed. Your incident response program, service provider oversight, and notification procedures should already name AI tools explicitly. Examiners are prioritizing this.
5.  **For client-data workloads, require firm-controlled deployment.** It is the cleanest answer to both rules at once, and it converts AI from a compliance liability into a firm asset.
6.  **Document everything.** Reasonably designed policies and procedures are demonstrated on paper. The firm that can show its analysis is most of the way to passing the exam.

## The bottom line

The SEC looked at AI-specific rulemaking and walked away, leaving advisers with rules that were already sufficient: keep your records, safeguard your clients' information, and answer for both. Cloud AI tools make both duties harder, because they move records and client data onto infrastructure the firm does not control. Private deployment makes both duties familiar, because everything stays inside the perimeter the firm already defends.

Your book of business is the asset. The knowledge around it, decades of client context, planning history, and institutional memory, is what AI can finally make usable. The firms that get this right will be the ones that put that intelligence to work without ever letting it leave the building.

<section class="sources"><h2>Primary sources</h2><ul><li><a href="https://www.law.cornell.edu/cfr/text/17/275.204-2" target="_blank" rel="noopener">Rule 204-2, 17 CFR § 275.204-2</a></li><li><a href="https://www.finra.org/rules-guidance/guidance/sec-regulation-s-p-compliance-date-reminder-20251114" target="_blank" rel="noopener">Reg S-P Amendments &amp; Compliance Dates</a></li><li><a href="https://www.sec.gov/rules-regulations/2025/06/s7-12-23" target="_blank" rel="noopener">SEC Withdrawal of AI Rule Proposal (June 2025)</a></li></ul></section>

<p class="disclaimer">This article is provided for general informational purposes only and does not constitute legal, compliance, or investment advice. Rules, regulations, and compliance dates are subject to amendment and interpretation. Firms should consult their own compliance counsel or chief compliance officer before adopting any AI tool or policy.</p>
