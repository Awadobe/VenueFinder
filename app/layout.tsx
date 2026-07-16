import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: "venueFind — Extraordinary venues across Sierra Leone",
  description: "Find memorable spaces for weddings, birthdays, conferences, workshops and more—with clear venue details and honest date confirmation.",
  openGraph: {
    title: "venueFind — Find the space that makes the moment",
    description: "Extraordinary venue discovery and honest date confirmation for Sierra Leone.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "A beach wedding venue prepared at sunset" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "venueFind — Find the space that makes the moment",
    description: "Extraordinary venue discovery and honest date confirmation for Sierra Leone.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
