import type { Metadata } from "next";
import { Orbit } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Orbit({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Youtube detox",
  description:
    "Youtube detox는 소중한 시간을 절약하고, 더 나은 삶의 균형을 찾는 도구입니다.",
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
