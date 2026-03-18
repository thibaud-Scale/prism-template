import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Cursor            from "@/components/ui/Cursor";
import NoiseOverlay      from "@/components/ui/NoiseOverlay";
import CookieBanner      from "@/components/ui/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets:  ["latin"],
  weight:   ["400", "500", "600", "700", "800", "900"],
});

const BASE_URL = "https://your-domain.com"; // ← Replace with your Vercel URL

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Prism — Creative Digital Agency",
    template: "%s | Prism",
  },
  description:
    "We craft digital experiences that captivate and convert. Strategy, design, and development under one roof.",
  keywords: ["portfolio", "agency", "creative", "web design", "next.js", "template"],
  authors:  [{ name: "Prism Agency" }],
  openGraph: {
    title:       "Prism — Creative Digital Agency",
    description: "We craft digital experiences that captivate and convert.",
    type:        "website",
    url:         BASE_URL,
    siteName:    "Prism",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Prism — Creative Digital Agency",
    description: "We craft digital experiences that captivate and convert.",
  },
  robots: {
    index:        true,
    follow:       true,
    googleBot: {
      index:          true,
      follow:         true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Cursor />
          <NoiseOverlay />
          <CookieBanner />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
