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
  metadataBase: new URL("https://apexied.in"),

  title: {
    default: "Apex Interiors & Engineering",
    template: "%s | Apex Interiors & Engineering",
  },

  description:
    "Apex Interiors & Engineering provides interior design, modular kitchen design, bedroom interiors, office interiors, structural design, building planning, foundation design, BOQ estimation, and construction consulting services in Ghaziabad.",

  keywords: [
    "Interior Design Ghaziabad",
    "Modular Kitchen Ghaziabad",
    "Bedroom Interior Design",
    "Office Interior Design",
    "Wardrobe Design",
    "False Ceiling Design",
    "Restaurant Interior Design",
    "Structural Design",
    "Building Planning",
    "Foundation Design",
    "BOQ Estimation",
    "Construction Consulting",
    "Civil Engineering Services",
    "Raj Nagar Extension",
    "Ghaziabad Interior Designer",
  ],

  authors: [
    {
      name: "Apex Interiors & Engineering",
    },
  ],

  creator: "Apex Interiors & Engineering",

  openGraph: {
    title: "Apex Interiors & Engineering",
    description:
      "Interior Design and Structural Engineering solutions in Ghaziabad.",
    url: "https://apexied.in",
    siteName: "Apex Interiors & Engineering",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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
              "@type": "LocalBusiness",
              name: "Apex Interiors & Engineering",
              telephone: "+91-9667675127",
              email: "info.apexied@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "MCC Signature Heights, Raj Nagar Extension",
                addressLocality: "Ghaziabad",
                addressCountry: "IN",
              },
              url: "https://apexied.in",
            }),
          }}
        />
      </body>
    </html>
  );
}
