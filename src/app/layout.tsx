import type { Metadata } from "next";
import { Orbit } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollDownIcon from "@/components/scrollDown/ScrollDown";

const inter = Orbit({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Youtube detox",
  description:
    "It serves as a tool to reduce spending precious time and find a better balance of life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
