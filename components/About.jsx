import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="about px-6 py-20 lg:px-32 lg:py-32 text-center bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-gray-500 text-lg mb-1">Get to know</div>
        <div className="text-gray-900 text-4xl md:text-5xl font-bold mb-10">
          About Me
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row lg:items-center gap-10">
        {/* Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/imgA.png"
            alt="Profile"
            className="mx-auto w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-3xl object-cover"
          />
        </motion.div>

        {/* Details */}
        <motion.div
          className="flex-grow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Education Card */}
            <motion.div
              className="ring-1 rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img src="/education.png" alt="Education" className="h-16 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Education
              </h3>
              <p className="text-lg font-semibold text-gray-600">
                B.Sc. Computer Science
              </p>
              <p className="text-md font-medium text-gray-600">
                Lahore Garrison University
              </p>
              <p className="text-sm font-medium text-gray-500">(2020–2024)</p>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              className="ring-1 rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img
                src="/experience.png"
                alt="Experience"
                className="h-16 mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Experience
              </h3>
              <p className="text-lg font-semibold text-gray-600">8 Month</p>
              <p className="text-md font-medium text-gray-600">
                MERN Stack Developer
              </p>
            </motion.div>
          </div>

          {/* Bio Text */}
          <motion.ul
            className="list-disc pl-5 text-left text-gray-600 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <li>
              Completed a 1 month remote internship at Ecodecamp, delivering 5
              projects using HTML, CSS, React.js, and Tailwind CSS.
            </li>
            <li>
              Gained 3 months of freelancing experience on Human resource management and Asset
              Management systems using the MERN stack, Next.js, Prisma, and
              PostgreSQL.
            </li>
            <li>
             Completed a 4 month role as a Junior Developer at PixelPK, building AI-based web applications (AI Avatar, AI Lawbot, Khurshid Ahmad Bot) with role-based access, REST APIs, multilingual support, and UI enhancements.
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
