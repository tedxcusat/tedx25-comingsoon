// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Orbitron, Teko } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const teko  = Teko({ weight: "400", subsets: ["latin"], variable: "--font-teko" });

export const metadata: Metadata = {
  title: "TEDxCUSAT - Coming Soon",
  description: "6th Edition Coming Soon",
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
