export type Venue = {
  slug: string;
  name: string;
  area: string;
  type: string;
  capacity: string;
  summary: string;
  images: string[];
  suitableFor: string[];
  facilities: string[];
  layouts: { name: string; capacity: string; description: string }[];
  included: string[];
  rules: string[];
};

export const venues: Venue[] = [
  {
    slug: "oceanview-conference-hall",
    name: "Oceanview Conference Hall",
    area: "West Freetown",
    type: "Conference space",
    capacity: "Up to 140 guests",
    summary: "A bright, air-conditioned hall designed for workshops, conferences, presentations and professional gatherings.",
    images: ["/images/sample-conference.png", "/images/sample-celebration.png", "/images/venuefind-hero.png"],
    suitableFor: ["Conferences", "Workshops", "Corporate meetings", "Training sessions"],
    facilities: ["Air conditioning", "Projector and screen", "Dressing / preparation room", "Backup generator", "Parking area", "Accessible toilets", "Stage and lectern", "Catering preparation area"],
    layouts: [
      { name: "Theatre style", capacity: "Up to 140", description: "Forward-facing rows for presentations and conferences." },
      { name: "Classroom style", capacity: "Up to 80", description: "Tables and chairs arranged for note-taking and training." },
      { name: "Banquet style", capacity: "Up to 100", description: "Round tables with a central presentation or dining area." },
    ],
    included: ["Standard chairs", "Basic tables", "Venue cleaning", "On-site venue representative"],
    rules: ["Final setup must be agreed in advance", "Outside catering requires approval", "Generator use may carry an additional charge"],
  },
  {
    slug: "tropical-garden-venue",
    name: "Tropical Garden Venue",
    area: "Western Area",
    type: "Garden venue",
    capacity: "Up to 180 guests",
    summary: "A lush outdoor setting for ceremonies, receptions, birthdays and private dinners, with flexible seating and decoration options.",
    images: ["/images/sample-garden.png", "/images/venuefind-hero.png", "/images/sample-celebration.png"],
    suitableFor: ["Weddings", "Birthdays", "Private dinners", "Outdoor receptions"],
    facilities: ["Private dressing room", "Covered preparation area", "Outdoor lighting", "Generator connection", "Parking area", "Guest toilets", "Catering access", "Security point"],
    layouts: [
      { name: "Ceremony aisle", capacity: "Up to 160", description: "Two seating blocks with a central aisle and focal point." },
      { name: "Garden banquet", capacity: "Up to 180", description: "Round or long dining tables across the main lawn." },
      { name: "Cocktail reception", capacity: "Up to 220 standing", description: "Open layout with scattered high tables and lounge areas." },
    ],
    included: ["Use of the main garden", "Basic outdoor lighting", "Venue cleaning", "On-site venue representative"],
    rules: ["Rain plan must be discussed", "Music ends at the agreed time", "Decoration removal is the organizer's responsibility"],
  },
  {
    slug: "sunset-celebration-hall",
    name: "Sunset Celebration Hall",
    area: "Central Freetown",
    type: "Indoor hall",
    capacity: "Up to 120 guests",
    summary: "A colourful, welcoming indoor hall suited to birthdays, dinners, engagement celebrations and medium-sized receptions.",
    images: ["/images/sample-celebration.png", "/images/sample-conference.png", "/images/sample-garden.png"],
    suitableFor: ["Birthdays", "Engagements", "Dinners", "Wedding receptions"],
    facilities: ["Air conditioning", "Dressing room", "Small stage", "Sound system connection", "Backup generator", "Guest toilets", "Catering preparation area", "Limited on-site parking"],
    layouts: [
      { name: "Round-table banquet", capacity: "Up to 120", description: "Dining tables arranged around a dance floor or central feature." },
      { name: "Dinner and stage", capacity: "Up to 100", description: "Clear sightlines to the stage with a formal dining layout." },
      { name: "Open celebration", capacity: "Up to 150 standing", description: "Reduced seating with more space for dancing and mingling." },
    ],
    included: ["Standard tables and chairs", "Basic stage", "Venue cleaning", "On-site venue representative"],
    rules: ["Decorations must not damage walls", "External sound systems require approval", "Closing time is agreed per event"],
  },
];

export function getVenue(slug: string) {
  return venues.find((venue) => venue.slug === slug);
}
