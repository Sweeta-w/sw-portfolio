import { motion } from "framer-motion";

import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiGreensock,
  SiFramer,
  SiPandas,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend Development",
    icon: <FaReact size={40} />,
    technologies: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
    ],
    size: "md:col-span-2",
  },

  {
    title: "UI Styling",
    icon: <SiTailwindcss size={40} />,
    technologies: [
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },

  {
    title: "Animations",
    icon: <SiGreensock size={40} />,
    technologies: [
      { name: "GSAP", icon: <SiGreensock /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
  },

  {
    title: "Python",
    icon: <FaPython size={40} />,
    technologies: [
      { name: "Python Automation, Scripting", icon: <FaPython /> },
    ],
  },

  {
    title: "Data Analysis",
    icon: <SiPandas size={40} />,
    technologies: [
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiPandas /> },
      { name: "Matplotlib", icon: <SiPandas /> },
    ],
    size: "md:col-span-2",
  },

  {
    title: "Tools",
    icon: <FaGitAlt size={40} />,
    technologies: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub" },
      { name: "VS Code" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 bg-[#0A0A0A] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          Expertise
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-14">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className={`
                ${skill.size || ""}
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-lg
                p-8
                hover:border-cyan-400/40
                transition-all
                duration-300
              `}
            >
              {/* Main Icon */}
              <div className="text-cyan-400 mb-6">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-5">
                {skill.title}
              </h3>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-3">
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      flex
                      items-center
                      gap-2
                      px-3
                      py-2
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                      text-sm
                      text-gray-300
                    "
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}