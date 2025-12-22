import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./_styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kourosh | Frontend Developer",
  description: "Personal portfolio built with Next.js & Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 
        کلاس dark فعلاً دستی هست
        بعداً با toggle واقعی عوضش می‌کنیم
      */}
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-[var(--color-bg)]
          text-[var(--color-text)]
          transition-colors duration-300
        `}
      >
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
