import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout_Structure from "@/components/layout/Layout_Structure";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZipZap | User Management System",
  description: "Created by Shahzaib Mughal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout_Structure>{children}</Layout_Structure>
      </body>
    </html>
  );
}
