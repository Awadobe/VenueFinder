"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";

const steps = ["Venue", "Facilities", "Space & setup", "Photos", "Pricing & rules", "Contact & review"];
const eventTypes = ["Weddings", "Birthdays", "Corporate events", "Workshops", "Conferences", "Private dinners"];
const facilityOptions = ["Dressing / preparation room", "Air conditioning", "Backup generator", "Parking area", "Guest toilets", "Accessible entrance", "Stage or lectern", "Projector and screen", "Sound system", "Catering preparation area", "Outdoor area", "Security point"];

export default function VenueListingForm() {
  const [step, setStep] = useState(0);
  const [photos, setPhotos] = useState<{ file: File; url: string }[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function addPhotos(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []).slice(0, Math.max(0, 8 - photos.length));
    setPhotos(current => [...current, ...files.map(file => ({ file, url: URL.createObjectURL(file) }))]);
    event.target.value = "";
  }

  function removePhoto(index: number) {
    setPhotos(current => {
      URL.revokeObjectURL(current[index].url);
      return current.filter((_, photoIndex) => photoIndex !== index);
    });
  }

  if (submitted) return <div className="listing-shell"><section className="listing-success"><span>✓</span><p className="eyebrow">Draft received</p><h2>Your venue information is ready for verification.</h2><p>This prototype does not save information yet. In the live system, VenueFind would review the venue, confirm the authorized contact and request any missing evidence before publishing the profile.</p><button className="button button-primary" onClick={() => { setSubmitted(false); setStep(0); }}>Create another listing</button></section></div>;

  return <div className="listing-shell">
    <div className="listing-progress" aria-label="Listing progress">
      {steps.map((label, index) => <button key={label} type="button" className={index === step ? "active" : index < step ? "complete" : ""} onClick={() => index < step && setStep(index)}><span>{index < step ? "✓" : index + 1}</span><strong>{label}</strong></button>)}
    </div>

    <form className="listing-card" onSubmit={event => { event.preventDefault(); setSubmitted(true); }}>
      <header><p className="eyebrow">Step {step + 1} of {steps.length}</p><h2>{["Tell us about the venue", "What does the venue provide?", "How can the space be arranged?", "Show customers the space", "Set expectations clearly", "Who should we contact?"][step]}</h2><p>{["Start with the information customers use to identify and understand the venue.", "Select the facilities customers can expect. VenueFind will verify these before publication.", "Add capacity and layout information so customers can picture their event in the space.", "Upload clear photographs of the exterior, main hall, facilities and different event arrangements.", "Explain the price basis, what is included and the important venue conditions.", "Add the authorized representative and check the listing before sending it for verification."][step]}</p></header>

      <div className={`step-panel intake-grid ${step === 0 ? "active" : ""}`}>
        <label>Venue or business name<input name="venueName" required placeholder="e.g. Oceanview Conference Hall" /></label>
        <label>Venue type<select name="type"><option>Event hall</option><option>Hotel event space</option><option>Restaurant private space</option><option>Garden or outdoor venue</option><option>Beach or resort venue</option><option>Community or multipurpose centre</option></select></label>
        <label>Area or community<input name="area" required placeholder="e.g. Aberdeen, Freetown" /></label>
        <label>Full address or landmark<input name="address" placeholder="Help customers find the entrance" /></label>
        <label>Approximate maximum capacity<input name="capacity" type="number" min="1" placeholder="e.g. 150" /></label>
        <label>Separately bookable spaces<input name="spaces" type="number" min="1" defaultValue="1" /></label>
        <label className="full">Describe the venue<textarea name="description" placeholder="What makes this space suitable for an event?" /></label>
        <fieldset className="full choice-field"><legend>Events you accept</legend><div className="choice-grid">{eventTypes.map(item => <label key={item}><input type="checkbox" name="eventTypes" value={item} /><span>{item}</span></label>)}</div></fieldset>
      </div>

      <div className={`step-panel ${step === 1 ? "active" : ""}`}><div className="choice-grid facility-choices">{facilityOptions.map(item => <label key={item}><input type="checkbox" name="facilities" value={item} /><span>{item}</span></label>)}</div><label className="standalone-label">Other facilities or services<textarea name="otherFacilities" placeholder="Add anything important that is not shown above" /></label></div>

      <div className={`step-panel intake-grid ${step === 2 ? "active" : ""}`}>
        <label>Primary hall name<input name="hallName" placeholder="e.g. Main Celebration Hall" /></label><label>Floor or space type<select name="spaceType"><option>Indoor hall</option><option>Outdoor garden</option><option>Covered outdoor space</option><option>Conference room</option><option>Mixed indoor and outdoor</option></select></label>
        <label>Theatre-style capacity<input name="theatreCapacity" type="number" min="0" placeholder="Rows facing a stage" /></label><label>Banquet capacity<input name="banquetCapacity" type="number" min="0" placeholder="Guests at dining tables" /></label>
        <label>Classroom capacity<input name="classroomCapacity" type="number" min="0" placeholder="Tables facing forward" /></label><label>Standing capacity<input name="standingCapacity" type="number" min="0" placeholder="Cocktail or open event" /></label>
        <label className="full">Setup notes<textarea name="setupNotes" placeholder="Describe the stage, dance floor, table arrangements or restrictions" /></label>
      </div>

      <div className={`step-panel photo-step ${step === 3 ? "active" : ""}`}><label className="upload-zone"><input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={addPhotos} /><span>＋</span><strong>Choose venue photographs</strong><small>JPG, PNG or WebP · up to 8 photos</small></label><div className="photo-guidance"><strong>Useful photographs include:</strong><span>Exterior and entrance</span><span>Main hall when empty</span><span>Decorated event setup</span><span>Dressing room and facilities</span></div>{photos.length > 0 && <div className="photo-preview-grid">{photos.map((photo, index) => <figure key={`${photo.file.name}-${index}`}><Image src={photo.url} alt={`Selected venue photo ${index + 1}`} width={240} height={140} unoptimized /><button type="button" onClick={() => removePhoto(index)} aria-label={`Remove ${photo.file.name}`}>×</button><figcaption>{index === 0 ? "Cover photo" : `Photo ${index + 1}`}</figcaption></figure>)}</div>}</div>

      <div className={`step-panel intake-grid ${step === 4 ? "active" : ""}`}>
        <label>Starting price (SLE)<input name="price" type="number" min="0" placeholder="e.g. 5000" /></label><label>Price basis<select name="priceBasis"><option>Per event</option><option>Per day</option><option>Per hour</option><option>Price on request</option></select></label>
        <label className="full">What is included?<textarea name="included" placeholder="e.g. chairs, tables, cleaning and on-site representative" /></label><label className="full">Additional charges<textarea name="charges" placeholder="e.g. generator fuel, overtime, security or cleaning deposit" /></label><label className="full">Venue rules and restrictions<textarea name="rules" placeholder="e.g. closing time, decoration rules, outside catering and music restrictions" /></label>
      </div>

      <div className={`step-panel review-step ${step === 5 ? "active" : ""}`}><div className="intake-grid"><label>Contact person<input name="contactName" required /></label><label>Role at the venue<input name="contactRole" placeholder="Owner, manager or representative" /></label><label>Phone / WhatsApp<input name="phone" type="tel" required /></label><label>Email, if available<input name="email" type="email" /></label></div><div className="review-summary"><h3>Before you submit</h3><p>VenueFind will review the information, confirm that you are authorized to represent the venue, and verify key facilities and availability details.</p><label><input type="checkbox" required /> I confirm that the information and photographs belong to this venue and may be reviewed by VenueFind.</label></div></div>

      <footer className="listing-actions"><button className="button button-outline" type="button" disabled={step === 0} onClick={() => setStep(current => current - 1)}>← Back</button><span>Your information stays in this form as you continue.</span>{step < steps.length - 1 ? <button className="button button-primary" type="button" onClick={() => setStep(current => current + 1)}>Save & continue →</button> : <button className="button button-primary" type="submit">Send for verification →</button>}</footer>
    </form>
  </div>;
}
