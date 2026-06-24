import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import portrait from "@/assets/profile-pic.png";

const socials = [
  {
    label: "Github",
    icon: Github,
    url: "https://github.com/AmirShabbir99",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/amir-shabbir99",
  },
];

export default function Header() {
  return (
    <section className="relative px-4 sm:px-10 pt-8 sm:pt-14 pb-10 overflow-hidden">
      <div className="relative">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="text-center font-display font-black leading-[0.85] tracking-tight"
        >
          <motion.span
            variants={{ hidden: { y: 40, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="block text-[14vw] sm:text-[11vw] text-transparent"
            style={{ WebkitTextStroke: "1.5px #0a0a0a" }}
          >
            Amir
          </motion.span>
          <motion.span
            variants={{ hidden: { y: 40, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="block text-[14vw] sm:text-[11vw] text-neutral-900 -mt-[2vw]"
          >
            Shabbir
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-4 sm:-mt-[5vw] w-[58%] max-w-[420px] z-10"
        >
          <img
            src={portrait}
            alt="Dymas Alfin portrait"
            className="w-full select-none"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
            }}
          />
        </motion.div>

        <div className="relative -mt-6 sm:-mt-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 z-20">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="max-w-xs"
          >
            <h2 className="font-display text-2xl font-bold text-neutral-900">MERN Stack Developer</h2>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Developing full-stack web applications that are modern, secure, and performance-driven.
              Turning ideas into production-ready MERN solutions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            >
              Let's Connect <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.8 } } }}
            className="flex sm:flex-col gap-2.5 flex-wrap"
          >
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={{ hidden: { x: 20, opacity: 0 }, show: { x: 0, opacity: 1 } }}
                whileHover={{ scale: 1.05, x: -4 }}
                className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-medium text-neutral-800 shadow-[0_4px_18px_rgba(0,0,0,0.06)]"
              >
                <s.icon className="h-3.5 w-3.5" />
                {s.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
