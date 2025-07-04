import React from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2fuuh5q",
        "template_uduy71k",
        e.target,
        "7nJVgsVNuINo2c3yt"
      )
      .then(
        (result) => {
          console.log("Email successfully sent! ", result.text);
          alert("Message Sent");
        },
        (error) => {
          console.log("Failed to send email: ", error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-white px-6 lg:px-32 py-20">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-gray-500 text-lg">to</div>
        <div className="text-gray-900 text-4xl md:text-5xl font-bold">
          Contact
        </div>
      </motion.div>

      {/* Form Container */}
      <motion.div
        className="flex justify-center items-center mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="ring-1 w-full max-w-md p-6 sm:p-8 bg-white rounded-2xl shadow">
          <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-700 mb-6">
            <span className="text-gray-800 font-bold">Let's</span> Work Together
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <textarea
              name="message"
              placeholder="Enter Message"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 h-28 resize-none"
            />
            <div className=" bg-gray-400  rounded">
              <button
                type="submit"
                className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition text-lg font-medium"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Contact Info Cards */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.1,
              duration: 0.6,
              ease: "easeOut",
            },
          },
        }}
      >
        {/* Email Card */}
        <motion.div
          className="ring-1 rounded-2xl p-6 flex items-center gap-4 bg-gray-50 w-full sm:w-auto"
          variants={{ hidden: {}, visible: {} }}
        >
          <img src="/email.png" alt="Email" className="h-6 lg:h-10" />
          <a
            href="mailto:m.amirshabbir99@gmail.com"
            className="text-gray-800 text-base lg:text-xl font-medium hover:text-red-700 transition"
          >
            m.amirshabbir99@gmail.com
          </a>
        </motion.div>

        {/* LinkedIn Card */}
        <motion.div
          className="ring-1 rounded-2xl p-6 flex items-center gap-4 bg-gray-50 w-full sm:w-auto cursor-pointer"
          variants={{ hidden: {}, visible: {} }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/amir-shabbir-74404b280/",
              "_blank"
            )
          }
        >
          <img src="/linkedin.png" alt="LinkedIn" className="h-6 lg:h-10" />
          <div className="text-gray-800 text-base lg:text-xl font-medium hover:text-red-700 transition">
            linkedin.com/in/amir-shabbir
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="text-center text-gray-600 text-sm sm:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        © 2025 Muhammad Amir Shabbir. All Rights Reserved.
      </motion.div>
    </section>
  );
};

export default Contact;
