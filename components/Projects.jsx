import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Job Portal",
    imgSrc: "/job.webp",
    githubUrl: "https://github.com/AmirShabbir99/Career",
    demoUrl: "https://careercompass-seven.vercel.app",
  },
  {
    title: "Prime Bid",
    imgSrc: "/auction.jpeg",
    githubUrl: "https://github.com/AmirShabbir99/Auction_Portal",
    demoUrl: "https://auction-portal-bamd.vercel.app",
  },
  {
    title: "E-Learning",
    imgSrc: "/learn.jpg",
    githubUrl: "https://github.com/AmirShabbir99/E_Learning_Platform",
    demoUrl: "https://e-learning-platform-sigma-five.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-40 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-gray-500 uppercase tracking-widest mb-3 text-lg lg:text-xl">
          Browse My Recent
        </h2>
        <h1 className="text-gray-900 text-5xl lg:text-6xl font-extrabold mb-12">
          Projects
        </h1>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white ring-1 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative h-64 lg:h-72">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between">
                <h3 className="text-gray-900 text-3xl lg:text-4xl font-semibold mb-6">
                  {project.title}
                </h3>

                <div className="mt-auto flex space-x-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3  border-2 border-gray-300 rounded-full text-base lg:text-lg font-medium hover:bg-gray-900 hover:text-white transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 border-2 border-gray-300 rounded-full text-base lg:text-lg font-medium hover:bg-gray-900 hover:text-white transition"
                  >
                    Live 
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
