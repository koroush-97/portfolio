import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

const SKILLS = [
  {
    category: "Core",
    items: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    category: "Styling",
    items: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Redux", icon: SiRedux },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto py-24 p-5">
      {/* Heading */}
      <div className="mb-16 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Skills & Technologies
        </h2>
        <p className="text-[var(--color-muted)]">
          Technologies and tools I use to build modern, scalable, and
          high-performance frontend applications.
        </p>
      </div>

      {/* Skills */}
      <div className="space-y-14">
        {SKILLS.map((group) => (
          <div key={group.category}>
            <h3 className="text-xl font-semibold mb-6">{group.category}</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {group.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 rounded-xl border border-[var(--color-border)] px-5 py-4 hover:border-[var(--color-primary)] transition"
                  >
                    <Icon className="text-2xl text-[var(--color-primary)]" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
