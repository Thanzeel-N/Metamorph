import { Outfit, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SchemaMarkup from "@/components/SEO/SchemaMarkup";
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
  metadataBase: new URL("https://metamorph.live"),
  title: {
    default: "Metamorph.live | Branding, Marketing & IT Solutions Agency",
    template: "%s | Metamorph.live",
  },
  description: "Complete Business Solutions spanning Branding, Growth Marketing, Media Production, and IT Systems (Next.js web apps, platforms, dashboards).",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "MHE5cmqqJ8skSvQumorwPLTDIO63z_KNiD18ovjHnuo",
  },
  keywords: ["Branding Agency", "Creative Agency", "Digital Marketing", "Web Design", "Web Development", "Software Development", "IT Solutions", "Media Production"],
  authors: [{ name: "Metamorph.live" }],
  creator: "Metamorph.live",
  publisher: "Metamorph.live",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://metamorph.live",
    title: "Metamorph.live | Branding, Marketing & IT Solutions Agency",
    description: "Complete Business Solutions spanning Branding, Growth Marketing, Media Production, and IT Systems.",
    siteName: "Metamorph.live",
    images: [
      {
        url: "/images/og-image.jpg", // Make sure this image exists or create a placeholder
        width: 1200,
        height: 630,
        alt: "Metamorph.live Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metamorph.live | Branding, Marketing & IT Solutions Agency",
    description: "Complete Business Solutions spanning Branding, Growth Marketing, Media Production, and IT Systems.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#12130f",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Metamorph.live",
  url: "https://metamorph.live",
  logo: "https://metamorph.live/icon.png",
  sameAs: [
    // Add social links here if available
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "", // Add if available
    contactType: "customer service",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <SchemaMarkup schema={organizationSchema} />
      </head>
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
