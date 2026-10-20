import type { Metadata, Viewport } from "next";
import { Merriweather, Manrope } from "next/font/google";
import { brand } from "./lib/brand";
import "./globals.css";

const displayFont = Merriweather({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: "normal",
  display: "swap",
});

const bodyFont = Manrope({
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const shareImage = brand.portrait;
const title = "Campos Costa Assessoria Jurídica | Advogado em Inhapim";
const description = "Assessoria jurídica em Inhapim com atenção, clareza e responsabilidade. Dr. Davi Oliveira Costa, OAB/MG 171.888. Agende pelo WhatsApp (33) 99811-0480.";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title,
  description,
  keywords: ["Campos Costa", "assessoria jurídica", "advogado em Inhapim", "Davi Oliveira Costa", "Inhapim MG"],
  icons: { icon: [{ url: brand.logo, type: "image/png" }] },
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    siteName: brand.businessName,
    type: "website",
    images: metadataBase
      ? [
          {
            url: shareImage,
            width: 1254,
            height: 1254,
            alt: brand.businessName,
          },
        ]
      : undefined,
  },
  twitter: {
    card: metadataBase ? "summary_large_image" : "summary",
    title,
    description,
    ...(metadataBase ? { images: [shareImage] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f7f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={bodyFont.variable + " " + displayFont.variable}>
      <body className="min-h-screen bg-ivory font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
