---
title: "IRC §7216 and AI tools: the consent rule CPA firms are quietly violating."
seoTitle: "IRC §7216 and AI Tools: The CPA Consent Rule"
description: "Client tax information in a third-party AI tool is likely a disclosure under IRC §7216. What the rule requires, and the compliant paths for CPA firms."
date: "2026-07-22T09:00:00-04:00"
updated: "2026-07-22T09:00:00-04:00"
author: "Mitch Boraski"
section: "Accounting"
keywords: ["IRC 7216", "section 7216 AI", "CPA firm AI compliance", "tax return information disclosure", "7216 consent requirements", "private AI deployment"]
cta:
  eyebrow: "Private AI for CPA Firms"
  heading: "AI leverage without the consent problem."
  sub: "Bring us one real question about a client engagement. We will show you where the answer comes from."
faq:
  - q: "Does IRC §7216 prohibit CPA firms from using AI?"
    a: "No. Section 7216 does not mention AI and prohibits no technology. It makes it a federal misdemeanor for a tax return preparer to knowingly or recklessly disclose tax return information, or use it for any purpose other than preparing a return, without a regulatory exception or valid taxpayer consent. AI becomes a §7216 issue only when client tax return information leaves the firm and reaches a third-party tool. AI that runs inside the firm's own environment, used to prepare or assist in preparing returns, does not create a third-party disclosure."
  - q: "Is entering client tax information into an AI tool a disclosure under §7216?"
    a: "The prevailing practitioner reading is yes. The regulations define tax return information broadly, and transmitting it to a third-party AI vendor places it in the hands of a party outside the firm. The statute does not distinguish between disclosing data to a person and disclosing it to a software platform. Commentators consider it unlikely that general-purpose AI tools qualify for the auxiliary services exception, and the IRS has issued no AI-specific guidance under §7216, so no exception can be safely assumed."
  - q: "What are the penalties for violating IRC §7216 and §6713?"
    a: "Section 7216 is a criminal statute: a knowing or reckless violation is a misdemeanor punishable by a fine of up to $1,000, up to one year of imprisonment, or both, plus costs of prosecution, for each violation, with the fine rising to $100,000 for violations involving identity theft. Section 6713 adds a civil penalty of $250 per unauthorized disclosure or use, up to $10,000 per calendar year, and it does not require knowledge or recklessness, meaning a firm can incur civil penalties without knowing it violated the rule."
  - q: "What does a valid §7216 consent for AI use require?"
    a: "Under Treasury Regulation 301.7216-3, consent must be knowing and voluntary and obtained before the disclosure occurs. For Form 1040-series taxpayers, Revenue Procedure 2013-14 prescribes the mandatory format, content, and electronic signature requirements. The consent must identify the specific recipient of the disclosure, and a generic reference to various AI tools is not sufficient. In practice this means a separate, compliant, signed consent naming the AI vendor, per client, before any client tax information touches the tool."
  - q: "How does private AI deployment change the §7216 analysis?"
    a: "Section 7216 restricts disclosure to third parties and use outside return preparation. When an AI system runs inside the firm's own environment, client tax return information never reaches a third party, so no disclosure occurs, and using the system to prepare or assist in preparing returns is the purpose the statute expressly permits. The consent machinery that makes third-party AI tools burdensome, per-client signed consents naming each vendor, is largely never triggered, because the condition that requires consent never arises."
alternativeHeadline: "A criminal statute, a strict civil penalty, and the AI habit tax firms have not examined."
wordCount: 2150
about:
  - {"@type":"Thing","name":"Tax return preparer confidentiality"}
  - {"@type":"Thing","name":"CPA firm compliance"}
  - {"@type":"Thing","name":"Artificial intelligence in tax practice"}
mentions:
  - {"@type":"CreativeWork","name":"Internal Revenue Code Section 7216: Disclosure or Use of Information by Preparers of Returns","author":{"@type":"Organization","name":"United States Congress"}}
  - {"@type":"CreativeWork","name":"Treasury Regulations 301.7216-1 through 301.7216-3","author":{"@type":"Organization","name":"U.S. Department of the Treasury"}}
  - {"@type":"CreativeWork","name":"Revenue Procedure 2013-14","author":{"@type":"Organization","name":"Internal Revenue Service"},"datePublished":"2013-01-14"}
---

<aside class="answer-box"><p class="answer-box__label">The Short Answer</p><p><strong>IRC §7216 does not prohibit AI. It prohibits disclosure.</strong> Entering client tax return information into a third-party AI tool is likely a disclosure under the statute's regulations, and no IRS guidance creates an AI exception. §7216 is criminal: up to $1,000 and a year of imprisonment per knowing or reckless violation. Its civil companion, §6713, adds $250 per violation with no intent requirement. Compliant paths exist: signed per-client consents naming the vendor, sanitized inputs, or AI that runs inside the firm so no third-party disclosure ever occurs.</p></aside>

