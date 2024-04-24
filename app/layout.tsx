import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { AnalyticsProvider } from "@/lib/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harshal Nandigramwar | Homepage",
  description: "AI researcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AnalyticsProvider>
        <body className={inter.className}>
          <header>Root Header</header>
          {children}
          <footer className="absolute bottom-0">2024 Signed by Harshal</footer>
        </body>
      </AnalyticsProvider>
    </html>
  );
}
