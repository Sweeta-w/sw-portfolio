import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  ShieldCheck,
  MapPin,
  BriefcaseBusiness,
  Clock3,
  ArrowUpRight
} from "lucide-react";


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

          {/* <p className="text-gray-400 max-w-2xl mx-auto">
            Available for frontend development projects, React applications,
            landing pages and website redesigns.
          </p> */}
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you need a modern React application,
            responsive website, or frontend improvements,
            I'd be happy to discuss your project and help bring your ideas to life.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div
  className="
  rounded-3xl
  border
  border-white/10
  bg-white/[0.03]
  backdrop-blur-xl
  p-6
  transition-all
  duration-300
  hover:border-cyan-400/40
  hover:shadow-[0_0_35px_rgba(34,211,238,.12)]
  "
>
  {/* Privacy */}

  <div className="flex items-start gap-4">

    <div
      className="
      flex
      h-11
      w-11
      shrink-0
      items-center
      justify-center
      rounded-xl
      bg-cyan-400/10
      "
    >
      <ShieldCheck
        size={20}
        className="text-cyan-400"
        aria-hidden="true"
      />
    </div>

    <div>

      <h3 className="text-lg font-semibold text-white">
        Privacy First
      </h3>

      <p className="mt-2 text-gray-400 leading-7">
        Your information is only used to respond to your inquiry.
      </p>

    </div>

  </div>

  {/* Divider */}

  <div className="my-6 h-px bg-white/10" />

  {/* Location */}

  <div className="flex items-center gap-4 py-2">

    <div
      className="
      flex
      h-10
      w-10
      shrink-0
      items-center
      justify-center
      rounded-lg
      bg-cyan-400/10
      "
    >
      <MapPin
        size={18}
        className="text-cyan-400"
        aria-hidden="true"
      />
    </div>

    <div>

      <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
        Location
      </p>

      <p className="mt-1 text-white">
        Pakistan
      </p>

    </div>

  </div>
  <hr
  className="my-4 border-white/10"
  aria-hidden="true"
/>

  {/* Availability */}

  <div className="flex items-center gap-4 py-2">

    <div
      className="
      flex
      h-10
      w-10
      shrink-0
      items-center
      justify-center
      rounded-lg
      bg-cyan-400/10
      "
    >
      <BriefcaseBusiness
        size={18}
        className="text-cyan-400"
        aria-hidden="true"
      />
    </div>

    <div>

      <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
        Availability
      </p>

      <p className="mt-1 text-white">
        Open to Remote Opportunities
      </p>

    </div>

  </div>
  <hr
  className="my-4 border-white/10"
  aria-hidden="true"
/>

  {/* Response */}

  <div className="flex items-center gap-4 py-2">

    <div
      className="
      flex
      h-10
      w-10
      shrink-0
      items-center
      justify-center
      rounded-lg
      bg-cyan-400/10
      "
    >
      <Clock3
        size={18}
        className="text-cyan-400"
        aria-hidden="true"
      />
    </div>

    <div>

      <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
        Response Time
      </p>

      <p className="mt-1 text-white">
        Usually within 24 hours
      </p>

    </div>

  </div>
  

</div>

          {/* RIGHT */}

          <form
            ref={form}
            aria-busy={sending}
            onSubmit={sendEmail}
            className="space-y-5"
          >
            <h3 className="text-2xl font-bold mb-2">
              Send a Message
            </h3>

            <p className="text-gray-400 mb-6">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
            <input
              name="from_name"
              type="text"
              placeholder="Your Name"
              required
              minLength={3}
              maxLength={50}
              autoComplete="name"
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
              autoComplete="email"
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
              aria-label="Send message"
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
                    aria-hidden="true"
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
                      aria-hidden="true"
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