In the first two posts in this series, on [law firms and Rule 1.6(c)](/blog/law-firm-ai-confidentiality-rule-1-6/) and [RIAs and the books-and-records rule](/blog/ria-ai-books-and-records-rule/), the story was the same: the prohibition people fear does not exist, and the real rules reward controlling where data lives.

Tax practice is different, and it deserves a franker warning. Here there is a real statute, it is criminal, and the most widespread AI habit in accounting firms today runs straight into it. If your staff are pasting client information into consumer AI tools to draft letters, summarize documents, or research positions, your firm has a §7216 problem it has probably never analyzed.

## The statute: two verbs, criminal penalties

Internal Revenue Code §7216, enacted in 1971, is one of the sharpest confidentiality provisions in American professional practice:

<figure class="rule-quote"><figcaption>26 U.S.C. §7216(a)</figcaption><blockquote>"Any person who is engaged in the business of preparing, or providing services in connection with the preparation of, returns of the tax imposed by chapter 1... and who knowingly or recklessly (1) discloses any information furnished to him for, or in connection with, the preparation of any such return, or (2) uses any such information for any purpose other than to prepare, or assist in preparing, any such return, shall be guilty of a misdemeanor..."</blockquote><cite>Internal Revenue Code §7216(a), Disclosure or use of information by preparers of returns</cite></figure>

Note the two verbs, because they do separate work. **Disclosure** means the information reaches someone outside the permitted circle. **Use** means the information is put to any purpose other than preparing or assisting in preparing the return. Either one, done knowingly or recklessly without an exception or consent, is a federal misdemeanor: up to $1,000 in fines, up to one year of imprisonment, or both, plus costs of prosecution, per violation. Where the violation involves identity theft, the maximum fine rises to $100,000.

And §7216 travels with a civil companion. Under §6713, each unauthorized disclosure or use draws a $250 penalty, capped at $10,000 per calendar year. Here is the detail most firms miss: **§6713 has no intent requirement.** The National Taxpayer Advocate has noted this asymmetry explicitly. A firm does not need to know it violated the rule to owe the civil penalty. "We didn't realize the tool worked that way" is a defense to the crime, not to the penalty.

## "Tax return information" is broader than the return

The implementing regulations, Treasury Regulations §301.7216-1 through -3, define tax return information expansively: essentially any information furnished in any form for, or in connection with, the preparation of a return. Not just the 1040. The W-2s and K-1s, the client's questions, the engagement correspondence, the depreciation schedule, the notes from the planning call. If it was furnished in connection with return preparation, it is covered.

Now hold that definition next to how AI is actually used in a tax practice in 2026. A staff accountant pastes a client's brokerage statement into a chatbot to summarize the transactions. A manager drops a client email thread into an AI tool to draft a response about an IRS notice. A partner describes a client's specific fact pattern, with numbers, to research a position. Every one of those inputs is tax return information moving to a third party's servers.

## Why the AI vendor is a third party, not an exception

The prevailing practitioner reading is direct: transmitting tax return information to a third-party AI tool is a disclosure under the regulations. The statute does not distinguish between disclosing data to a person and disclosing it to a software platform. What matters is that the information left the firm and reached a party outside it, on infrastructure the firm does not control, under terms the firm did not write.

Could a general-purpose AI tool qualify as an "auxiliary service" under the regulations, the exception that covers things like processing services supporting return preparation? Commentators consider it unlikely, and here is the decisive fact: **the IRS has issued no §7216 guidance addressing AI at all.** No notice, no ruling, no FAQ. The most recent guidance linked from the IRS's own §7216 Information Center predates the entire generative AI era. A firm relying on an unwritten exception to a criminal statute is not managing risk. It is hoping.

Meanwhile the IRS Office of Professional Responsibility has begun addressing practitioner AI use within the Circular 230 framework, and the direction of that guidance is consistent: use secure, firm-approved systems, and where §7216-protected information is involved, obtain specific signed client consent before it touches any third-party AI tool.

<aside class="takeaway"><p>There is no AI exception to §7216. There is a broad definition of protected information, a criminal penalty for disclosing it, and a civil penalty that applies whether you knew or not.</p></aside>

## The consent path is real, and harder than firms think

Section 7216 has a front door: the taxpayer's consent under Treasury Regulation §301.7216-3. But this is not a checkbox. The consent must be knowing and voluntary, must be obtained before the disclosure occurs, and must identify the specific recipient. A blanket line in the engagement letter authorizing "the use of technology tools including artificial intelligence" does not meet the standard. "Various AI tools" is not a recipient.

