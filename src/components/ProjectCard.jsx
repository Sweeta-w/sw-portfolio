import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="
      group
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-white/15
      bg-gradient-to-b
    from-white/[0.08]
    to-white/[0.03]
      backdrop-blur-xl
      p-7
      shadow-lg
      shadow-black/40
      transition-all
      duration-500
      hover:border-cyan-400/70
      hover:shadow-[0_0_60px_rgba(34,211,238,.18)]
      "
    >
      {/* Animated top line */}

      <div
        className="
        absolute
        top-0
        left-0
        h-[2px]
        w-0
        bg-cyan-400
        group-hover:w-full
        transition-all
        duration-500
        "
      />

      {/* Hover Glow */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
        bg-gradient-to-br
        from-cyan-500/10
        via-transparent
        to-blue-500/10
        "
      />

      {/* Header */}

      <div className="relative flex items-center justify-between">

        <div className="flex flex-wrap gap-2">

          {project.tech.slice(0, 3).map((item) => (
            <span
              key={item}
              className="
              px-3
              py-1
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-500/20
              text-cyan-300
              text-xs
              "
            >
              {item}
            </span>
          ))}

        </div>

        <ArrowUpRight
        aria-hidden="true"
          size={20}
          className="
          text-gray-500
          transition-all
          duration-300
          group-hover:text-cyan-400
          group-hover:translate-x-2
          group-hover:-translate-y-2
          group-hover:rotate-12
          "
        />

      </div>

      {/* Title */}

      <h3 className="relative mt-8 text-2xl font-bold text-white">
        {project.title}
      </h3>

      {/* Description */}

      <p className="relative mt-5 text-gray-400 leading-7 min-h-[95px]">
        {project.description}
      </p>

      {/* Divider */}

      <div className="relative my-8 h-px bg-white/10" />

      {/* Footer */}

      <div className="relative flex justify-between items-center">

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="
          px-5
          py-2.5
          rounded-full
          bg-cyan-400
          text-black
          font-semibold
          transition
          hover:bg-cyan-300
          hover:shadow-[0_0_25px_rgba(34,211,238,.45)]
          "
        >
          Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.title} source code on GitHub`}
          className="
          w-12
          h-12
          rounded-full
          border
          border-white/10
          bg-white/5
          flex
          items-center
          justify-center
          transition
          hover:bg-white
          hover:text-black
          "
        >
          <FaGithub size={20} aria-hidden="true"/>
        </a>

      </div>

    </motion.article>
  );
}