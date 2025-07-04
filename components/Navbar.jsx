import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // or any icon library

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "HOME", to: "header", offset: 50 },
    { label: "Skills", to: "skills", offset: 1 },
    { label: "PROJECTS", to: "projects", offset: 1 },
    { label: "CONTACT", to: "contact", offset: 1 },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl sm:text-3xl lg:text-5xl font-bold cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Muhammad Amir
        </motion.h1>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-10">
          {links.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={link.offset}
                className="text-xl cursor-pointer hover:text-red-700 transition"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="lg:hidden bg-white shadow-inner"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {links.map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border-b last:border-none"
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={link.offset}
                  className="block px-6 py-4 text-lg hover:bg-gray-100 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
