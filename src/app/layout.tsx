import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Your Visa Planner | UK Visa Consultancy in Nairobi, Kenya",
    template: "%s | Your Visa Planner",
  },
  description:
    "Professional UK visa consultancy based in Nairobi, Kenya. Expert guidance for Visitor, Skilled Worker, Student, Spouse, and other UK visas.",
  keywords: [
    "UK visa",
    "visa consultancy",
    "Nairobi",
    "Kenya",
    "UK visitor visa",
    "skilled worker visa",
    "student visa",
    "spouse visa",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Your Visa Planner",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
        <JsonLd />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
