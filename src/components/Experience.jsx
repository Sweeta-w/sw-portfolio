import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023 - Present",
    title: "BS Computer Science",
    desc: "Pursuing a Bachelor's degree in Computer Science with focus on software development and web technologies.",
  },

  {
    year: "2025 March - May",
    title: "Frontend Development Internship",
    desc: "Built responsive websites using HTML, CSS, JavaScript and Bootstrap.",
  },

  {
    year: "2025",
    title: "React & Modern UI",
    desc: "Developed modern interfaces using React, Tailwind CSS, GSAP and Framer Motion.",
  },

  {
    year: "2026",
    title: "Project Development",
    desc: "Created real-world projects including Country Explorer, Weather Dashboard, E-Commerce UI and Portfolio Website.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 bg-[#0A0A0A] text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          Journey
        </p>

        <h2 className="text-5xl font-bold mb-16">
          Education & Experience
        </h2>

        <div className="relative">

          {/* Line */}
          <div className="absolute left-4 top-0 w-[2px] h-full bg-cyan-400/30"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-14 pb-14"
            >
              {/* Dot */}
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,.5)]"></div>

              <span className="text-cyan-400 font-medium">
                {item.year}
              </span>

              <h3 className="text-2xl font-semibold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}