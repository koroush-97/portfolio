import type { Metadata } from "next";

import "./_styles/globals.css";
import localFont from "next/font/local";

const poppins = localFont({
  src: [
    {
      path: "./_fonts/Poppins-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./_fonts/Poppins-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./_fonts/Poppins-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./_fonts/Poppins-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
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
      <body
        className={`
    ${poppins.variable}
    font-sans
    antialiased
    bg-(--color-bg)
    text-(--color-text)
    transition-colors duration-300
  `}
      >
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
