import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melhor Sistema de Gestão para seu Negócio | Comparativo Completo",
  description:
    "Compare as melhores soluções de CRM, automação e gestão para seu negócio. Análises detalhadas.",
  robots: "index, follow",
  verification: {
    google: "W7APrQAYdIUYTNVT-FRzSb37BCK48VqUvxHMeTblb8g",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
