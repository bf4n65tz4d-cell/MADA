import type { Metadata } from "next";
import { Inter, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter  = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas  = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const mono   = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400","500"] });

export const metadata: Metadata = {
  title: "MADA — Make Annecy Dance Again",
  description: "Un duo de DJs, une équipe qui cherche éperdument à refaire danser Annecy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${bebas.variable}`}>
      <body className={`${inter.variable} ${bebas.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
