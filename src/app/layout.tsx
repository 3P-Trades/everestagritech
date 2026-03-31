import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Everest Agri-Tech LLC | Sustainable Agricultural Solutions",
    template: "%s | Everest Agri-Tech LLC",
  },
  description:
    "Everest Agri-Tech is committed to improving farming practices through innovation, sustainable solutions, and expert guidance. We empower farmers, enhance crop yields, and contribute to food security.",
  keywords: [
    "agriculture",
    "plant breeding",
    "sustainable farming",
    "crop improvement",
    "kitchen gardening",
    "agricultural consulting",
    "organic seeds",
  ],
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
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
