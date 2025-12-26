"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="container mx-auto py-24 flex flex-col items-center gap-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-[var(--color-text)]">
          Contact Me
        </h2>
        <p className="text-[var(--color-muted)] max-w-xl mx-auto">
          Interested in working together or have any questions? Send me a
          message or reach out through my socials.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col gap-4 text-[var(--color-text)]"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          required
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          required
        />

        <button
          type="submit"
          className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-hover)] transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex gap-6 text-2xl">
        <a
          href="https://github.com/koroush-97"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--color-primary)] transition"
        >
          🐱 GitHub
        </a>
        <a
          href="https://t.me/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--color-primary)] transition"
        >
          📲 Telegram
        </a>
        <a
          href="mailto:your.email@example.com"
          className="hover:text-[var(--color-primary)] transition"
        >
          ✉️ Gmail
        </a>
      </div>
    </section>
  );
}
