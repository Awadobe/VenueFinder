# VenueFind Stage 1 Implementation Plan

**Status:** Approved working sequence for execution  
**Geography:** Freetown and the wider Western Area, Sierra Leone  
**Pilot model:** Website discovery supported by managed WhatsApp and telephone operations  
**Pilot duration:** Eight live weeks after launch readiness is achieved  
**Related document:** `VenueFind_Concept_Note.md`

## 1. Purpose

This plan turns the VenueFind concept into an executable Stage 1 pilot. It covers validation, service design, venue acquisition, internal operations, website development, testing, launch, measurement, and the decisions required after the pilot.

The sequence is intentional. VenueFind's main risk is not whether a website can be built. Its main risk is whether the business can obtain complete venue information, maintain trustworthy availability, and coordinate useful enquiries consistently. The implementation therefore develops the service and the website together.

## 2. Stage 1 Outcome

By the end of Stage 1, VenueFind should have:

- A tested venue discovery and availability-confirmation service
- 20-30 verified venue listings covering useful price, location, capacity, and event-type ranges
- A mobile-first public website using real venue records
- A working internal system for venues, contacts, availability, enquiries, inspections, and outcomes
- A documented WhatsApp and telephone operating procedure
- Eight weeks of pilot evidence
- Evidence about customer demand, owner responsiveness, and willingness to pay
- A clear decision to continue, adjust, narrow, expand, or stop

## 3. Non-Negotiable Stage 1 Boundaries

### Build and operate

- Venue discovery and filtering
- Complete venue profiles
- Three-state date availability
- Customer enquiries and inspection requests
- Venue verification
- Manual availability confirmation
- Internal enquiry tracking
- WhatsApp and telephone communication
- Featured-listing and concierge experiments

### Do not build during Stage 1

- Instant booking
- Full venue payment collection
- Automated owner payouts
- Mandatory booking commissions
- Hotel-room booking
- Public ratings and reviews
- Complex owner dashboards
- AI recommendations
- Native mobile applications
- Nationwide operations

Any proposal to add an excluded feature must identify which pilot risk it resolves and what existing Stage 1 work will be delayed.

## 4. Delivery Principles

1. **Trust before scale:** Do not describe a venue or date as verified without recorded evidence and a timestamp.
2. **Mobile first:** Assume many customers will browse on a mobile device and continue through WhatsApp.
3. **Assisted operations:** Manual work is acceptable when it helps learn the real process.
4. **Structured records:** WhatsApp may be the communication channel, but it must not be the only record of venue or enquiry activity.
5. **Progressive commitment:** Build the minimum required at each stage and pass a readiness gate before expanding.
6. **Real information:** Public pilot testing must use real, authorized venue data rather than invented listings.
7. **Clear claims:** “Available - verified” means recently confirmed, not reserved or guaranteed.
8. **Outcome measurement:** Track confirmations, inspections, and reported bookings—not only page views.

## 5. Roles and Responsibilities

One person may hold several roles during the pilot, but every responsibility needs an owner.

| Role | Main responsibilities |
| --- | --- |
| Product lead | Own scope, decisions, prioritization, and pilot evaluation |
| Venue partnerships lead | Find venues, secure participation, manage owner relationships |
| Verification and content lead | Verify listings, standardize information, approve media and descriptions |
| Operations coordinator | Manage availability requests, customer follow-up, inspections, and outcomes |
| Website developer | Build, test, deploy, secure, and maintain the website and internal system |
| Marketing and customer research lead | Recruit research participants, attract pilot users, collect feedback |
| Data and reporting owner | Maintain definitions, audit records, and prepare weekly pilot reports |

During a small founder-led pilot, the minimum practical division is:

- Founder/product owner
- Venue acquisition and operations
- Design/development

## 6. Overall Sequence

