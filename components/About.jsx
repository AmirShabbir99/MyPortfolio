import { motion } from "framer-motion";
import { useState } from "react";
import preview from "@/assets/service-preview.jpg";

const items = [
  {
    company: "EezahTech",
    title: "Junior Developer | MERN Stack Developer",
    date: "October 2025 – Present",
    type: "Full-time",
    bullets: [
      "Acquired 7 months of experience at EezahTech, working on production-level projects.",
      "Built responsive React.js and Tailwind CSS interfaces for Urban Concept, optimizing performance and integrating dynamic APIs for seamless data handling.",
      "Developed LEtudeImmobilier, a French real estate platform from scratch using React.js with multi-lingual support, secure authentication flows, dynamic routing, and advanced state management.",
    ],
  },
  {
    company: "PixelPK Technologies",
    title: "Paid Internship | MERN Stack Developer",
    date: "April 2025 – July 2025",
    type: "Internship",
    bullets: [
      "Completed a 4-month paid internship as a MERN Stack Developer at PixelPK Technologies.",
      "Built AI Avatar, AI Lawbot, and Khurshid Ahmad AI Bot.",
      "Developed full-stack features with React.js and Node.js, including RBAC, APIs, and multilingual support.",
      "Enhanced UI/UX with Figma and Tailwind CSS, integrating Heygen and OpenAI for voice and avatar interactions.",
    ],
  },
];

export default function About() {
  const [hover, setHover] = useState(0);

  return (
    <section id="experience" className="px-4 sm:px-8 py-16">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-6 sm:p-10 text-white shadow-2xl"
      >
        <div
          aria-hidden
          className="absolute inset-x-0 top-6 text-center font-extrabold text-[12vw] sm:text-[8vw] text-white/[0.04] leading-none select-none pointer-events-none"
        >
          EXPERIENCE
        </div>

        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">
              Professional Journey
            </p>
            <h3 className="mt-2 text-3xl sm:text-5xl font-bold">
              / EXPERIENCE
            </h3>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            MERN Stack Developer
          </span>
        </div>

        <div className="relative mt-10 space-y-6">
          {items.map((it, i) => (
            <motion.div
              key={it.company}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="text-xl sm:text-2xl font-semibold">
                      {it.company}
                    </h4>
                    <span className="rounded-full bg-gradient-to-r from-white/15 to-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/70">
                      {it.type}
                    </span>
                  </div>

                  <p className="mt-2 text-sm sm:text-base text-white/70">
                    {it.title}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm sm:text-[15px] leading-6 text-white/75">
                    {it.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-white/70 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-start md:items-end gap-3 md:ml-6">
                  <span className="text-sm whitespace-nowrap text-white/50">
                    {it.date}
                  </span>

                  {hover === i && (
                    <motion.img
                      layoutId="exp-preview"
                      src={preview}
                      alt=""
                      initial={{ rotate: -6, scale: 0.92, opacity: 0 }}
                      animate={{ rotate: 4, scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 18,
                      }}
                      className="hidden md:block h-24 w-40 rounded-xl object-cover ring-1 ring-white/20 shadow-2xl"
                    />
                  )}
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}