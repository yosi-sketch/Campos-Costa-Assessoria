import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Source_Sans_3 } from "next/font/google";
import { brand } from "./lib/brand";
import "./globals.css";

const displayFont = Bodoni_Moda({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["400", "500"],
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
const title = "Danielle Maria | Advogada Previdenciarista em Patos de Minas";
const description = "Danielle Maria, advogada previdenciarista em Patos de Minas, MG. Aposentadorias, BPC e benefícios do INSS. Agende pelo WhatsApp (34) 99908-9393.";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title,
  description,
  keywords: ["Danielle Maria", "advogada previdenciarista em Patos de Minas", "Direito Previdenciário", "aposentadorias", "BPC", "benefícios do INSS"],
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
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
            width: 661,
            height: 849,
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
  themeColor: "#242122",
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
