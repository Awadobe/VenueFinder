import Link from "next/link";

const sampleVenues = [
  {
    name: "Waterfront celebration hall",
    area: "Aberdeen",
    type: "Indoor hall",
    capacity: "Up to 300 guests",
    price: "Price confirmation required",
    status: "Confirmation required",
    tone: "gold",
  },
  {
    name: "Hilltop garden venue",
    area: "Hill Station",
    type: "Outdoor venue",
    capacity: "Up to 180 guests",
    price: "Price confirmation required",
    status: "Confirmation required",
    tone: "green",
  },
  {
    name: "City workshop space",
    area: "Central Freetown",
    type: "Meeting space",
    capacity: "Up to 90 guests",
    price: "Price confirmation required",
    status: "Confirmation required",
    tone: "blue",
  },
];

const eventTypes = [
  ["Wedding", "Ceremonies, receptions and family celebrations"],
  ["Birthday", "From intimate dinners to milestone parties"],
  ["Workshop", "Training rooms with the facilities your team needs"],
  ["Corporate", "Meetings, launches, conferences and formal events"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="VenueFind home">
          <span className="brand-mark">V</span>
          <span>VenueFind</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/venues">Find venues</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/list-venue">For venue owners</Link>
        </nav>
        <Link className="button button-small button-outline" href="/list-venue">
          List your venue
        </Link>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Venue discovery for Sierra Leone</p>
          <h1>Find the right space. <em>Before you make the trip.</em></h1>
          <p className="hero-lede">
            Compare event venues across Freetown, understand what is included,
            and ask us to confirm your date before you travel.
          </p>
          <div className="trust-row" aria-label="Service benefits">
            <span>Verified venue details</span>
            <span>Clear date status</span>
            <span>WhatsApp assistance</span>
          </div>
        </div>

        <form className="search-panel" action="/venues">
          <div className="search-heading">
            <div>
              <p className="overline">Start your search</p>
              <h2>What are you planning?</h2>
            </div>
            <span className="search-step">01</span>
          </div>
          <label>
            Event type
            <select name="event">
              <option value="">Choose an event</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Workshop</option>
              <option>Corporate event</option>
              <option>Conference</option>
              <option>Dinner or gala</option>
            </select>
          </label>
          <div className="form-grid">
            <label>
              Preferred date
              <input name="date" type="date" />
            </label>
            <label>
              Number of guests
              <input name="guests" type="number" min="1" placeholder="e.g. 150" />
            </label>
          </div>
          <label>
            Preferred area
            <select name="area">
              <option value="">Anywhere in the Western Area</option>
              <option>Central Freetown</option>
              <option>East Freetown</option>
              <option>West Freetown</option>
              <option>Western Area Rural</option>
            </select>
          </label>
          <button className="button button-primary button-wide" type="submit">
            Show suitable venues <span aria-hidden="true">→</span>
          </button>
          <p className="form-note">Searching is free. No account is required.</p>
        </form>
      </section>

      <section className="status-explainer">
        <div className="section-intro compact">
          <p className="eyebrow">No misleading green ticks</p>
          <h2>Availability that says what we actually know.</h2>
        </div>
        <div className="status-list">
          <article>
            <span className="status-dot available" />
            <div><h3>Available — verified</h3><p>Recently confirmed by the venue. We still reconfirm before you proceed.</p></div>
          </article>
          <article>
            <span className="status-dot booked" />
            <div><h3>Booked</h3><p>The venue has told us that the selected date is unavailable.</p></div>
          </article>
          <article>
            <span className="status-dot required" />
            <div><h3>Confirmation required</h3><p>We need a fresh response from the venue before giving you an answer.</p></div>
          </article>
        </div>
      </section>

      <section className="venues-section">
        <div className="section-heading-row">
          <div className="section-intro">
            <p className="eyebrow">Pilot catalogue</p>
            <h2>Spaces for the moments that matter.</h2>
            <p>These sample profiles show the information standard. Real venues will only be published after partner verification.</p>
          </div>
          <Link className="text-link" href="/venues">Browse all venues →</Link>
        </div>
        <div className="venue-grid">
          {sampleVenues.map((venue, index) => (
            <article className="venue-card" key={venue.name}>
              <div className={`venue-visual ${venue.tone}`}>
                <span className="sample-label">Sample profile</span>
                <span className="visual-number">0{index + 1}</span>
                <div className="architectural-shape" />
              </div>
              <div className="venue-card-body">
                <div className="status-pill"><span className="status-dot required" />{venue.status}</div>
                <h3>{venue.name}</h3>
                <p>{venue.area} · {venue.type}</p>
                <div className="venue-meta"><span>{venue.capacity}</span><span>{venue.price}</span></div>
                <Link href="/venues" className="card-link">View profile <span>↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="event-section">
        <div className="section-intro compact light">
          <p className="eyebrow">One search, different occasions</p>
          <h2>Start with your event—not a list of hall names.</h2>
        </div>
        <div className="event-grid">
          {eventTypes.map(([title, description], index) => (
            <Link href={`/venues?event=${title}`} className="event-card" key={title}>
              <span className="event-index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="event-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="how-section">
        <div className="section-intro compact">
          <p className="eyebrow">How VenueFind works</p>
          <h2>Less running around. Better information.</h2>
        </div>
        <ol className="steps">
          <li><span>1</span><div><h3>Tell us what you need</h3><p>Share your date, event, guest count, area and budget.</p></div></li>
          <li><span>2</span><div><h3>Compare suitable spaces</h3><p>Review useful venue details, costs, facilities and date status.</p></div></li>
          <li><span>3</span><div><h3>Ask us to confirm</h3><p>We contact the venue and help arrange an inspection when needed.</p></div></li>
        </ol>
        <div className="cta-strip">
          <div><p className="eyebrow">Own or manage a venue?</p><h2>Put your space in front of people actively planning events.</h2></div>
          <Link className="button button-light" href="/list-venue">Join the pilot →</Link>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">V</span><strong>VenueFind</strong></div>
        <p>Verified venue discovery and date confirmation for Freetown and the Western Area.</p>
        <nav><Link href="/venues">Find venues</Link><Link href="/how-it-works">How it works</Link><Link href="/list-venue">List your venue</Link></nav>
        <small>Stage 1 pilot · Sierra Leone</small>
      </footer>
    </main>
  );
}
