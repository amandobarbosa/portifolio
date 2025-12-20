import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { siteConfig } from "@/config/site";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amandobarbosa.com"),
  title: `${siteConfig.name} | ${siteConfig.role}`,
  
  description: siteConfig.description.hero,
  
  keywords: [
    siteConfig.role,
    "Gestão de Projetos", 
    "Agile", 
    "Scrum", 
    "Project Manager",
    "Portfolio"
  ],
  
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://amandobarbosa.com",
    siteName: `Portfolio - ${siteConfig.name}`,
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description.hero,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.role}`,
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description.hero,
    images: ["/og-image.png"],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <Toaster position="top-center" richColors />
        </LanguageProvider>
      </body>
    </html>
  );
}
