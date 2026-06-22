import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import project1 from "@/assets/job.webp";
import project2 from "@/assets/auction.jpeg";
import project3 from "@/assets//learn.jpg";

const projectsData = [
  {
    title: "Job Portal",
    imgSrc: project1,
    githubUrl: "https://github.com/AmirShabbir99/Career",
    demoUrl: "https://careercompass-seven.vercel.app",
    cat: "Projects",
    badge: "LIVE PROJECT",
    desc: "A modern job portal for job seekers and recruiters with clean search and apply flow.",
    tags: ["React", "Responsive UI", "Job Portal"],
  },
  {
    title: "Prime Bid",
    imgSrc: project2,
    githubUrl: "https://github.com/AmirShabbir99/Auction_Portal",
    demoUrl: "https://auction-portal-bamd.vercel.app",
    cat: "Projects",
    badge: "LIVE PROJECT",
    desc: "Auction-based platform with a sleek interface for bidding and listing items.",
    tags: ["Auction", "Bidding", "Marketplace"],
  },
  {
    title: "E-Learning",
    imgSrc: project3,
    githubUrl: "https://github.com/AmirShabbir99/E_Learning_Platform",
    demoUrl: "https://e-learning-platform-sigma-five.vercel.app",
    cat: "Projects",
    badge: "LIVE PROJECT",
    desc: "An e-learning platform designed for smooth course browsing and learning experience.",
    tags: ["Education", "Courses", "Dashboard"],
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projectsData : projectsData.filter((p) => p.cat === active);

  return (
    <section id="work" className="relative px-4 py-20 sm:px-10">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-2 select-none text-center font-display text-[12vw] font-black leading-none text-neutral-200/70 sm:text-[9vw]"
        >
          PORTFOLIO
        </motion.div>

        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center font-display text-3xl font-bold text-neutral-900 sm:text-5xl"
        >
          /SELECTED WORK
        </motion.h3>

        <p className="relative mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-neutral-600 sm:text-base">
          A few real projects with modern UI, smooth flow, and production-focused layouts.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
     

        <motion.a
          href="#"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-[0_4px_18px_rgba(0,0,0,0.06)]"
        >
          View All Work <ArrowUpRight className="h-4 w-4" />
        </motion.a>
      </div>

      <motion.div layout className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p, i) => (
          <motion.article
            key={p.title}
            layout
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
              <div className="relative overflow-hidden">
                <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-neutral-800 backdrop-blur">
                  {p.badge}
                </span>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="aspect-[4/3] overflow-hidden"
                >
                  <img
                    src={p.imgSrc}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-900 opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 hover:scale-105"
                  aria-label={`Open ${p.title} demo`}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>

              <div className="p-5 sm:p-6">
                <h4 className="font-display text-2xl font-semibold text-neutral-900">
                  {p.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {p.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <motion.a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </motion.a>

                  <motion.a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}