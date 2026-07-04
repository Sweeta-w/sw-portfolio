import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {FaGithub,FaLinkedin, FaEnvelope, } from "react-icons/fa";
import toast from "react-hot-toast";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const form = useRef();

  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();

  const formData = new FormData(form.current);

  const name = formData.get("from_name").trim();
  const message = formData.get("message").trim();

  const nameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

  if (!nameRegex.test(name)) {
    toast.error("Please enter a valid name.");
    return;
  }

  if (message.length < 10) {
    toast.error("Please describe your project in at least 10 characters.");
    return;
  }

  setSending(true);

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast.success(
        "Thanks! Your message has been sent. I'll get back to you soon."
      );

      form.current.reset();
      setSending(false);
    })
    .catch((error) => {
      console.error(error);

      toast.error("Something went wrong. Please try again.");

      setSending(false);
    });
};

  return (
    <section
      id="contact"
      className="py-32 bg-[#0A0A0A] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Available for frontend development projects, React applications,
            landing pages and website redesigns.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="space-y-5">

            <a
              href="mailto:sweetakcs@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition"
            >
              <FaEnvelope
                size={26}
                className="text-cyan-400"
              />

              <div>
                <h3 className="font-semibold">Email</h3>

                <p className="text-gray-400">
                  sweetakcs@gmail.com
                </p>
              </div>

            </a>

            <a
              href="https://github.com/Sweeta-w"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition"
            >
              <FaGithub
                size={26}
                className="text-cyan-400"
              />

              <div>
                <h3 className="font-semibold">GitHub</h3>

                <p className="text-gray-400">
                  github.com/Sweeta-w
                </p>
              </div>

            </a>

            <a
              href="https://www.linkedin.com/in/sweeta-k-7103972a6/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition"
            >
              <FaLinkedin
                size={26}
                className="text-cyan-400"
              />

              <div>
                <h3 className="font-semibold">LinkedIn</h3>

                <p className="text-gray-400 break-all">
                  linkedin.com/in/sweeta-k-7103972a6
                </p>
              </div>

            </a>

          </div>

          {/* RIGHT */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
          >
<input
  name="from_name"
  type="text"
  placeholder="Your Name"
  required
  minLength={3}
  maxLength={50}
  title="Please enter a valid name."
  className="
  w-full
  p-4
  rounded-xl
  bg-white/[0.03]
  border
  border-white/10
  outline-none
  focus:border-cyan-400
  "
/>

            <input
              name="from_email"
              type="email"
              placeholder="Your Email"
              required
              className="
              w-full
              p-4
              rounded-xl
              bg-white/[0.03]
              border
              border-white/10
              outline-none
              focus:border-cyan-400
              "
            />

            <textarea
  name="message"
  rows="6"
  placeholder="Tell me about your project..."
  required
  minLength={10}
  maxLength={1000}
  className="
  w-full
  p-4
  rounded-xl
  bg-white/[0.03]
  border
  border-white/10
  outline-none
  resize-none
  focus:border-cyan-400
  "
/>

            <button
  type="submit"
  disabled={sending}
  className="
  group
  relative
  overflow-hidden
  inline-flex
  items-center
  justify-center
  gap-3
  px-8
  py-4
  rounded-2xl
  cursor-pointer disabled:cursor-not-allowed
  bg-white/[0.05]
  border
  border-cyan-400/20
  backdrop-blur-xl

  text-white
  font-semibold
  tracking-wide

  transition-all
  duration-500

  hover:border-cyan-400/60
  hover:shadow-[0_0_35px_rgba(34,211,238,.25)]
  hover:-translate-y-1

  disabled:opacity-60
  disabled:cursor-not-allowed
"
>
  {/* Animated background */}
  <span
    className="
    absolute
    inset-0
    bg-gradient-to-r
    from-cyan-400/0
    via-cyan-400/15
    to-blue-500/0
    opacity-0
    group-hover:opacity-100
    transition
    duration-500
    "
  />
  <div
  className="
  absolute
  -top-20
  -left-20
  w-40
  h-40
  rounded-full
  bg-cyan-400/20
  blur-3xl
  opacity-0
  group-hover:opacity-100
  transition
  duration-700
  "
/>

  {/* Content */}
  <span className="relative flex items-center gap-3">

    {sending ? (
      <>
        <div
          className="
          w-5
          h-5
          rounded-full
          border-2
          border-cyan-400/30
          border-t-cyan-400
          animate-spin
          "
        />

        Sending...
      </>
    ) : (
      <>
        Send Message

        <ArrowUpRight
          size={18}
          className="
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
          group-hover:rotate-12
          "
        />
      </>
    )}

  </span>
</button>

          </form>

        </div>

      </div>
    </section>
  );
}