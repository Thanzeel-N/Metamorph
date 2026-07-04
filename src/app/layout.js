import { Outfit, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Metamorph.live",
    template: "Metamorph.live",
  },
  description: "Complete Business Solutions spanning Branding, Growth Marketing, Media Production (Reels, posters), and IT Systems (Next.js web apps, platforms, dashboards).",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-brand-midnight text-foreground selection:bg-brand-violet selection:text-white">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
