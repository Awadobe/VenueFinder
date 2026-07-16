import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const display = Fraunces({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VenueFind — Find event venues in Freetown",
  description: "Discover event venues across Freetown and ask VenueFind to confirm your preferred date before you travel.",
  openGraph: {
    title: "VenueFind — Find the right space before you make the trip",
    description: "Verified event venue discovery and date confirmation for Freetown, Sierra Leone.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "VenueFind — Find the right space before you make the trip" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VenueFind — Find the right space before you make the trip",
    description: "Verified event venue discovery and date confirmation for Freetown, Sierra Leone.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>;
}
