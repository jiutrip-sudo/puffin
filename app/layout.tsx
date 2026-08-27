import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Puffin Iceland | 冰島行程專賣",
  description:
    "探索冰島，從這裡開始。台灣出發或冰島集合，為您量身規劃完美旅程。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-TW" className={`${syne.variable} h-full antialiased`}>
      <body className="flex min-h-full w-full flex-col">{children}</body>
    </html>
  );
}