| Phase | Focus | Indicative duration | Exit condition |
| --- | --- | ---: | --- |
| 0 | Project setup and decision register | 2-3 days | Scope, owners, tools, and definitions recorded |
| 1 | Customer and venue validation | 1-2 weeks | Core problem and operating assumptions tested |
| 2 | Service and operating system design | 1 week | Forms, statuses, scripts, records, and SOPs usable |
| 3 | Venue acquisition and verification | 2-4 weeks, then ongoing | Minimum viable catalogue ready |
| 4 | Website product definition and design | 1 week | MVP requirements and flows approved |
| 5 | Website implementation | 2-4 weeks | Staging product passes functional acceptance |
| 6 | Operational rehearsal and launch readiness | 1 week | End-to-end service passes rehearsal |
| 7 | Live pilot | 8 weeks | Pilot evidence and decision report complete |
| 8 | Post-pilot decision and next release | 1 week | Continue, adjust, expand, or stop decision made |

Phases 3 and 5 may overlap after the data structure and listing standard are stable. The website may be built with controlled seed data, but the public pilot must not launch with misleading or incomplete venue records.

## 7. Phase 0 — Project Setup

### Objective

Create a controlled project foundation and prevent unresolved questions from silently becoming product assumptions.

### Tasks

- Confirm the Stage 1 concept note as the governing scope document.
- Assign responsibility for product, venue partnerships, operations, development, and reporting.
- Create a project decision register containing decision, date, owner, reason, and review date.
- Create a risk and issue register.
- Establish a weekly working review.
- Select the internal record system for the pilot.
- Establish a dedicated VenueFind business telephone/WhatsApp number.
- Establish a shared business email address.
- Define where venue media, consent records, and operating documents will be stored.
- Create consistent venue, enquiry, customer, and inspection identifiers.

### Required outputs

- Responsibility matrix
- Decision register
- Risk and issue register
- Project folder structure
- Dedicated communication channels
- Agreed internal data tool

### Exit gate

- Every Phase 1 task has an owner.
- Stage 1 inclusions and exclusions are accepted.
- No one is treating instant booking or payment processing as a launch dependency.

## 8. Phase 1 — Customer and Venue Validation

### Objective

Verify the problem, language, current behaviour, venue calendar practices, and early willingness to participate before finalizing the website workflow.

### 8.1 Customer interviews

Interview at least 15 people who searched for or booked an event venue within the previous 12-18 months. Include wedding customers, birthday organizers, corporate or NGO administrators, workshop organizers, and event planners.

Ask about real past behaviour rather than hypothetical interest:

- What event were they organizing?
- How did they find candidate venues?
- How many people did they ask, call, message, or visit?
- What information was difficult to obtain?
- When did date availability become known?
- What unexpected costs or conditions appeared?
- Why did they reject particular venues?
- How long did the process take?
- What caused the most inconvenience or uncertainty?
- Would they have wanted independent shortlisting or inspection coordination?
- Did they pay anyone to assist, and what was that assistance worth?

Do not ask only, “Would you use VenueFind?” Positive answers to that question are weak evidence.

### 8.2 Venue owner and manager interviews

Interview at least 10 venue owners or authorized managers across venue types and price ranges.

Investigate:

- How customers currently discover the venue
- Enquiry volume and seasonal demand
- Which information customers repeatedly request
- How bookings and temporary holds are recorded
- Who controls the authoritative calendar
- How bookings received through WhatsApp, telephone, referrals, and visits are reconciled
- How often pricing and packages change
- Typical response time
- Deposit, cancellation, and refund practices
- Willingness to share availability
- Concerns about public prices, competitors, and inaccurate enquiries
- Conditions for accepting a free listing
- What would make a promotional service worth paying for

### 8.3 Competitor and alternative review

Document how customers currently solve the problem using:

- Word of mouth
- Event planners
- Social media pages and groups
- Google Maps and web search
- Hotel and venue websites
- Direct telephone and WhatsApp contact
- Physical visits

The purpose is to identify what VenueFind must do better, not to claim that no competition exists.

