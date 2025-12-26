const EXPERIENCES = [
  {
    role: "Frontend Developer",
    company: "Freelance / Personal Projects",
    period: "2021 — Present",
    description: [
      "Developed modern and responsive web applications using React and Next.js.",
      "Built reusable, scalable components with a strong focus on clean architecture.",
      "Collaborated on UI/UX decisions to improve usability and performance.",
      "Worked with APIs, state management, and performance optimization techniques.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Junior Frontend Developer",
    company: "Self-Learning & Practice",
    period: "2020 — 2021",
    description: [
      "Learned core frontend technologies including HTML, CSS, and JavaScript.",
      "Built small projects to understand fundamentals of web development.",
      "Practiced modern JavaScript concepts and responsive design principles.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto py-24 space-y-16">
      {/* Section Title */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-[var(--color-text)]">
          Experience
        </h2>
        <p className="text-[var(--color-muted)] max-w-xl mx-auto">
          My professional journey and the experiences that shaped my frontend
          development skills.
        </p>
      </div>

      {/* Experience List */}
      <div className="space-y-12 max-w-3xl mx-auto">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.role}
            className="
              border-l-2 border-[var(--color-border)]
              pl-6
              space-y-4
            "
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-xl font-semibold text-[var(--color-text)]">
                {exp.role}
              </h3>
              <span className="text-sm text-[var(--color-muted)]">
                {exp.period}
              </span>
            </div>

            <p className="text-sm text-[var(--color-muted)] font-medium">
              {exp.company}
            </p>

            {/* Description */}
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text)] text-sm leading-relaxed">
              {exp.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-xs
                    px-3 py-1
                    rounded-full
                    bg-[var(--color-border)]
                    text-[var(--color-text)]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
