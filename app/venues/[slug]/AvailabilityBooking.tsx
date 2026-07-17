"use client";

import { FormEvent, useMemo, useState } from "react";

type Package = { id: string; name: string; price: number; description: string };

const packages: Package[] = [
  { id: "space", name: "Space only", price: 4500, description: "The venue, standard cleaning and an on-site representative." },
  { id: "standard", name: "Standard package", price: 6500, description: "Space, tables, chairs, basic sound and generator support." },
  { id: "full", name: "Full occasion", price: 9200, description: "Standard package plus drink cooling, basic décor and security." },
];

const extras = [
  { id: "projector", name: "Projector & screen", price: 450 },
  { id: "coolers", name: "Drink tubs & ice coolers", price: 350 },
  { id: "sound", name: "Additional sound setup", price: 600 },
  { id: "decor", name: "Basic décor upgrade", price: 900 },
];

const months = [
  { label: "August 2026", year: 2026, month: 7, booked: [2, 8, 9, 15, 22, 23, 29], pending: [6, 16, 27] },
  { label: "September 2026", year: 2026, month: 8, booked: [5, 12, 13, 19, 26], pending: [3, 17, 24] },
];

export default function AvailabilityBooking({ venueName }: { venueName: string }) {
  const [monthIndex, setMonthIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [time, setTime] = useState("Full day");
  const [packageId, setPackageId] = useState("standard");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [showContact, setShowContact] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const month = months[monthIndex];
  const days = new Date(month.year, month.month + 1, 0).getDate();
  const offset = new Date(month.year, month.month, 1).getDay();
  const selectedPackage = packages.find(item => item.id === packageId) ?? packages[1];
  const estimate = selectedPackage.price + extras.filter(item => selectedExtras.includes(item.id)).reduce((sum, item) => sum + item.price, 0);
  const selectedDate = selectedDay ? `${month.label.split(" ")[0]} ${selectedDay}, ${month.year}` : "";
  const cells = useMemo(() => [...Array(offset).fill(null), ...Array.from({ length: days }, (_, index) => index + 1)], [offset, days]);

  function changeMonth(direction: number) {
    setMonthIndex(current => Math.max(0, Math.min(months.length - 1, current + direction)));
    setSelectedDay(null);
    setShowContact(false);
  }

  function toggleExtra(id: string) {
    setSelectedExtras(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) return <div className="booking-card booking-success"><span>✓</span><p className="eyebrow">Request received</p><h2>We will confirm your date.</h2><p>Your request for <strong>{venueName}</strong> on <strong>{selectedDate}</strong> has been recorded in this demonstration. VenueFind would now contact you and the venue before marking the date as booked.</p><div className="request-reference">Sample request · Pending confirmation</div></div>;

  return <div className="booking-card">
    <div className="booking-intro"><p className="eyebrow">Plan your occasion</p><h2>Choose an available date</h2><p>Booked dates cannot be selected. Pending dates are waiting for confirmation.</p></div>

    <div className="calendar-head"><button type="button" disabled={monthIndex === 0} onClick={() => changeMonth(-1)} aria-label="Previous month">←</button><strong>{month.label}</strong><button type="button" disabled={monthIndex === months.length - 1} onClick={() => changeMonth(1)} aria-label="Next month">→</button></div>
    <div className="calendar-grid calendar-weekdays">{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => <span key={day}>{day}</span>)}</div>
    <div className="calendar-grid">{cells.map((day, index) => day === null ? <span key={`empty-${index}`} /> : <button key={day} type="button" className={month.booked.includes(day) ? "booked" : month.pending.includes(day) ? "pending" : selectedDay === day ? "selected" : "available"} disabled={month.booked.includes(day) || month.pending.includes(day)} onClick={() => { setSelectedDay(day); setShowContact(false); }}>{day}</button>)}</div>
    <div className="calendar-legend"><span><i className="available" />Available</span><span><i className="pending" />Pending</span><span><i className="booked" />Booked</span></div>

    {selectedDay && <div className="booking-config">
      <section><h3>1. Choose a time</h3><div className="option-row">{["Morning", "Afternoon", "Evening", "Full day"].map(option => <button type="button" className={time === option ? "active" : ""} onClick={() => setTime(option)} key={option}>{option}</button>)}</div></section>
      <section><h3>2. Choose a package</h3><div className="package-options">{packages.map(item => <label key={item.id}><input type="radio" name="package" value={item.id} checked={packageId === item.id} onChange={() => setPackageId(item.id)} /><span><strong>{item.name}<b>SLE {item.price.toLocaleString()}</b></strong><small>{item.description}</small></span></label>)}</div></section>
      <section><h3>3. Optional extras</h3><div className="addon-options">{extras.map(item => <label key={item.id}><input type="checkbox" checked={selectedExtras.includes(item.id)} onChange={() => toggleExtra(item.id)} /><span>{item.name}<strong>+ SLE {item.price.toLocaleString()}</strong></span></label>)}</div></section>
      <div className="estimate-row"><span>Estimated occasion cost<small>Final price requires venue confirmation</small></span><strong>SLE {estimate.toLocaleString()}</strong></div>
      {!showContact && <button type="button" className="button button-primary booking-cta" onClick={() => setShowContact(true)}>Request {selectedDate} →</button>}
    </div>}

    {showContact && <form className="booking-contact" onSubmit={submit}><div><p className="eyebrow">Almost done</p><h3>How should we contact you?</h3><p>{venueName} · {selectedDate} · {time}</p></div><label>Full name<input name="name" required autoComplete="name" /></label><label>Phone or WhatsApp<input name="phone" type="tel" required autoComplete="tel" placeholder="e.g. +232…" /></label><label>Email address <small>Optional</small><input name="email" type="email" autoComplete="email" /></label><label>Preferred contact<select name="contact"><option>WhatsApp</option><option>Phone call</option><option>Email</option></select></label><label className="contact-consent"><input type="checkbox" required /> I agree that VenueFind may contact me about this request.</label><button className="button button-primary" type="submit">Send booking request →</button><small>Submitting does not confirm or reserve the venue. The venue must accept the request first.</small></form>}
  </div>;
}
