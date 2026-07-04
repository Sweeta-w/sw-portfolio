import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const tech = [
    { name: "React ⚛", color: "text-cyan-400" },
    { name: "JavaScript", color: "text-yellow-400" },
    { name: "UI Design", color: "text-purple-400" },
    { name: "CSS", color: "text-blue-400" },
    { name: "Data Analysis", color: "text-green-400" },
  ];
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">


      {/* CINEMATIC FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] h-[3px] bg-cyan-400/30 rounded-full animate-float blur-[0.5px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-cyan-400 font-medium mb-6"
            >
              Frontend Developer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-white font-bold leading-[0.95] text-5xl md:text-7xl lg:text-8xl"
            >
              Hi, I'm
              <span className="block text-cyan-400">
                Sweeta
              </span>
            </motion.h1>
            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] mt-4 text-gray-400"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              Building Modern
              Web Experiences

            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-gray-400 text-lg max-w-xl leading-relaxed"
            >
              I build responsive, interactive and high-performance web
              experiences using modern frontend technologies, animations and
              clean user interfaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a
                href="#projects"
                className="
  px-7 py-3
  rounded-full
  bg-cyan-400
  text-black
  font-semibold
  transition-all
  duration-300
  hover:-translate-y-1
  hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]
"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
  px-7 py-3
  rounded-full
  border
  border-white/20
  text-white
  transition-all
  duration-300
  hover:bg-white/5
  hover:-translate-y-1
"
              >
                Contact Me
              </a>

            </motion.div>
            <div className="flex items-center gap-3 mt-8">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

              <span className="text-gray-400 text-sm">
                Available for Freelance Projects
              </span>
            </div>
          </div>

          
          {/* RIGHT SIDE */}
          <div className="relative hidden lg:flex items-center justify-center">

            {/* Glow */}
            <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full" />

            {/* Floating Cards */}
            <div className="absolute -top-10 -left-8 animate-float">
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-cyan-400 text-sm">
                React ⚛
              </div>
            </div>

            <div
              className="absolute top-8 right-0 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-purple-400 text-sm">
                GSAP
              </div>
            </div>

            <div
              className="absolute bottom-10 left-0 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-green-400 text-sm">
                Tailwind CSS
              </div>
            </div>

            {/* Terminal */}
            <div className="relative z-10 w-[500px] rounded-3xl overflow-hidden border border-white/10 bg-[#0f1117]/80 backdrop-blur-xl shadow-2xl">

              {/* Top Bar */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs text-gray-500">
                  developer-terminal
                </span>
              </div>

              {/* Content */}
              <div className="p-6 font-mono text-sm leading-8">

                <div>
                  <span className="text-cyan-400">$</span>{" "}
                  <span className="text-gray-300">whoami</span>
                </div>

                <div className="text-white mb-4">
                  Sweeta
                </div>

                <div>
                  <span className="text-cyan-400">$</span>{" "}
                  <span className="text-gray-300">role</span>
                </div>

                <div className="text-green-400 mb-4">
                  Frontend Developer
                </div>

                <div>
                  <span className="text-cyan-400">$</span>{" "}
                  <span className="text-gray-300">skills</span>
                </div>

                <div className="text-purple-400 mb-4">
                  <TypeAnimation
                    sequence={[
                      "React Developer",
                      1500,
                      "Frontend Engineer",
                      1500,
                      "UI Animation Specialist",
                      1500,
                    ]}
                    repeat={Infinity}
                  />
                </div>

                <div>
                  <span className="text-cyan-400">$</span>{" "}
                  <span className="text-gray-300">status</span>
                </div>

                <div className="text-green-400 mb-4">
                  Available for Freelance
                </div>

                <div className="flex items-center">
                  <span className="text-cyan-400">$</span>

                  <span className="ml-2 w-2 h-5 bg-cyan-400 animate-pulse rounded-sm" />
                </div>

              </div>
            </div>

            {/* Stats */}
            <div className="absolute -bottom-6 right-0 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-2xl font-bold text-white">
                20+
              </div>
              <div className="text-xs text-gray-400">
                Projects Built
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}