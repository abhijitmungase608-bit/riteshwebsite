
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Ritesh Gujarathi Photography | Luxury Wedding Photography & Films",
  description:
    "Award-winning wedding photography and cinematic films by Mr. Ritesh Gujarathi. Capturing timeless love stories in Ahilyanagar, Pune, and destination weddings worldwide.",
  keywords: [
    "Wedding Photography",
    "Cinematic Wedding Films",
    "Ritesh Gujarathi Photography",
    "Ritesh Gujarathi",
    "Pune Wedding Photographer",
    "Ahilyanagar Photographer",
    "Destination Wedding",
    "Pre-wedding Shoot",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="bg-[#FAF7F2] text-[#2C221B] font-sans antialiased min-h-screen flex flex-col selection:bg-brand-gold selection:text-white">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}