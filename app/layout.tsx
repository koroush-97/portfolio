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
  description: "Personal portfolio showcasing projects, skills, and experience",
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
          ${poppins.className}
          antialiased
          min-h-screen
          bg-[var(--color-bg)]
          text-[var(--color-text)]
          transition-colors duration-300
        `}
      >
        <main className="mx-auto flex flex-col">{children}</main>
      </body>
    </html>
  );
}
