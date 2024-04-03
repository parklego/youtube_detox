import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body>
        <div className={inter.className}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
