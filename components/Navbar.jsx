import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", count:null},
  { label: "Experience", count: "~1y" },
  { label: "Skills", count: "20+" },
  { label: "Projects", count: "8+"},
  { label: "Contact", count: null },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between gap-4 px-4 sm:px-6 pt-4"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-xs sm:text-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-medium text-neutral-800 whitespace-nowrap">Available</span>
      </motion.div>

      <div className="hidden md:flex items-center gap-7 text-[15px] font-sans">
        {links.map((l, i) => (
          <motion.a
            key={l.label}
            href={`#${l.label.toLowerCase()}`}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 + i * 0.07, duration: 0.45, ease: "easeOut" }}
            className="group relative text-neutral-900"
          >
            <span className="font-medium">{l.label}</span>
            {l.count && (
              <sup className="ml-1 text-[10px] text-neutral-500 font-normal">[{l.count}]</sup>
            )}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-neutral-900 transition-all duration-300 group-hover:w-full" />
          </motion.a>
        ))}
      </div>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2.5 text-xs sm:text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_14px_40px_-10px_rgba(0,0,0,0.6)] transition-shadow"
      >
        Let's Talk
        <ArrowUpRight className="h-3.5 w-3.5" />
      </motion.a>
    </motion.nav>
  );
}
