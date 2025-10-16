import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConsentBanner } from "@/components/ConsentBanner";
import { Inter, Merriweather } from "next/font/google";
import { SEOJsonLd } from "@/components/SEOJsonLd";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const merri = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drmassimilianoconte.com"),
  title: {
    default: "Traumatólogo en Mataró | Medicina del Estilo de Vida | Dr. Massimiliano Conte",
    template: "%s | Traumatólogo | Dr. Massimiliano Conte",
  },
  description:
    "Traumatología + Medicina del Estilo de Vida: menos dolor, más movimiento y resultados sostenibles en Mataró.",
  openGraph: {
    type: "website",
    title: "Traumatólogo en Mataró | Dr. Massimiliano Conte",
    description:
      "Traumatología y Medicina del Estilo de Vida para dolor, artrosis y lesiones deportivas.",
    url: "/",
    siteName: "Dr. Massimiliano Conte",
  },
  twitter: {
    card: "summary_large_image",
    title: "Traumatólogo en Mataró | Dr. Massimiliano Conte",
    description:
      "Traumatología + Medicina del Estilo de Vida: menos dolor y más movimiento.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${merri.variable}`}>
        <Header />
        <SEOJsonLd />
        {children}
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  );
}


