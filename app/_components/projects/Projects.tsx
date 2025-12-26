import Link from "next/link";

const PROJECTS = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS to showcase my projects and skills.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Movie App",
    description:
      "A movie and series listing app using OMDB API with search and favorites functionality.",
    tech: ["React", "API", "Context"],
    github: "#",
    demo: "#",
  },
  {
    title: "Currency Converter",
    description:
      "A real-time currency converter with shared global state and clean UI.",
    tech: ["React", "Context", "Axios"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto py-24 space-y-16 p-5">
      {/* Section Title */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-[var(--color-text)]">
          Projects
        </h2>
        <p className="text-[var(--color-muted)] max-w-xl mx-auto">
          A selection of projects that highlight my experience in building
          modern, scalable frontend applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="
              bg-[var(--color-surface)]
              border border-[var(--color-border)]
              rounded-2xl
              p-6
              flex flex-col
              justify-between
              hover:shadow-[var(--shadow-md)]
              transition
            "
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[var(--color-text)]">
                {project.title}
              </h3>

              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
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
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="mt-6 flex gap-4 text-sm font-medium">
              <Link
                href={project.github}
                target="_blank"
                className="text-[var(--color-primary)] hover:underline"
              >
                GitHub
              </Link>
              <Link
                href={project.demo}
                target="_blank"
                className="text-[var(--color-primary)] hover:underline"
              >
                Live Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
