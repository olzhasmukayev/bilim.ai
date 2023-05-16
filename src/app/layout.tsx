import "@styles/globals.css";
import React from "react";
import { Inter } from "next/font/google";
import Navbar from "@components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "bilim.ai",
  description: "Подготовка к ЕНТ с использованием искусственного интеллекта",
};

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
