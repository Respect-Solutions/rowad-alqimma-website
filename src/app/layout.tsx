import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rowad Elqama",
  description: "Building the legal foundations for the future of trade and innovation in Saudi Arabia."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
