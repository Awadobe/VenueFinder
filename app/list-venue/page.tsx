import Link from "next/link";
import VenueListingForm from "./VenueListingForm";

export default function ListVenue() {
  return <main className="page-shell">
    <header className="site-header"><Link className="brand" href="/"><span className="brand-pin">●</span><span>venue<span>Find</span></span></Link><nav className="desktop-nav"><Link href="/venues">Discover</Link><Link href="/how-it-works">How it works</Link><Link href="/list-venue">For venue owners</Link></nav><Link className="button button-small button-outline" href="/venues">Discover venues</Link></header>
    <section className="page-hero"><p className="eyebrow">Venue partner pilot</p><h1>Help the right customers understand your space before they visit.</h1><p>Basic pilot listings are free. We verify the venue and its authorized contact before anything is published.</p></section>
    <VenueListingForm />
  </main>;
}
