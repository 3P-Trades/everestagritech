import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
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
      className={`${inter.variable} ${cormorant.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
