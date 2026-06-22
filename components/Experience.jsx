import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import preview from "@/assets/service-preview.jpg";

const skills = [
  {
    title: "FRONT-END TECHNOLOGIES",
    desc: "Modern, responsive, and clean UI development.",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "ShadCN"],
  },
  {
    title: "BACK-END TECHNOLOGIES",
    desc: "Scalable backend systems and API development.",
    items: ["Node.js", "Express.js", "RESTful APIs", "Next.js", "Prisma (ORM)", "Nest.js"],
  },
  {
    title: "DATABASES & STATE MANAGEMENT",
    desc: "Efficient data storage and application state handling.",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redux", "Context API"],
  },
  {
    title: "PROGRAMMING LANGUAGES",
    desc: "Strong coding foundation across multiple languages.",
    items: ["C++", "Python", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "TOOLS & PLATFORMS",
    desc: "Development, testing, and deployment workflow tools.",
    items: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Vercel", "Netlify", "Railway", "AWS", "Nginx"],
  },
  {
    title: "OTHER RELEVANT SKILLS",
    desc: "Integration, security, and payment flow experience.",
    items: ["API Integration", "OAuth", "JWT", "Payment Gateway"],
  },
];

export default function Experience() {
  const [pinnedOpen, setPinnedOpen] = useState(null);
  const [hoveredOpen, setHoveredOpen] = useState(null);

  // Hover gets priority, click keeps it open when mouse leaves
  const openIndex = hoveredOpen !== null ? hoveredOpen : pinnedOpen;

  const handleClick = (index) => {
    setPinnedOpen((prev) => (prev === index ? null : index));
    setHoveredOpen(index); // click karne par open rahe
  };

  return (
    <section id="skills" className="px-4 sm:px-10 py-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl sm:text-4xl font-bold text-neutral-900"
      >
        /SKILLS
      </motion.h3>

      <div className="mt-8 divide-y divide-neutral-300/70">
        {skills.map((s, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredOpen(i)}
              onMouseLeave={() => setHoveredOpen(null)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="open"
                    layout
                    initial={{ opacity: 0, scale: 0.98, y: 10, height: 0 }}
                    animate={{ opacity: 1, scale: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, scale: 0.98, y: -8, height: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative my-2 flex flex-col gap-6 overflow-hidden rounded-3xl bg-neutral-900 p-6 text-white sm:flex-row sm:items-center sm:p-8"
                  >
                    <motion.div
                      layout
                      className="flex-1 min-w-0"
                      transition={{ type: "spring", stiffness: 220, damping: 26 }}
                    >
                      <h4 className="font-display text-2xl sm:text-4xl font-bold">
                        {s.title}
                      </h4>

                      <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-300">
                        {s.desc}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {s.items.map((skill) => (
                          <motion.button
                            key={skill}
                            whileHover={{ y: -2, scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 transition-all duration-300 hover:bg-white hover:text-neutral-900"
                          >
                            {skill}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>

                    <motion.img
                      initial={{ rotate: -8, y: 30, opacity: 0 }}
                      animate={{ rotate: 6, y: 0, opacity: 1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      src={preview}
                      alt=""
                      className="hidden h-32 w-44 rounded-md object-cover shadow-2xl ring-4 ring-white/90 sm:block"
                    />

                    <button
                      onClick={() => {
                        setPinnedOpen(null);
                        setHoveredOpen(null);
                      }}
                      className="shrink-0 rounded-full p-2 transition-colors hover:bg-white/10 sm:self-start"
                      aria-label="Close skill section"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.button
                    key="closed"
                    onClick={() => handleClick(i)}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="group flex w-full items-center justify-between py-6 text-left"
                  >
                    <span className="font-display text-2xl font-bold text-neutral-900 sm:text-4xl">
                      {s.title}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-neutral-900 transition-transform duration-300 group-hover:rotate-45" />
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}