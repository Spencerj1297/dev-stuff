import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

const oswald = Oswald({
  weight: '200',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
