import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/data";
import { AuroraBackground, CursorGlow, GrainOverlay } from "@/components/motion/Ambient";
import { ScrollProgress } from "@/components/motion/ScrollProgress";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.summary,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-ink text-slate-100 antialiased">
        <ScrollProgress />
        <AuroraBackground />
        <CursorGlow />
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
