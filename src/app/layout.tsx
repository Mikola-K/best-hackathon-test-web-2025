import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../components/common/styles/main.css";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lapka",
  description: "Save the animal - Lapka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allHeaders = headers();
  const referer = allHeaders.get("referer");

  const isLoginPage = referer && referer.includes("/login");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!isLoginPage && (
          <>
            <NavBar />
            {children}
            <Footer />
          </>
        )}
        {isLoginPage && <>{children}</>}
      </body>
    </html>
  );
}
