import type { Metadata } from "next";
import { Cormorant_Garamond, Bodoni_Moda } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shreeniwash Yadav | Frontend Developer",
  description: "Experienced Frontend Developer specializing in React.js and WordPress. Building dynamic, responsive web applications and custom themes with seamless user experiences.",
  keywords: ["frontend", "developer", "react", "wordpress", "portfolio", "shreeniwash", "yadav"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${bodoni.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
