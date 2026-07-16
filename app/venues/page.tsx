import Image from "next/image";
import Link from "next/link";

const venues = [
  ["Oceanview Conference Hall", "West Freetown", "Conference space", "Up to 140 guests", "/images/sample-conference.png"],
  ["Tropical Garden Venue", "Western Area", "Garden venue", "Up to 180 guests", "/images/sample-garden.png"],
  ["Sunset Celebration Hall", "Central Freetown", "Indoor hall", "Up to 120 guests", "/images/sample-celebration.png"],
  ["Beachside Event Lawn", "Western Area Rural", "Outdoor venue", "Up to 250 guests", "/images/venuefind-hero.png"],
  ["Garden Dinner Space", "Hill Station", "Private event space", "Up to 80 guests", "/images/sample-garden.png"],
  ["City Workshop Hall", "Central Freetown", "Meeting space", "Up to 100 guests", "/images/sample-conference.png"],
];

export default function VenuesPage() {
  return <main className="page-shell">
    <header className="site-header"><Link className="brand" href="/"><span className="brand-pin">●</span><span>venue<span>Find</span></span></Link><nav className="desktop-nav"><Link href="/venues">Discover</Link><Link href="/how-it-works">How it works</Link><Link href="/list-venue">For venue owners</Link></nav><Link className="button button-small button-outline" href="/list-venue">List your venue</Link></header>
    <section className="page-hero"><p className="eyebrow">Venue catalogue</p><h1>Find a space that fits the event you have in mind.</h1><p>Search by practical needs, then ask VenueFind to confirm the date with the venue.</p></section>
    <div className="content-wrap">
      <form className="filter-bar"><select aria-label="Event type"><option>All event types</option><option>Wedding</option><option>Birthday</option><option>Workshop</option><option>Corporate</option></select><input type="date" aria-label="Event date"/><input type="number" placeholder="Guest count" aria-label="Guest count"/><select aria-label="Area"><option>All areas</option><option>Central Freetown</option><option>West Freetown</option><option>Western Area Rural</option></select><button className="button button-primary">Update search</button></form>
      <div className="notice"><strong>Pilot catalogue:</strong> These are representative profiles for testing the website information standard. They are not yet published partner venues and no availability claim is being made.</div>
      <div className="venue-grid">{venues.map(([name, area, type, capacity, image]) => <article className="venue-card" key={name}><div className="venue-image"><Image src={image} alt={name} fill sizes="(max-width: 700px) 100vw, 33vw"/><span className="sample-label">Sample profile</span><span className="status-badge pending">● Confirmation required</span></div><div className="venue-card-body"><p className="venue-type">{type}</p><h3>{name}</h3><p className="venue-location">⌖ {area}</p><div className="venue-meta"><span>{capacity}</span><span>Price on confirmation</span></div><Link className="button button-card" href="/how-it-works">How confirmation works <span>→</span></Link></div></article>)}</div>
    </div>
  </main>;
}
