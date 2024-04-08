import type { Metadata } from "next";
import { Orbit } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import AuthProvider from "@/components/authProvider/authProvider";
import { Toaster } from "sonner";

const inter = Orbit({ subsets: ["latin"], weight: "400", display: "swap" });

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
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
