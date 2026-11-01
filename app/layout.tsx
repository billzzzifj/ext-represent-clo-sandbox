import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REPRESENT // Initial Architecture Rebuild (BBC Sandbox)",
  description: "High-velocity mobile product detail page and instant 1-tap checkout drawer architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#0A0A0A]">
      <body className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] antialiased">
        {children}
      </body>
    </html>
  );
}
