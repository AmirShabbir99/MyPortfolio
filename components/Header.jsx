import React from "react";
import resume from "/AmirResume.pdf";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Header() {
  const linkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/amir-shabbir-74404b280/",
      "_blank"
    );
  };

  const github = () => {
    window.open("https://github.com/AmirShabbir99", "_blank");
  };

  return (
    <header className="grid grid-cols-1 lg:grid-cols-2  lg:mt-[100px] bg-white">
      {/* Profile Image with animation */}
      <motion.div
        className="p-10 sm:p-20 lg:p-32 flex justify-center items-center"
        initial={{ opacity: 0, x: -50, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="   flex justify-center items-center">
          <img src="/profile-pic.png" className="shadow-xl rounded-full" />
        </div>
      </motion.div>

      {/* Intro Text and Buttons with staggered animation */}
      <motion.div
        className="py-16 sm:py-24 lg:py-32 px-6 sm:px-12 flex flex-col justify-center items-center gap-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.1,
              duration: 0.6,
              ease: "easeOut",
            },
          },
        }}
      >
        {[
          <div className="text-xl sm:text-2xl font-semibold text-gray-700">
            Hello, I’m
          </div>,
          <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
            Muhammad Amir
          </div>,
          <div className="text-xl sm:text-2xl font-semibold text-gray-700">
            MERN Stack Developer
          </div>,
        ].map((child, idx) => (
          <motion.div key={idx} variants={{ hidden: {}, visible: {} }}>
            {child}
          </motion.div>
        ))}

        {/* Buttons */}
        <motion.div
          variants={{ hidden: {}, visible: {} }}
          className="flex gap-4"
        >
          <a href={resume} download>
            <button className="ring-1 px-6 py-3 rounded-full hover:bg-gray-800 hover:text-white transition">
              Download CV
            </button>
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            className="cursor-pointer"
          >
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition">
              Contact Info
            </button>
          </Link>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={{ hidden: {}, visible: {} }}
          className="flex gap-4 mt-4"
        >
          <img
            onClick={linkedIn}
            src="/linkedin.png"
            alt="LinkedIn"
            className="h-8 sm:h-10 cursor-pointer hover:opacity-75 transition"
          />
          <img
            onClick={github}
            src="/github.png"
            alt="GitHub"
            className="h-8 sm:h-10 cursor-pointer hover:opacity-75 transition"
          />
        </motion.div>
      </motion.div>
    </header>
  );
}