For Form 1040-series clients, the bar is higher still. Revenue Procedure 2013-14 prescribes the mandatory format and content of the consent, down to specific language and electronic signature requirements. Get the format wrong and the consent is not valid, which means the disclosure it purported to authorize was not authorized.

Run the logistics for a typical firm: a separate compliant consent, naming each specific AI vendor, signed by each client, before any of that client's information touches the tool, refreshed as vendors change. During filing season. Across a thousand returns. Firms that look honestly at that workload usually conclude what you would expect: the consent path exists, but as an operating model it fights the calendar, the staff, and the clients all at once.

## The three compliant paths, compared

A firm that wants AI's leverage on real client work has three defensible routes:

| Dimension | Per-client consents | Sanitized inputs only | Private deployment |
| --- | --- | --- | --- |
| How it works | Compliant §7216-3 consent naming each AI vendor, signed by each client before disclosure. | Client-identifying information is stripped before anything reaches a third-party tool. | AI runs in the firm's own environment. Information never reaches a third party. |
| §7216 exposure | Managed, if every consent is valid, current, and correctly formatted per Rev. Proc. 2013-14. | Managed, if sanitization is perfect every time, by every staff member, under deadline pressure. | Largely never triggered. No third-party disclosure occurs, and preparation use is the permitted purpose. |
| Workflow friction | High. Consent collection per client, per vendor, during filing season. | High. Every prompt requires judgment about what counts as identifying. | Low. Staff use the system like any internal tool, under firm access controls. |
| Failure mode | One invalid or missing consent equals one unauthorized disclosure. | One pasted document with a name on it equals one unauthorized disclosure. | Failure modes are the firm's existing security program, already managed and documented. |
| Scales across the firm? | Poorly. Burden grows with every client and every vendor. | Poorly. Depends on flawless human behavior at volume. | Yes. One system, one policy, whole firm. |

Be clear about what private deployment does and does not solve. It removes the third-party disclosure, which is the trigger for the consent machinery. It does not repeal the statute: using client information inside the firm for purposes unrelated to preparing returns, marketing analysis for instance, still has its own rules. But using an internal AI system to prepare and assist in preparing returns is precisely the purpose §7216 permits on its face. The firm ends up where the statute always assumed it would be: client information inside the firm, used to serve the client.

## A practical checklist for managing partners

1.  **Survey actual AI use this week, not at the partner retreat.** The exposure is happening now, one pasted document at a time, and §6713 does not care whether leadership knew.
2.  **Issue an interim policy keyed to data flow.** "No client tax return information in tools the firm does not control" is enforceable, tracks the statute, and does not require banning AI for non-client work.
3.  **Audit your engagement letter.** If it contains generic AI consent language, do not assume it satisfies §301.7216-3 or Rev. Proc. 2013-14. Have it reviewed against the actual requirements.
4.  **Pick your path deliberately.** Consents, sanitization, or private deployment. Any of the three can be defended. Drifting among them with no analysis cannot.
5.  **Document the decision.** If the question ever arises, the firm that can show it analyzed §7216 and chose a compliant architecture is in a different conversation than the firm that never looked.

## The bottom line

Tax practices hold exactly the kind of dense, document-heavy institutional knowledge that AI turns into leverage: decades of client history, positions taken, workpapers, correspondence. §7216 does not stand between your firm and that leverage. It stands between your clients' information and third parties. Keep the intelligence inside the firm, and the statute is not an obstacle. It is a description of the architecture you should have wanted anyway.

<section class="sources"><h2>Primary sources</h2><ul><li><a href="https://www.law.cornell.edu/cfr/text/26/301.7216-1" target="_blank" rel="noopener">Treas. Reg. §301.7216-1</a></li><li><a href="https://www.irs.gov/tax-professionals/section-7216-information-center" target="_blank" rel="noopener">IRS §7216 Information Center</a></li><li><a href="https://www.irs.gov/pub/irs-drop/rp-13-14.pdf" target="_blank" rel="noopener">Rev. Proc. 2013-14</a></li><li><a href="https://www.aicpa-cima.com/resources/download/section-7216-guidance-and-sample-consent-forms" target="_blank" rel="noopener">AICPA §7216 Guidance &amp; Consent Forms</a></li></ul></section>

<p class="disclaimer">This article is provided for general informational purposes only and does not constitute legal or tax advice. Statutes, regulations, and administrative guidance are subject to amendment and interpretation, and the application of IRC §7216 to any particular tool or workflow depends on specific facts. Firms should consult their own counsel before adopting any AI tool, policy, or consent process.</p>