### Phase 1 evidence thresholds

Proceed without changing the core concept if:

- At least 10 customer interviews show repeated discovery, comparison, or availability friction.
- At least 5 venue managers are willing to provide structured listing information and respond to availability requests.
- The team identifies a workable person or process for obtaining authoritative calendar answers.

If these conditions are not met, adjust the service before website implementation proceeds beyond basic prototypes.

### Required outputs

- Customer interview notes and findings summary
- Venue interview notes and findings summary
- Current customer journey map
- Current venue enquiry workflow
- Assumption log marked confirmed, uncertain, or contradicted
- Updated terminology and search/filter priorities

## 9. Phase 2 — Service and Operating System Design

### Objective

Create the repeatable human process behind the website.

### 9.1 Define operating statuses

#### Venue status

- Prospect
- Contacted
- Interested
- Information incomplete
- Verification pending
- Verified
- Published
- Temporarily paused
- Rejected

#### Date availability status

- Available - verified
- Booked
- Confirmation required
- Held, internal only if the venue uses holds

#### Enquiry status

- New
- Needs clarification
- Ready for venue confirmation
- Sent to venue
- Awaiting venue response
- Availability confirmed
- Unavailable
- Alternatives offered
- Inspection requested
- Inspection scheduled
- Booking reported
- Closed without booking
- Unable to contact

### 9.2 Create the internal data structure

The pilot system must record at minimum:

#### Venues

- Venue ID
- Name, type, area, address, and map location
- Publication and verification status
- Capacity and supported event types
- Price range and currency
- Deposits and package details
- Amenities, inclusions, exclusions, and restrictions
- Owner or manager contact
- Preferred contact channel and operating hours
- Response expectation
- Last profile verification date
- Media authorization status
- Featured status and promotional dates

#### Availability records

- Availability record ID
- Venue ID
- Event date
- Status
- Source or confirming contact
- Confirmed timestamp
- Expiry or review timestamp
- Notes

#### Customer enquiries

- Enquiry ID and created timestamp
- Customer name and contact details
- Consent to be contacted
- Event type and date
- Flexible-date indicator
- Expected attendance
- Preferred areas
- Budget range
- Required facilities
- Selected venues
- Enquiry status and assigned owner
- Response timestamps
- Outcome and closure reason

#### Inspections and outcomes

- Enquiry and venue IDs
- Inspection date and status
- Venue and customer confirmation
- Booking reported indicator
- Reported booking value, if voluntarily supplied
- Follow-up notes

### 9.3 Create operating forms and checklists

- Venue interest form
- Full venue onboarding form
- Venue verification checklist
- Media consent and listing authorization record
- Availability update form or internal entry process
- Customer search/enquiry form
- Inspection request form
- Concierge request form
- Enquiry closure and outcome form
- Listing change request process

### 9.4 Create communication templates

- First venue outreach message
- Venue onboarding follow-up
- Missing-information reminder
- Availability confirmation request
- Customer enquiry acknowledgement
- Availability-confirmed message
- Unavailable and alternatives message
- Inspection confirmation and reminder
- Post-inspection follow-up
- Booking outcome follow-up
- Complaint acknowledgement
- Listing correction acknowledgement

Templates should sound natural in local use and may be adapted for Krio where appropriate. They must not promise availability until confirmation is recorded.

### 9.5 Set provisional service levels

Test the following rather than presenting them as permanent promises:

- Customer enquiry acknowledgement: immediate automated message or within 15 minutes during operating hours
- Venue availability request: sent within 30 minutes during operating hours
- First venue follow-up: after 2 hours without a response
- Customer progress update: within 4 operating hours
- Availability verification expiry: initially 72 hours, then adjusted with pilot evidence
- Listing profile re-verification: at least monthly during the pilot

Availability for a specific event date should be reconfirmed when the customer is ready to proceed, even if the calendar shows recently verified availability.

### 9.6 Create operating procedures

Document step-by-step SOPs for:

