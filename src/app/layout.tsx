import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import { WhatsAppStickyButton } from "@/components/whatsapp-sticky-button";
import { Agentation } from "agentation";
import "./globals.css";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Jaideep Gandhi Photography — Capturing Love. Preserving Forever.",
    template: "%s | Jaideep Gandhi Photography",
  },
  description:
    "Luxury wedding, destination, and editorial photography by Jaideep Gandhi. Capturing heartfelt emotions, royal celebrations, and timeless moments with artistic finesse.",
  keywords: [
    "Jaideep Gandhi Photography",
    "wedding photography",
    "luxury wedding photographer",
    "destination wedding photographer",
    "candid wedding photography",
    "bridal portraits",
    "cinematic wedding stories",
  ],
  authors: [{ name: "Jaideep Gandhi" }],
  creator: "Jaideep Gandhi",
  publisher: "Jaideep Gandhi Photography",
  metadataBase: new URL("https://jaideepgandhi.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jaideepgandhi.com",
    title: "Jaideep Gandhi Photography — Capturing Love. Preserving Forever.",
    description:
      "Luxury wedding, destination, and editorial photography by Jaideep Gandhi. Capturing timeless celebrations and profound love stories.",
    siteName: "Jaideep Gandhi Photography",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Jaideep Gandhi Photography — Capturing Love. Preserving Forever.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaideep Gandhi Photography — Capturing Love. Preserving Forever.",
    description:
      "Capturing heartfelt emotions, royal celebrations, and timeless love stories with fine-art precision.",
    creator: "@jaideepgandhiphoto",
    images: ["/images/og-cover.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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
      suppressHydrationWarning
      className={`${serifFont.variable} ${sansFont.variable} scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-foreground"
      >
        <MetaPixel />
        {children}
        <WhatsAppStickyButton />
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
