// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Orbitron, Teko } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const teko  = Teko({ weight: "400", subsets: ["latin"], variable: "--font-teko" });

export const metadata: Metadata = {
  title: "TEDxCUSAT - Coming Soon | Beyond Five: The Sixth Chapter",
  description: "TEDxCUSAT 6th Edition - Beyond Five: The Sixth Chapter. Join us for an inspiring event featuring innovative ideas worth spreading. Coming soon to Cochin University of Science and Technology.",
  keywords: ["TEDx", "TEDxCUSAT", "CUSAT", "TED talks", "ideas worth spreading", "innovation", "technology", "conference", "Kerala", "Cochin University"],
  authors: [{ name: "TEDxCUSAT" }],
  creator: "TEDxCUSAT",
  publisher: "TEDxCUSAT",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tedxcusat.in",
    siteName: "TEDxCUSAT",
    title: "TEDxCUSAT - Coming Soon | Beyond Five: The Sixth Chapter",
    description: "TEDxCUSAT - Beyond Five: The Sixth Chapter. Join us for an inspiring event featuring innovative ideas worth spreading.",
    images: [
      {
        url: "/cover.jpg",
        width: 1200,
        height: 630,
        alt: "TEDxCUSAT Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TEDxCUSAT - Coming Soon | Beyond Five: The Sixth Chapter",
    description: "TEDxCUSAT - Beyond Five: The Sixth Chapter. Join us for an inspiring event featuring innovative ideas worth spreading.",
    images: ["/cover.jpg"],
    creator: "@TEDxCUSAT",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${orbitron.variable} ${teko.variable} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