- Adding and verifying a venue
- Publishing or pausing a listing
- Updating prices and package information
- Receiving an availability update
- Processing an enquiry
- Escalating an unresponsive venue
- Suggesting alternatives
- Scheduling and changing inspections
- Recording outcomes
- Handling inaccurate information and complaints
- Removing unauthorized or misleading content
- Managing paid featured placement fairly

### Phase 2 exit gate

- One team member can process a test venue from prospect to published using the documents.
- One team member can process a test customer enquiry from submission to outcome.
- Every WhatsApp interaction has a corresponding structured record.
- Status definitions and responsibility for updates are unambiguous.

## 10. Phase 3 — Venue Acquisition and Verification

### Objective

Build a sufficiently varied and reliable catalogue for meaningful customer testing.

### 10.1 Build a venue prospect list

Create an initial list of at least 50 prospects to yield 20-30 published venues. Include a balanced mix across:

- Affordable, mid-range, and premium pricing
- Small, medium, and large capacities
- Central, eastern, western, and surrounding Western Area locations
- Indoor, outdoor, hotel, restaurant, hall, garden, beach, and multipurpose options
- Wedding, birthday, workshop, conference, and corporate suitability

### 10.2 Venue proposition

The Stage 1 venue proposition is:

- A free verified basic listing
- Professional presentation of venue information and media
- Qualified enquiries containing the relevant event details
- No mandatory commission during the pilot
- Optional, clearly labelled paid promotion later

In return, the venue agrees to:

- Provide accurate information and authorized media
- Identify an authorized contact
- Respond to availability enquiries within the agreed period
- Notify VenueFind of relevant changes
- Permit VenueFind to record response and enquiry outcomes

### 10.3 Verification levels

Use clear internal levels:

- **Identity verified:** Contact and authority confirmed.
- **Information verified:** Core information reviewed with the authorized contact.
- **Site verified:** VenueFind representative visited the site and checked defined attributes.

Do not imply that information verification is the same as a physical site inspection. The public badge or wording must accurately reflect the completed verification level.

### 10.4 Media standard

- Minimum of 5 useful current photographs for launch readiness
- Exterior or entrance image
- Main event space from more than one angle
- Seating or event setup where available
- Important supporting facilities
- No misleading filters, watermarks that obscure content, or unrelated stock images
- Recorded owner authorization to publish

### Catalogue readiness gates

#### Development catalogue

- At least 5 complete venue records for building and testing layouts

#### Closed-test catalogue

- At least 10 verified venues with variation in price, capacity, and location

#### Public-pilot catalogue

- Preferably 20 verified venues; absolute minimum 15 if search tests still produce meaningful alternatives
- At least 80% of published profiles complete against the listing standard
- Every venue has a working authorized contact
- Every venue has current media authorization
- Availability process tested successfully with every published venue

## 11. Phase 4 — Website Product Definition and Design

### Objective

Convert the service workflow into a focused mobile-first website specification.

### 11.1 Primary public journeys

#### Discover a venue

Home/search → results → venue profile → date status → enquiry or inspection request → WhatsApp/telephone follow-up

#### Browse without a fixed date

Home/category → results → venue profile → save/share or enquire

#### List a venue

Partner information → interest/onboarding submission → internal verification → publication decision

### 11.2 Required public pages

- Homepage
- Venue search/results page
- Venue detail page
- Enquiry submission and confirmation
- Inspection request and confirmation
- List-your-venue/partner page
- How VenueFind works
- About and trust/verification explanation
- Contact and WhatsApp entry point
- Privacy notice
- Terms of use
- Venue information correction/request-removal process

### 11.3 Homepage requirements

- Clear Sierra Leone-specific value proposition
- Search inputs for event date, event type, location, attendance, and budget
- Featured or representative venues
- Event-type and venue-type discovery
- Explanation of the availability statuses
- Simple “How it works” section
- Venue-owner call to action
- WhatsApp assistance option

