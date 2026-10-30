import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap" });

export const metadata: Metadata = {
  title: "Harshitha Salian — Portfolio",
  description: "Harshitha Salian — Full Stack Developer (Python, React, Node). Open to work.",
  openGraph: {
    title: "Harshitha Salian — Portfolio",
    description: "Full stack developer and artist. View projects and get in touch.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
