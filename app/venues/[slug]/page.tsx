import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVenue, venues } from "@/lib/venues";
import AvailabilityBooking from "./AvailabilityBooking";

export function generateStaticParams() {
  return venues.map((venue) => ({ slug: venue.slug }));
}

export default async function VenueDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const venue = getVenue(slug);
  if (!venue) notFound();

  return <main className="page-shell">
    <header className="site-header"><Link className="brand" href="/"><span className="brand-pin">●</span><span>venue<span>Find</span></span></Link><nav className="desktop-nav"><Link href="/venues">Discover</Link><Link href="/how-it-works">How it works</Link><Link href="/list-venue">For venue owners</Link></nav><Link className="button button-small button-outline" href="/list-venue">List your venue</Link></header>

    <div className="venue-detail-wrap">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>›</span><Link href="/venues">Venues</Link><span>›</span><strong>{venue.name}</strong></nav>
      <section className="detail-heading"><div><p className="venue-type">Sample venue profile · {venue.type}</p><h1>{venue.name}</h1><p>⌖ {venue.area} &nbsp;·&nbsp; {venue.capacity}</p></div><div className="status-badge-static"><span>●</span><div><strong>Confirmation required</strong><small>No live date claim is being made</small></div></div></section>

      <section className="detail-gallery">
        <div className="gallery-main"><Image src={venue.images[0]} alt={`Main view of ${venue.name}`} fill priority sizes="(max-width: 900px) 100vw, 65vw" /></div>
        <div className="gallery-side"><div><Image src={venue.images[1]} alt={`Alternative setup at ${venue.name}`} fill sizes="35vw" /></div><div><Image src={venue.images[2]} alt={`Event setup inspiration for ${venue.name}`} fill sizes="35vw" /><span>Sample photography</span></div></div>
      </section>

      <div className="detail-layout">
        <div className="detail-content">
          <section className="detail-section"><p className="eyebrow">About this space</p><h2>A closer look at the venue</h2><p className="detail-lede">{venue.summary}</p><div className="occasion-tags">{venue.suitableFor.map(item => <span key={item}>{item}</span>)}</div></section>

          <section className="detail-section"><p className="eyebrow">Facilities and features</p><h2>What the venue offers</h2><div className="facility-grid">{venue.facilities.map((facility, index) => <div key={facility}><span>{["✦","▣","◉","⚡","⌖","◇","▰","◎"][index]}</span><strong>{facility}</strong></div>)}</div><p className="detail-note">Facilities shown here are part of this sample profile and must be verified with the venue before publication.</p></section>

          <section className="detail-section"><p className="eyebrow">Hall setup and capacity</p><h2>See how the space can work</h2><div className="layout-grid">{venue.layouts.map(layout => <article key={layout.name}><div className="layout-diagram" aria-hidden="true"><span/><span/><span/><span/><span/><span/></div><h3>{layout.name}</h3><strong>{layout.capacity}</strong><p>{layout.description}</p></article>)}</div></section>

          <section className="detail-section split-info"><div><p className="eyebrow">Usually included</p><h2>Included with the space</h2><ul>{venue.included.map(item => <li key={item}>✓ {item}</li>)}</ul></div><div><p className="eyebrow">Important conditions</p><h2>Rules to confirm</h2><ul>{venue.rules.map(item => <li key={item}>• {item}</li>)}</ul></div></section>
        </div>

        <aside className="detail-sidebar"><AvailabilityBooking venueName={venue.name} /></aside>
      </div>
    </div>
  </main>;
}