### 11.4 Search and filtering requirements

Required filters:

- Event date
- Event type
- Area or location
- Capacity or guest count
- Price range
- Venue type
- Indoor/outdoor
- Key facilities such as parking, generator, air conditioning, catering, and projector

Search behaviour must distinguish:

- No venues matching the customer’s needs
- Venues matching the needs but requiring date confirmation
- Venues known to be booked

Do not hide suitable venues merely because their date status requires confirmation.

### 11.5 Venue profile requirements

- Venue name, location, and map context
- Verification wording
- Photo gallery and optional video
- Price or price range with inclusions and exclusions
- Seated and standing capacities
- Suitable event types
- Facilities and restrictions
- Availability status with timestamp
- Clear disclaimer that availability is not a reservation
- Request confirmation action
- Request inspection action
- Share action suitable for WhatsApp
- Venue information correction option

### 11.6 Design requirements

- Mobile-first responsive layouts
- Readable under ordinary mobile network conditions
- Optimized images and restrained animation
- Accessible colour contrast, labels, keyboard navigation, and focus states
- Plain language rather than marketplace jargon
- Prices displayed in the agreed local format
- Trust signals based on evidence, not decorative badges
- No fake ratings, reviews, booking counts, scarcity, or testimonials

### 11.7 Product acceptance gate

- Every public screen supports a Stage 1 workflow.
- No screen implies instant booking or payment.
- Availability language is consistent throughout.
- A customer can complete the main enquiry journey on a small mobile screen.
- Operations can act on every form submission.

## 12. Phase 5 — Website Implementation

### Objective

Build a secure, maintainable pilot website connected to real structured data.

### 12.1 Recommended technical shape

Use a conventional web application with:

- Responsive public frontend
- Server-side application layer
- Relational database
- Managed image storage
- Restricted staff administration
- Transactional email or messaging notifications where practical
- Analytics and error monitoring

Specific vendors may be selected during technical setup. Vendor choice should consider reliability in Sierra Leone, cost, maintenance burden, data export, and available development capability. The plan does not require the earlier handoff's proposed vendors.

### 12.2 Core data entities

- Staff users
- Venue organizations
- Venue contacts
- Venues and spaces
- Venue media
- Amenities and restrictions
- Pricing packages
- Availability records
- Customer enquiries
- Enquiry-venue matches
- Inspections
- Communication/activity log
- Verification records
- Featured promotions
- Concierge requests

### 12.3 Important modelling correction

A hotel or venue organization may contain multiple independently bookable spaces. The system should therefore distinguish:

- **Venue organization:** The hotel, resort, restaurant, or business
- **Venue space:** A particular hall, garden, conference room, or event area

Availability, capacity, pricing, and media may differ by space. Treating the whole hotel as one venue would create inaccurate results.

### 12.4 Website implementation sequence

#### Sprint 1 — Foundation

- Project setup, code quality, environments, and deployment pipeline
- Theme, typography, navigation, and reusable components
- Database schema and migrations
- Staff access controls
- Venue and media administration
- Controlled seed records

#### Sprint 2 — Discovery

- Homepage and search form
- Venue results and filters
- Venue profile
- Image handling and performance
- Availability display and timestamps
- Empty, loading, and error states

#### Sprint 3 — Enquiries and operations

- Customer enquiry form
- Inspection request
- Consent capture
- Enquiry status management
- Internal activity history
- Notifications and WhatsApp handoff
- Alternative-venue workflow

#### Sprint 4 — Partner intake and readiness

- List-your-venue interest form
- Internal approval and publication controls
- Verification records
- Featured-listing controls
- Basic reporting and exports
- Privacy, terms, contact, and correction pages

### 12.5 Security and privacy requirements

