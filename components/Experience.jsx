import { motion } from "framer-motion";
import { useEffect } from "react";

function Experience() {
  const skills = [
    {
      title: "Front-End Technologies",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Tailwind CSS",
        "ShadCN",
      ],
    },
    {
      title: "Back-End Technologies",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Next.js",
        "Prisma (ORM)",
      ],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "State Management",
      skills: ["Redux", "Context API"],
    },
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "JavaScript (ES6+)", "TypeScript"],
    },
    {
      title: "Other Relevant Skills",
      skills: ["API Integration", "OAuth, JWT", "Payment gateway"],
    },
  ];

  return (
    <div
      className="experience text-center px-5 py-10 lg:px-32 lg:py-20 bg-white min-h-screen"
      id="skills"
    >
      <div className="text-gray-500 text-lg mb-2">Explore My</div>
      <div className="text-gray-900 text-4xl md:text-5xl font-bold mb-12">
        Skills
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            className="ring-1 rounded-3xl p-6 sm:p-8 flex flex-col h-full shadow hover:shadow-md transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-gray-900 text-2xl font-bold mb-5">
              {category.title}
            </h3>
            <ul className="grid grid-cols-2 gap-4 text-left">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <img src="/checkmark.png" alt="✓" className="h-5" />
                  <span className="text-gray-900 text-sm font-medium">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
