CREATE TABLE `availability` (
	`id` text PRIMARY KEY NOT NULL,
	`space_id` text NOT NULL,
	`event_date` text NOT NULL,
	`status` text DEFAULT 'confirmation_required' NOT NULL,
	`confirmed_by` text,
	`confirmed_at` integer,
	`expires_at` integer,
	FOREIGN KEY (`space_id`) REFERENCES `venue_spaces`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `enquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`customer_name` text NOT NULL,
	`phone` text NOT NULL,
	`event_type` text NOT NULL,
	`event_date` text,
	`guest_count` integer,
	`preferred_area` text,
	`budget_note` text,
	`status` text DEFAULT 'new' NOT NULL,
	`consent_at` integer NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `venue_organizations` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`status` text DEFAULT 'prospect' NOT NULL,
	`area` text NOT NULL,
	`address` text,
	`verified_at` integer,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `venue_spaces` (
	`id` text PRIMARY KEY NOT NULL,
	`organization_id` text NOT NULL,
	`name` text NOT NULL,
	`venue_type` text NOT NULL,
	`seated_capacity` integer,
	`standing_capacity` integer,
	`price_from_sle` integer,
	`publication_status` text DEFAULT 'draft' NOT NULL,
	`description` text,
	FOREIGN KEY (`organization_id`) REFERENCES `venue_organizations`(`id`) ON UPDATE no action ON DELETE no action
);
