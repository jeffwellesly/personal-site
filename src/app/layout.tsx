import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  ),
  title: {
    default: "PersonalSite",
    template: "%s | PersonalSite",
  },
  description:
    "Personal site and blog by Your Name — web development, writing, and open source.",
  openGraph: {
    siteName: "PersonalSite",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Runs synchronously before first paint — reads localStorage then falls back
// to prefers-color-scheme so the correct theme is set before CSS is applied.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=document.documentElement;d.setAttribute('data-theme',s||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));}catch(_){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <Header />
        <Toaster position="top-right" richColors />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
