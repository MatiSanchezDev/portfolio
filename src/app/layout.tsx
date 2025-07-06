import type { Metadata } from "next";
import { Lexend, Urbanist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ScrollProgress } from "@/components/animate-ui/components/scroll-progress";
import { Footer } from "@/components/Footer";

const tanker = localFont({
  variable: "--font-tanker",
  src: "./font/tanker-regular.woff2",
  display: "swap",
  weight: "800", // o el peso real, si lo sabés
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["800", "400", "300"],
});

export const metadata: Metadata = {
  title: "Matias - Mi Portfolio ",
  description: "Desarrollador Frontend - MS.dev - Matias N. Sanchez",
  icons: {
    icon: "/favicon.png", // o .ico
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        /* style={{
          backgroundColor: "#444421",
          opacity: 1,
          backgroundImage: `
            radial-gradient(circle at center center, #000000, #1c1b1b),
            repeating-radial-gradient(circle at center center, #000000, #000000 60px, transparent 100px, transparent 10px)
          `,
          backgroundBlendMode: "multiply",
        }} */
        className={`${tanker.className} ${lexend.variable} ${urbanist.variable} dark antialiased`}
      >
        <ScrollProgress />
        {children}
        <Footer />
      </body>
    </html>
  );
}
