import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { } from "react-icons/fa";
export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top */}

        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Sweeta<span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-4 text-gray-300 leading-7 max-w-md">
              Frontend Developer focused on building modern,
              responsive and interactive web experiences using
              React, JavaScript, Tailwind CSS, GSAP and Python.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#home" className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-cyan-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/Sweeta-w"
                target="_blank"
                aria-label="GitHub Profile"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-400 hover:text-black transition"
              >
                <FaGithub size={20} aria-hidden="true"/>
              </a>

              <a
                href="https://www.linkedin.com/in/sweeta-k-7103972a6/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-400 hover:text-black transition"
              >
                <FaLinkedin size={20} aria-hidden="true"/>
              </a>

              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                aria-label="Send Email"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-400 hover:text-black transition"
              >
                <FaEnvelope size={20} aria-hidden="true"/>
              </a>
              <a
                href="https://wa.me/923091XX130009?text=Sorry%20Sweeta!%20I%20Here%20This%20is%20wrong%20number%20just%20added%20.%20Contact%20me%20on%20email."
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with Sweeta on WhatsApp"
                className="w-12
              h-12
              rounded-full
              border
              border-white/10
              flex
              items-center
              justify-center
              text-gray-300
              hover:bg-green-500
              hover:text-white
              transition
              duration-300
              "
              >
                <FaWhatsapp size={20} aria-hidden="true"/>
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-white/10"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-zinc-300 text-sm">
            © {new Date().getFullYear()} Sweeta. All Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
          >
            Back to Top

            <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition">
              <FaArrowUp />
            </div>

          </button>

        </div>

      </div>

    </footer>
  );
}