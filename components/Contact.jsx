import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, Send, Sparkles } from "lucide-react";

export default function Contact () {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_2fuuh5q",
        "template_uduy71k",
        form,
        "7nJVgsVNuINo2c3yt"
      )
      .then(
        (result) => {
          console.log("Email successfully sent! ", result.text);
          alert("Message Sent");
          form.reset();
          setSending(false);
        },
        (error) => {
          console.log("Failed to send email: ", error.text);
          alert("Something went wrong. Please try again.");
          setSending(false);
        }
      );
  };

  const linkedinUrl = "https://www.linkedin.com/in/amir-shabbir-74404b280/";

  return (
    <section
      id="contact"
      className="relative w-full overflow-x-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-full max-w-6xl"
      >
        <div className="mb-10 text-center sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-700 shadow-[0_6px_24px_rgba(0,0,0,0.05)] sm:text-sm"
          >
            <Sparkles className="h-4 w-4 shrink-0 text-neutral-900" />
            <span className="truncate">Available for work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="mt-5 px-1 font-display text-3xl font-black tracking-tight text-neutral-900 sm:mt-6 sm:text-5xl lg:text-6xl"
          >
          Contact us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl px-2 text-sm leading-7 text-neutral-600 sm:text-base"
          >
            Have an idea, project, or role in mind? Send a message and let’s
            build something clean, modern, and useful together.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="w-full rounded-3xl border border-neutral-200 bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:p-6 md:p-8"
          >
            <div className="mb-6 flex flex-col gap-3 sm:mb-7 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 max-w-xl">
                <h3 className="font-display text-2xl font-bold text-neutral-900 sm:text-3xl">
                  Send a message
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Quick response for full-time opportunities.
                </p>
              </div>

              <div className="hidden shrink-0 rounded-2xl bg-neutral-900 p-3 text-white sm:block">
                <Send className="h-5 w-5" />
              </div>
            </div>

            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="min-w-0">
                  <label className="mb-2 block text-sm font-medium text-neutral-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your name"
                    required
                    className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 focus:bg-white"
                  />
                </div>

                <div className="min-w-0">
                  <label className="mb-2 block text-sm font-medium text-neutral-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your email"
                    required
                    className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 focus:bg-white"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="w-full resize-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 focus:bg-white sm:rows-[7]"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: sending ? 1 : 1.02, y: sending ? 0 : -1 }}
                whileTap={{ scale: sending ? 1 : 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full !bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white shadow-[0_14px_40px_-10px_rgba(0,0,0,0.6)] transition disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[180px]"
              >
                {sending ? "Sending..." : "Send Message"}
                <ArrowUpRight className="h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
            className="flex w-full min-w-0 flex-col gap-5 sm:gap-6"
          >
            <div className="w-full rounded-3xl border border-neutral-200 bg-neutral-50 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] sm:p-6 md:p-8">
              <h3 className="font-display text-2xl font-bold text-neutral-900">
                Direct contact
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Reach out directly through email or LinkedIn.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:m.amirshabbir99@gmail.com"
                  className="flex w-full min-w-0 items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)] sm:items-center"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-neutral-900 text-white sm:h-12 sm:w-12">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                      Email
                    </div>
                    <div className="mt-1 break-all text-sm font-semibold text-neutral-900 sm:break-normal sm:text-base">
                      m.amirshabbir99@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full min-w-0 items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)] sm:items-center"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-neutral-900 text-white sm:h-12 sm:w-12">
                    <Linkedin className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
                      LinkedIn
                    </div>
                    <div className="mt-1 break-all text-sm font-semibold text-neutral-900 sm:break-normal sm:text-base">
                      linkedin.com/in/amir-shabbir
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full rounded-3xl bg-neutral-900 p-4 text-white shadow-[0_12px_36px_rgba(0,0,0,0.22)] sm:p-6 md:p-8">
              <h4 className="font-display text-2xl font-bold sm:text-3xl">
                Let’s build something great
              </h4>
              <p className="mt-3 text-sm leading-7 text-neutral-300 sm:text-base">
                I’m open to full-time opportunities where clean UI and strong backend detail matter.
              </p>

            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 text-center text-xs text-neutral-500 sm:text-sm"
        >
          © 2025 Muhammad Amir Shabbir. All Rights Reserved.
        </motion.div>
      </motion.div>
    </section>
  );
};