import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Gaegu } from "@next/font/google";
import { JetBrains_Mono } from "@next/font/google";
import Head from "next/head";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jetBrainsMono",
});

const gaegu = Gaegu({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gaegu",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EasyAnalysis.ai",
  icons: [{ rel: "icon", url: "../public/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${gaegu.variable} ${jetBrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
