import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AHs Lab - UI Components for Developers",
  description:
    "AHs Lab is a collection of prebuilt, customizable, and developer-friendly UI components designed to help you cut boilerplate and ship faster.",
  icons: {
    icon: "/AHs.ico",
    shortcut: "/AHs.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="f8sGcHre4r-fcTDQVnnND06gJ2Cm0ji45B0bkNdbKw4" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="30Lno/g3E8Kntz1N4m8amA" async></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
