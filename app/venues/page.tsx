import Link from "next/link";

const venues = [
  ["Waterfront celebration hall", "Aberdeen", "Indoor hall", "Up to 300 guests", "gold"],
  ["Hilltop garden venue", "Hill Station", "Outdoor venue", "Up to 180 guests", "green"],
  ["City workshop space", "Central Freetown", "Meeting space", "Up to 90 guests", "blue"],
  ["Beachside event lawn", "Western Area Rural", "Outdoor venue", "Up to 250 guests", "green"],
  ["Private dining room", "West Freetown", "Restaurant space", "Up to 60 guests", "gold"],
  ["Hotel conference hall", "Central Freetown", "Conference space", "Up to 140 guests", "blue"],
];

export default function VenuesPage() {
  return <main className="page-shell">
    <header className="site-header"><Link className="brand" href="/"><span className="brand-mark">V</span><span>VenueFind</span></Link><nav className="desktop-nav"><Link href="/venues">Find venues</Link><Link href="/how-it-works">How it works</Link><Link href="/list-venue">For venue owners</Link></nav><Link className="button button-small button-outline" href="/list-venue">List your venue</Link></header>
    <section className="page-hero"><p className="eyebrow">Venue catalogue</p><h1>Find a space that fits the event you have in mind.</h1><p>Search by practical needs, then ask VenueFind to confirm the date with the venue.</p></section>
    <div className="content-wrap">
      <form className="filter-bar"><select aria-label="Event type"><option>All event types</option><option>Wedding</option><option>Birthday</option><option>Workshop</option><option>Corporate</option></select><input type="date" aria-label="Event date"/><input type="number" placeholder="Guest count" aria-label="Guest count"/><select aria-label="Area"><option>All areas</option><option>Central Freetown</option><option>West Freetown</option><option>Western Area Rural</option></select><button className="button button-primary">Update search</button></form>
      <div className="notice"><strong>Pilot catalogue:</strong> These are representative profiles for testing the website information standard. They are not yet published partner venues and no availability claim is being made.</div>
      <div className="venue-grid">{venues.map(([name, area, type, capacity, tone], index) => <article className="venue-card" key={name}><div className={`venue-visual ${tone}`}><span className="sample-label">Sample profile</span><span className="visual-number">0{index + 1}</span><div className="architectural-shape" /></div><div className="venue-card-body"><div className="status-pill"><span className="status-dot required"/>Confirmation required</div><h3>{name}</h3><p>{area} · {type}</p><div className="venue-meta"><span>{capacity}</span><span>Price confirmation required</span></div><Link className="card-link" href="/how-it-works">How confirmation works <span>↗</span></Link></div></article>)}</div>
    </div>
  </main>;
}