- Staff administration requires authenticated, role-appropriate access.
- Public forms validate and sanitize inputs.
- Rate limiting or equivalent abuse protection is applied to public submissions.
- Customer contact information is not exposed publicly.
- Venue contact information follows the agreed disclosure policy.
- Media uploads restrict file types and sizes.
- Secrets are stored outside source code.
- Data collection is limited to operational need.
- Consent and purpose are stated when collecting customer information.
- Records have a retention and deletion procedure.
- Backups and data export are tested.

Before public launch, obtain locally appropriate advice on privacy, consumer protection, platform terms, and liability. The website must not suggest that VenueFind owns, operates, guarantees, or insures third-party venues unless that is true.

### 12.6 Analytics events

Track meaningful events:

- Search submitted
- Search returned zero, one-two, or three-plus suitable venues
- Filter applied
- Venue profile viewed
- Availability status viewed
- Confirmation requested
- Inspection requested
- WhatsApp assistance selected
- Venue listing interest submitted
- Enquiry confirmed, unavailable, alternative offered, inspection scheduled, and booking reported

Do not collect sensitive or unnecessary data merely because the analytics tool permits it.

### Phase 5 exit gate

- All critical user journeys pass on mobile and desktop.
- Real venue data can be created, corrected, paused, and published without code changes.
- Staff can process enquiries and record outcomes.
- Availability timestamps and expiry behaviour work as defined.
- No critical or high-severity security, privacy, accessibility, or data-loss defects remain.

## 13. Phase 6 — Testing and Launch Readiness

### Objective

Prove that both the software and human service work together before inviting the public.

### 13.1 Functional testing

Test:

- Search combinations and filter logic
- Date and timezone behaviour
- Venue profile completeness
- Availability status and expiry
- Enquiry and inspection submissions
- Duplicate and spam handling
- Form validation and failure recovery
- Media loading on slower connections
- Staff permissions
- Publication and pause controls
- Notification failures
- Analytics events
- Backup and export restoration

### 13.2 Content and trust review

- Confirm authorization for every public image and listing.
- Confirm venue names, areas, capacity, prices, and contacts.
- Check all inclusions, exclusions, and restrictions.
- Remove invented ratings, reviews, urgency, and unverified claims.
- Ensure every availability status has a source and timestamp.
- Confirm privacy, terms, and correction routes are visible.

### 13.3 Operational rehearsal

Run at least 10 end-to-end test scenarios using different event types, budgets, dates, and locations:

1. Customer searches and submits an enquiry.
2. Operations checks the record.
3. Venue receives a structured request.
4. Venue responds or fails to respond.
5. Customer receives confirmation or alternatives.
6. Inspection is scheduled where requested.
7. Outcome is recorded.

Include unavailable dates, unresponsive venue contacts, incorrect customer numbers, changed prices, and urgent requests.

### 13.4 Closed user test

Invite 10-20 representative users to complete realistic tasks without coaching. Observe:

- Whether they understand what VenueFind does
- Whether search questions make sense
- Whether they understand availability versus reservation
- Whether profiles answer their important questions
- Whether they can complete an enquiry
- Whether the WhatsApp handoff is clear
- What still causes them to call or travel unnecessarily

### Public launch gate

Launch only when:

- At least 15 verified venues are publishable, with 20 preferred.
- Search testing provides useful alternatives for common scenarios.
- Every published venue has a responsive authorized contact or a documented fallback.
- Ten operational rehearsals have been completed successfully.
- Critical website journeys work on representative mobile devices.
- Staff coverage and operating hours are published.
- Complaint, correction, privacy, and incident procedures are ready.
- A weekly reporting process is assigned.

## 14. Phase 7 — Eight-Week Live Pilot

### Objective

Determine whether VenueFind creates repeatable customer and venue value and whether any initial revenue mechanism is viable.

### Week 1 — Controlled launch

- Invite a limited audience through personal, professional, event-planning, and venue networks.
- Monitor every enquiry manually.
- Fix critical misunderstanding, broken workflows, and inaccurate records immediately.
- Do not spend heavily on promotion.

### Weeks 2-3 — Workflow stabilization

