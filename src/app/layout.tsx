import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pare Ahí! - Tu mercado bajo control",
  description: "La calculadora inteligente que te ayuda a mercar sin pasarte del presupuesto. Escanea precios, suma en tiempo real y toma el control de tus finanzas en el supermercado.",
  keywords: ["Pare Ahí", "mercado", "supermercado", "ahorro", "presupuesto", "calculadora", "Colombia", "finanzas personales"],
  themeColor: "#111821",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#111821] text-[#F8FAFC]`}
      >
        {children}
      </body>
    </html>
  );
}
