import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proxima - Gestion de rendez-vous pour cabines de téléconsultation",
  description: "Proxima facilite vos journées en synchronisant rendez-vous, disponibilités patient et temps médical réel.",
  keywords: "téléconsultation, dermatologie, rendez-vous médical, cabine de consultation",
  authors: [{ name: "Proxima" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://proxima.health",
    title: "Proxima - Gestion de rendez-vous pour cabines de téléconsultation",
    description: "Proxima facilite vos journées en synchronisant rendez-vous, disponibilités patient et temps médical réel.",
    siteName: "Proxima",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
