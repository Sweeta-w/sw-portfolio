import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Google AI Essentials",
    issuer: "Google",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/Q1D2HUOX3I7F",
  },
  {
    title: "Prompting Essentials",
    issuer: "Google",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/IDKJSQWW4DNT",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    year: "2025",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Jb4CAmiGDNyDNWsAg_1758350647621_completion_certificate.pdf",
  },
  {
    title: "Crash Course on Python",
    issuer: "Google",
    year: "2026",
    link: "https://www.coursera.org/account/accomplishments/verify/ZDIS93C2OVMQ",
  },
  {
    title: "Python Programming",
    issuer: "IBM SkillsBuild",
    year: "2026",
    link: "https://courses.skillsbuild.skillsnetwork.site/certificates/594ea350fb1b495d91f8e74560261733",
  },
];
export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-32 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <span className="uppercase tracking-[.3em] text-cyan-400 text-sm">
          Achievements
        </span>

        <h2 className="mt-5 text-5xl md:text-6xl font-bold text-white">
          Certifications
        </h2>

        <p className="mt-6 max-w-2xl text-gray-400 leading-8">
          Continuous learning is an important part of my development journey.
          Here are some certifications and courses that strengthened my
          frontend and programming skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">

          {certificates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              transition
              hover:border-cyan-400/40
              hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
              "
            >
              <div className="flex items-center justify-between">

                <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center">
                  <Award className="text-cyan-400" size={24} />
                </div>

                <span className="text-gray-500">
                  {item.year}
                </span>

              </div>

              <h3 className="mt-8 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.issuer}
              </p>

              <a
                href={item.link}
                className="
                mt-8
                inline-flex
                items-center
                gap-2
                text-cyan-400
                hover:text-cyan-300
                transition
                "
              >
                View Certificate

                <ExternalLink size={16} />
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}