import Script from "next/script";
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
const GA_MEASUREMENT_ID = 'G-VCM03VDKVT';

export const metadata: Metadata = {
  title: "Leandro Venegas Content Manager ",
  description: " Mi trayectoria en la creacion de contenidos y productos y compaña de marketing en esta pagina puedes encontrar el portafolio y curricumun vitae de Leandro Venegas, content Manager en la regio  de valparaiso ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script 
        strategy="afterInteractive" // Carga el script después de la interacción inicial
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <body
  
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`} data-theme="dark"
      >

        {children}
  
      </body>
    </html>
  );
}
