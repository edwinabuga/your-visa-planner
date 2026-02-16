import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourvisaplanner.com"),
  title: {
    default: "Your Visa Planner | Visa Consultancy in Nairobi, Kenya",
    template: "%s | Your Visa Planner",
  },
  description:
    "Professional visa consultancy based in Nairobi, Kenya. Expert guidance for UK, Schengen, US, UAE, and other international visas.",
  keywords: [
    "visa consultancy",
    "Nairobi",
    "Kenya",
    "UK visa",
    "Schengen visa",
    "US visa",
    "UAE visa",
    "visitor visa",
    "skilled worker visa",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Your Visa Planner",
    title: "Your Visa Planner | Visa Consultancy in Nairobi, Kenya",
    description:
      "Professional visa consultancy based in Nairobi, Kenya. Expert guidance for UK, Schengen, US, UAE, and other international visas.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
