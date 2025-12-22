import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import {
  Inter,
  Abril_Fatface,
  Anton,
  Bebas_Neue,
  Dancing_Script,
  Lavishly_Yours,
  Lilita_One,
  Mouse_Memoirs,
  Style_Script,
  Tangerine,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-abril-fatface",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
  display: "swap",
});

const lavishlyYours = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lavishly-yours",
  display: "swap",
});

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita-one",
  display: "swap",
});

const mouseMemoirs = Mouse_Memoirs({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mouse-memoirs",
  display: "swap",
});

const styleScript = Style_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-style-script",
  display: "swap",
});

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tangerine",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PC IPNU CIAMIS",
  description:
    "Website Resmi Pimpinan Cabang Ikatan Pelajar Nahdlatul Ulama Ciamis",
  // optional, kalau sudah ada domain:
  // metadataBase: new URL("https://pcipnuciamis.or.id"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={[
        inter.variable,
        abrilFatface.variable,
        anton.variable,
        bebasNeue.variable,
        dancingScript.variable,
        lavishlyYours.variable,
        lilitaOne.variable,
        mouseMemoirs.variable,
        styleScript.variable,
        tangerine.variable,
      ].join(" ")}
    >
      <body className={inter.className}>
        <Navbar />
        <main className="pt-[var(--header-h)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
