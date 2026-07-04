import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Sweeta<span className="text-cyan-400">.</span>
            </a>

            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition"
              >
                Hire Me
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden text-white text-3xl"
            >
              {open ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "100%" }}
  transition={{ duration: 0.35 }}
  className="fixed inset-0 bg-[#0A0A0A] z-40 md:hidden"
>
  <div className="pt-28 px-8">

    <nav className="flex flex-col gap-8">

      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setOpen(false)}
          className="text-3xl font-semibold text-white"
        >
          {link.name}
        </a>
      ))}

      <a
        href="#contact"
        onClick={() => setOpen(false)}
        className="mt-6 w-fit px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold"
      >
        Hire Me
      </a>

    </nav>

  </div>
</motion.div>
        )}
      </AnimatePresence>
    </>
  );
}