- Improve incomplete profiles and common search gaps.
- Measure venue response times.
- Adjust reminder timing and availability-expiry rules.
- Identify enquiries that cannot be served and why.

### Weeks 4-5 — Demand and concierge test

- Expand outreach selectively.
- Offer a clearly defined concierge service to appropriate customers.
- Record time spent, price offered, acceptance, delivery cost, and outcome.
- Compare assisted and unassisted customer journeys.

### Weeks 6-7 — Venue promotion test

- Offer a small, transparent featured-placement experiment to interested owners.
- Label sponsored or featured positions clearly.
- Report impressions and qualified enquiries honestly.
- Do not promise bookings.

### Week 8 — Closure and evidence collection

- Follow up all open enquiries and inspections.
- Interview customers and venue partners.
- Reconcile operational and analytics data.
- Calculate pilot measures.
- Document failures, workarounds, and unexpected demand.

## 15. Weekly Pilot Operating Rhythm

### Daily

- Review new enquiries and overdue responses.
- Check availability updates and expiries.
- Resolve inaccurate listings and customer complaints.
- Record every material communication and outcome.

### Weekly

- Review demand, supply, response times, and unresolved cases.
- Identify search gaps by price, capacity, location, and date.
- Review venue-partner performance.
- Audit a sample of listing and availability records.
- Review website errors and customer feedback.
- Choose a small number of operational or product improvements.

### Weekly report

- Active and newly verified venues
- Searches and genuine enquiries
- Suitable-result distribution
- Confirmation, inspection, and reported-booking funnel
- Median venue response time
- Overdue and unresolved cases
- Customer and venue complaints
- Concierge and promotion tests
- Costs, revenue, and staff time
- Decisions and changes made

## 16. Success Metrics and Pilot Decision Thresholds

Initial thresholds are working targets, not promises. They should be interpreted alongside qualitative evidence and demand volume.

### Supply health

- 20-30 verified venues published by or during the pilot
- At least 80% listing completeness
- At least 80% of active partners respond to requests during the pilot
- Median venue response time below 4 operating hours
- Less than 10% of customer-facing availability claims found materially inaccurate

### Customer usefulness

- At least 60% of genuine searches produce three or more plausible options, or the gaps are clearly understood
- At least 70% of valid enquiries receive a definite answer or useful alternatives
- At least 25 completed inspection requests across the pilot, subject to traffic quality
- Evidence from follow-up that customers saved calls, trips, or planning time
- Repeat use or referrals from event planners, organizations, or previous customers

### Commercial evidence

- At least 3 venue partners willing to pay or run a paid featured-placement test
- At least 5 customers accept or seriously request a paid concierge offer
- Delivery cost and staff time for concierge work are measured
- No business-case dependence on untraceable booking commissions

### Continue criteria

Continue to a stronger Stage 2 if:

- Customers repeatedly use the service for real decisions.
- Venue information can be kept sufficiently accurate.
- Venue partners respond within usable timeframes.
- The team can process enquiries without unsustainable manual effort.
- At least one revenue mechanism shows credible willingness to pay.

### Adjust or narrow criteria

Narrow the service if demand concentrates strongly around a particular event type, customer group, location, or concierge use case.

### Stop or redesign criteria

Redesign before further software investment if:

- Venue managers will not provide or maintain information.
- Availability cannot be confirmed reliably.
- Customers use profiles but consistently bypass all VenueFind service steps.
- The operating cost per useful enquiry is unsustainably high.
- No customer or venue segment demonstrates willingness to pay for measurable value.

## 17. Stage 1 Budget Categories

Prepare an actual budget before launch covering:

- Venue visits and local transport
- Photography or media support
- Telephone, WhatsApp, and data costs
- Website development and design
- Domain, hosting, database, storage, messaging, and monitoring
- Legal and privacy review
- Marketing and printed partner materials
- Staff or contractor time
- Customer research incentives, if used
- Contingency

