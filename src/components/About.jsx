import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      className="py-32 bg-[#0A0A0A] text-white"
    >
      <div
        ref={ref}
        className="max-w-6xl mx-auto px-6"
      >
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          About Me
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          Frontend Developer
          <br />
          Building Modern Web Experiences
        </h2>

        <p className="max-w-3xl text-gray-400 text-lg leading-relaxed mb-12">
          I'm Sweeta, a Computer Science graduate (BSCS) and Frontend
          Developer passionate about building responsive, interactive,
          and user-focused web applications.

          My expertise includes React.js, JavaScript, Tailwind CSS,
          Bootstrap, GSAP, and Python development. I enjoy combining
          modern UI design with clean code to create high-performance
          digital experiences.

          From frontend interfaces to Python-based applications and
          data-driven solutions, I continuously explore new technologies
          and build projects that solve real-world problems.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-3xl font-bold text-cyan-400">
              BSCS
            </h3>
            <p className="text-gray-400 mt-2">
              Computer Science Graduate
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-3xl font-bold text-cyan-400">
              React
            </h3>
            <p className="text-gray-400 mt-2">
              Frontend Development
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-3xl font-bold text-cyan-400">
              Python
            </h3>
            <p className="text-gray-400 mt-2">
              Automation & Application Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}