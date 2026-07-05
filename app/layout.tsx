import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "./footer";
import WhatsAppButton from "@/components/whatsApp";
import { Toaster } from "sonner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.apexied.in"),
  title: {
    default: "Apex Interiors & Engineering | Interior Design & Construction in Ghaziabad",
    template: "%s | Apex Interiors & Engineering",
  },

  description:
    "Apex Interiors & Engineering offers premium interior design, modular kitchens, bedroom interiors, office interiors, structural engineering, construction planning, BOQ estimation and consulting services in Ghaziabad.",

  keywords: [
    "Interior Designer Ghaziabad",
    "Interior Designer Raj Nagar Extension",
    "Home Interior Design",
    "Modular Kitchen",
    "Bedroom Interior",
    "Wardrobe Design",
    "False Ceiling",
    "Living Room Design",
    "Office Interior",
    "Restaurant Interior",
    "Structural Engineer",
    "Construction Consultant",
    "BOQ Estimation",
  ],

  alternates: {
    canonical: "/", // This forces Next.js to append the current path dynamically or keep it clean
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Apex Interiors & Engineering",
    description:
      "Professional Interior Design & Structural Engineering Services.",
    url: "https://www.apexied.in",
    siteName: "Apex Interiors & Engineering",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Apex Interiors & Engineering",
    description:
      "Interior Design & Structural Engineering Services.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
        <Toaster
          position="bottom-right"
          richColors
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Apex Interiors & Engineering",
              url: "https://www.apexied.in",
              image: "https://www.apexied.in/og-image.jpg",
              telephone: "+91-9667675127",
              email: "info.apexied@gmail.com",
              priceRange: "₹₹",

              address: {
                "@type": "PostalAddress",
                streetAddress: "MCC Signature Heights, Raj Nagar Extension",
                addressLocality: "Ghaziabad",
                addressRegion: "Uttar Pradesh",
                postalCode: "201017",
                addressCountry: "IN",
              },

              areaServed: [
                "Ghaziabad",
                "Noida",
                "Greater Noida",
                "Delhi NCR",
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
