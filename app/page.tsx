import Image from "next/image";
import Link from "next/link";

const sampleVenues = [
  { slug: "oceanview-conference-hall", name: "Oceanview Conference Hall", area: "West Freetown", type: "Conference space", capacity: "Up to 140 guests", image: "/images/sample-conference.png" },
  { slug: "tropical-garden-venue", name: "Tropical Garden Venue", area: "Western Area", type: "Garden venue", capacity: "Up to 180 guests", image: "/images/sample-garden.png" },
  { slug: "sunset-celebration-hall", name: "Sunset Celebration Hall", area: "Central Freetown", type: "Indoor hall", capacity: "Up to 120 guests", image: "/images/sample-celebration.png" },
];

const categories = [
  ["💍", "Weddings"],
  ["🎂", "Birthdays"],
  ["🏢", "Corporate"],
  ["🎤", "Conferences"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="venueFind home">
          <span className="brand-pin" aria-hidden="true">●</span>
          <span>venue<span>Find</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/venues">Discover</Link>
          <a href="#categories">Categories</a>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/list-venue">For venue owners</Link>
        </nav>
        <Link className="button button-small button-outline" href="/list-venue">List your venue</Link>
      </header>

      <section className="hero-new">
        <Image src="/images/venuefind-hero.png" alt="A beach wedding venue prepared at sunset" fill priority sizes="100vw" className="hero-photo" />
        <div className="hero-shade" />
        <div className="hero-split">
          <div className="hero-content">
            <p className="hero-kicker"><span /> Venue discovery across Sierra Leone</p>
            <h1>Find the space that makes <em>the moment.</em></h1>
            <p>From weddings and birthdays to conferences and workshops, discover extraordinary venues for whatever you are planning.</p>
            <div className="hero-trust"><span>✓ Verified venue details</span><span>✓ Clear date status</span><span>✓ Free to search</span></div>
          </div>

          <form className="hero-search" action="/venues">
            <div className="search-card-heading"><p>Start your search</p><h2>What are you planning?</h2></div>
            <label className="search-event">
              <span>Event type</span>
              <select name="event" defaultValue="">
                <option value="" disabled>Choose an event type</option>
                <option>Wedding</option><option>Birthday</option><option>Workshop</option><option>Corporate event</option><option>Conference</option><option>Dinner or gala</option>
              </select>
            </label>
            <label><span>Preferred area</span><select name="area"><option>Anywhere in the Western Area</option><option>Central Freetown</option><option>East Freetown</option><option>West Freetown</option><option>Western Area Rural</option></select></label>
            <div className="hero-form-row"><label><span>Preferred date</span><input name="date" type="date" /></label><label><span>Number of guests</span><input name="guests" type="number" min="1" placeholder="e.g. 150" /></label></div>
            <button className="button button-primary" type="submit">Find venues <span aria-hidden="true">→</span></button>
            <small>Searching is free. No account is required.</small>
          </form>
        </div>
      </section>

      <section className="category-section" id="categories">
        <div className="section-title-row"><div><p className="eyebrow">Explore by occasion</p><h2>Whatever you&apos;re celebrating, start here.</h2></div><Link href="/venues">See all venues →</Link></div>
        <div className="category-grid">
          {categories.map(([icon, name]) => <Link href={`/venues?event=${name}`} className="category-card" key={name}><span className="category-icon">{icon}</span><strong>{name}</strong><span className="category-arrow">→</span></Link>)}
        </div>
      </section>

      <section className="venues-section">
        <div className="section-title-row"><div><p className="eyebrow">Featured in Freetown</p><h2>Spaces worth discovering.</h2><p>Representative pilot profiles showing the standard every verified venue will meet.</p></div><Link href="/venues">Browse all venues →</Link></div>
        <div className="venue-grid">
          {sampleVenues.map((venue) => (
            <article className="venue-card" key={venue.name}>
              <div className="venue-image"><Image src={venue.image} alt={venue.name} fill sizes="(max-width: 700px) 100vw, 33vw" /><span className="sample-label">Sample profile</span><span className="status-badge pending">● Confirmation required</span></div>
              <div className="venue-card-body"><p className="venue-type">{venue.type}</p><h3>{venue.name}</h3><p className="venue-location">⌖ {venue.area}</p><div className="venue-meta"><span>{venue.capacity}</span><span>Price on confirmation</span></div><Link href={`/venues/${venue.slug}`} className="button button-card">View details <span>→</span></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="availability-section">
        <div><p className="eyebrow">Availability without guesswork</p><h2>Know what the date status really means.</h2><p>We do not put a green tick on old information. VenueFind shows when a date was confirmed and asks the venue for a fresh answer when necessary.</p><Link href="/how-it-works" className="button button-outline">How confirmation works →</Link></div>
        <div className="status-cards"><article><span className="status-symbol available">✓</span><div><h3>Available — verified</h3><p>Recently confirmed by an authorized venue contact.</p></div></article><article><span className="status-symbol pending">…</span><div><h3>Confirmation required</h3><p>We need a fresh response before giving you an answer.</p></div></article><article><span className="status-symbol booked">×</span><div><h3>Booked</h3><p>The venue has reported that date as unavailable.</p></div></article></div>
      </section>

      <section className="how-section">
        <div className="section-title-row"><div><p className="eyebrow">Simple from search to inspection</p><h2>Find it. Confirm it. Go see it.</h2></div></div>
        <ol className="steps"><li><span>01</span><div><h3>Tell us the occasion</h3><p>Share your event, date, guest count, preferred area and budget.</p></div></li><li><span>02</span><div><h3>Discover your options</h3><p>Compare spaces, facilities, policies and transparent date statuses.</p></div></li><li><span>03</span><div><h3>Confirm and inspect</h3><p>We contact the venue and help arrange an inspection when needed.</p></div></li></ol>
        <div className="cta-strip"><div><p>FOR VENUE OWNERS</p><h2>Turn your space into someone&apos;s perfect occasion.</h2></div><Link className="button button-light" href="/list-venue">Join the venueFind pilot →</Link></div>
      </section>

      <footer><div className="footer-brand"><span className="brand-pin">●</span><strong>venueFind</strong></div><p>Extraordinary venue discovery and honest date confirmation for Sierra Leone.</p><nav><Link href="/venues">Discover</Link><Link href="/how-it-works">How it works</Link><Link href="/list-venue">List your venue</Link></nav><small>Stage 1 pilot · Freetown, Sierra Leone</small></footer>
    </main>
  );
}
