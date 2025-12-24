// app/_components/Hero/Hero.tsx
"use client";

import Image from "next/image";
import heroImage from "../../../public/img/hero/0_W_aCapgiGh5c202M.webp";
import Link from "next/link";

import { FaGithub, FaTelegram, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[600px] md:h-[800px] flex flex-col items-center justify-center bg-gray-900"
    >
      {/* background Img*/}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Hero Background"
          fill
          className="object-center md:object-cover"
        />
        {/* overlay for contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* text on Image */}
      <div className="relative z-10 text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I&apos;m Kourosh
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-6">
          Frontend Developer | Building modern web applications
        </p>
        {/* buttens and links */}
        <div className="flex justify-center gap-4">
          <Link
            href="#projects"
            className=" px-2 py-3 md:px-6 md:py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className=" px-2 py-3 md:px-6 md:py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[var(--color-primary)] transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
      {/* social links */}
      <div className="absolute bottom-8 left-8 z-10 px-6 py-8">
        <ul className="flex flex-row gap-4">
          {/* GitHub */}
          <li>
            <Link
              href="https://github.com/koroush-97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--color-primary)] transition text-2xl"
            >
              <FaGithub />
            </Link>
          </li>

          {/* Telegram */}
          <li>
            <Link
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--color-primary)] transition text-2xl"
            >
              <FaTelegram />
            </Link>
          </li>

          {/* Gmail */}
          <li>
            <Link
              href="mailto:your.email@example.com"
              className="text-white hover:text-[var(--color-primary)] transition text-2xl"
            >
              <FaEnvelope />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
