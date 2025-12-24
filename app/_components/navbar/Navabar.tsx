"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [isDark]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-bg)]/80 backdrop-blur-md shadow-sm container">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          className="font-bold text-xl text-[var(--color-primary)]"
        >
          Kourosh.dev
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-[var(--color-text)]">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded hover:bg-[var(--color-surface)] transition-colors"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4 text-[var(--color-text)]">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl"
          >
            ☰
          </button>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded hover:bg-[var(--color-surface)] transition-colors"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--color-bg)] px-6 py-4 flex flex-col gap-4 text-[var(--color-text)]">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
