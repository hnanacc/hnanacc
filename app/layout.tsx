import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/layout";

import "@/styles/globals.css";

// TODO: move this to tailwind.
const font = Inter({
  subsets: ["latin"],
  fallback: ["system-ui"],
});

// TODO: research and set other meta tags.
export const metadata: Metadata = {
  title: "Harshal Nandigramwar",
  description: "AI Researcher",
  twitter: null,
  openGraph: null,
};

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title> Harshal Nandigramwar </title>
      </head>
      <body className={`${font.className} px-6 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow"> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
