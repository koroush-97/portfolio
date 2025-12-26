import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
    >
      {/* Text Column */}
      <div className="p-1 space-y-6 text-[var(--color-text)] leading-relaxed md:p-5">
        <p>
          I’m Kourosh, a passionate Frontend Developer with over 3 years of
          hands-on experience building modern, scalable, and user-focused web
          applications.
        </p>

        <p>
          I thrive on frontend challenges — from crafting clean and responsive
          UIs to solving complex state management and performance problems. I
          genuinely enjoy turning ideas and designs into fast, accessible, and
          maintainable interfaces.
        </p>

        <p>
          My core expertise lies in React, Next.js, and TypeScript, with a
          strong focus on component-driven architecture, clean code, and modern
          best practices. I’m constantly learning, experimenting, and pushing
          myself to build better digital experiences with every project.
        </p>
      </div>

      {/* Image Column */}
      <div className="hidden sm:flex  md:p-5 relative w-full h-[420px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg  border-2 border-red-500">
        <Image
          src="/img/about/hack.png"
          alt="Kourosh working on frontend projects"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