Track founder time even when it is unpaid. A service that appears inexpensive only because labour is unmeasured may not be commercially viable.

## 18. Key Risks and Mitigations

| Risk | Early warning | Mitigation |
| --- | --- | --- |
| Stale availability | Conflicting responses or frequent customer disappointment | Short expiry, timestamps, reconfirmation, partner scorecard |
| Incomplete venue catalogue | Searches return few meaningful options | Recruit against identified price, capacity, and area gaps |
| Slow venue responses | Enquiries remain unresolved | Named contacts, service expectations, reminders, pause unreliable venues |
| Misleading pricing | Customers discover major extra charges | Structured inclusions/exclusions and periodic re-verification |
| Off-platform completion | Outcomes cannot be measured | Stay involved through confirmation and inspection; do not rely on commission |
| Operational overload | Backlogs and missed follow-ups | Limit launch volume, assign cases, automate reminders only after workflow stabilizes |
| Low willingness to pay | Interest but no purchases | Test narrow offers and price points before building payment systems |
| Poor mobile performance | Abandonment on image-heavy pages | Image optimization, performance budgets, real-device testing |
| Unauthorized content | Owner disputes or takedown requests | Written authorization, clear correction/removal process |
| Scope expansion | Accommodation and payments displace core work | Apply Stage 1 boundaries and decision register |

## 19. Decisions Required Before Website Build Begins

These are implementation decisions, not reasons to reopen the entire concept:

1. Final product name and domain availability
2. Brand direction and tone
3. Internal data/operations tool for early use
4. Public disclosure policy for venue telephone numbers
5. Verification wording and badge levels
6. Price display format and whether “contact for price” is permitted
7. Initial availability verification window
8. Published operating hours and expected response language
9. Staff administration requirements
10. Whether the separate prototype in Downloads will be adapted, copied into this workspace, or replaced

Reasonable temporary defaults may be used during development, but each must be entered in the decision register.

## 20. Immediate Execution Checklist

### First five working days

- [ ] Assign roles and create decision/risk registers
- [ ] Set up VenueFind business contact channels
- [ ] Prepare customer and venue interview guides
- [ ] Identify first 15 customer interview candidates
- [ ] Build the initial 50-venue prospect list
- [ ] Schedule the first 5 venue-manager interviews
- [ ] Select the initial internal record system

### By the end of Week 2

- [ ] Complete at least 15 customer interviews
- [ ] Complete at least 10 venue interviews
- [ ] Summarize confirmed, uncertain, and contradicted assumptions
- [ ] Finalize the venue listing standard
- [ ] Finalize availability and enquiry statuses
- [ ] Confirm the first venue partners willing to onboard

### By the end of Week 3

- [ ] Complete forms, checklists, scripts, and SOPs
- [ ] Process one test venue end to end
- [ ] Process one test enquiry end to end
- [ ] Finalize the website MVP requirements
- [ ] Begin onboarding enough records for website development

### Before public pilot

- [ ] Meet the catalogue readiness gate
- [ ] Complete website functional and trust testing
- [ ] Complete 10 operational rehearsals
- [ ] Complete closed user testing
- [ ] Publish legal, privacy, correction, and support information
- [ ] Confirm staff coverage and reporting ownership
- [ ] Approve launch in the decision register

## 21. Build Handoff

Once this implementation plan is accepted, website work should begin in this order:

1. Inspect the existing prototype and decide whether to adapt or replace it.
2. Write the Stage 1 website PRD from Sections 11 and 12 of this plan.
3. Define the data model around venue organizations, spaces, availability, and enquiries.
4. Create the design system and mobile-first public journeys.
5. Implement the staff-controlled venue records before relying on public listing forms.
6. Build discovery, venue profiles, availability, enquiries, and inspections.
7. Load verified pilot venues.
8. Test the complete human-and-software workflow.

This implementation plan is the execution sequence. Changes should be recorded as explicit decisions rather than silently changing the product boundary.

