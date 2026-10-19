import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Display, Source_Sans_3 } from "next/font/google";
import { brand } from "./lib/brand";
import "./globals.css";

const displayFont = Libre_Caslon_Display({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const bodyFont = Source_Sans_3({
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const shareImage = brand.portrait;
const title = "Morato Advocacia | Michelle Morato · Direito de Família em Contagem";
const description = "Direito de Família em Contagem com Michelle Morato. Divórcio, alimentos, guarda, convivência e partilha. Atendimento presencial e online. (31) 2568-2738.";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title,
  description,
  keywords: ["Morato Advocacia", "Michelle Morato", "advogada de família em Contagem", "divórcio", "guarda", "alimentos", "partilha"],
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
            width: 667,
            height: 828,
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
  themeColor: "#0b1715",
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
