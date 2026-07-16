import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const venueOrganizations = sqliteTable("venue_organizations", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  status: text("status").notNull().default("prospect"),
  area: text("area").notNull(),
  address: text("address"),
  verifiedAt: integer("verified_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const venueSpaces = sqliteTable("venue_spaces", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id").notNull().references(() => venueOrganizations.id),
  name: text("name").notNull(),
  venueType: text("venue_type").notNull(),
  seatedCapacity: integer("seated_capacity"),
  standingCapacity: integer("standing_capacity"),
  priceFromSle: integer("price_from_sle"),
  publicationStatus: text("publication_status").notNull().default("draft"),
  description: text("description"),
});

export const availability = sqliteTable("availability", {
  id: text("id").primaryKey(),
  spaceId: text("space_id").notNull().references(() => venueSpaces.id),
  eventDate: text("event_date").notNull(),
  status: text("status").notNull().default("confirmation_required"),
  confirmedBy: text("confirmed_by"),
  confirmedAt: integer("confirmed_at", { mode: "timestamp" }),
  expiresAt: integer("expires_at", { mode: "timestamp" }),
});

export const enquiries = sqliteTable("enquiries", {
  id: text("id").primaryKey(),
  customerName: text("customer_name").notNull(),
  phone: text("phone").notNull(),
  eventType: text("event_type").notNull(),
  eventDate: text("event_date"),
  guestCount: integer("guest_count"),
  preferredArea: text("preferred_area"),
  budgetNote: text("budget_note"),
  status: text("status").notNull().default("new"),
  consentAt: integer("consent_at", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
