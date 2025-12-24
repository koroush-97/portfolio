"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-[10px] w-full z-50 bg-[var(--color-bg)]/80 backdrop-blur-md shadow-sm container">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          className="font-bold text-xl text-[var(--color-primary)]"
        >
          <span className="text-2xl text-[#334741]">K</span>{" "}
          <span className="text-xl text-[#abaeae]">.</span>{" "}
          <span className="text-xl text-[#334741]">b-97</span>
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
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 text-[var(--color-text)]">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl"
          >
            ☰
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
