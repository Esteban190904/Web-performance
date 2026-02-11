import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'TechAudit | Expertos en SEO Técnico y Performance Web',
  description: 'Optimizamos la visibilidad de tu negocio con arquitectura moderna y carga ultra rápida.',
  keywords: ['SEO Técnico', 'Next.js 15', 'Performance Web', 'Core Web Vitals'],
  authors: [{ name: 'Tu Nombre' }],
  alternates: {
    canonical: 'https://tu-portafolio.vercel.app',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
