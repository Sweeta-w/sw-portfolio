import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const filters = [
  "All",
  "React",
  "JavaScript",
  "Bootstrap",
  "API",
  "HTML",
  "CSS",
];

export default function Projects() {
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tech.includes(activeFilter)
        );

  useEffect(() => {
  const cards = gsap.utils.toArray(".project-card");

  gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    }
  );
}, []);
  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();

    gsap.to(spotlightRef.current, {
      x: e.clientX - rect.left - 150,
      y: e.clientY - rect.top - 150,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-32 bg-[#0A0A0A] overflow-hidden"
    >
      

      <div
        className="
        absolute
        top-32
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[700px]
        rounded-full
        bg-cyan-500/5
        blur-[220px]
        "
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <span className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
          Portfolio
        </span>

        <h2 className="mt-5 text-5xl md:text-6xl font-bold text-white">
          Selected Work
        </h2>

        <p className="mt-6 max-w-2xl text-gray-400 leading-8">
          A collection of modern frontend projects built using React,
          JavaScript, Bootstrap, APIs, GSAP and responsive web design.
        </p>

        {/* Filters */}

        <div className="flex flex-wrap gap-3 mt-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-cyan-400 text-black border-cyan-400"
                  : "border-white/10 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards */}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Bottom Button */}

        <div className="mt-20 flex justify-center">
          <button
            className="
            px-8
            py-4
            rounded-full
            border
            border-cyan-400/30
            text-cyan-400
            hover:bg-cyan-400
            hover:text-black
            transition-all
            duration-300
            "
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}