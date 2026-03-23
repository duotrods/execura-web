import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/gsap/ScrollProgress";
import MagneticCursor from "@/components/gsap/MagneticCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Execura Support Solutions - Business Support, Virtual Assistant & Website Services",
  description:
    "Expert business support solutions including virtual assistance, administrative services, website creation & maintenance, and operational support. Streamline your business operations with Execura's professional team.",
  keywords:
    "business support services, virtual assistant, administrative support, executive assistance, website design, website maintenance, business operations, professional support solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <ScrollProgress />
        <MagneticCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
