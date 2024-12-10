function About() {
  return (
    <div className="about p-20 lg:p-32  text-center" id="about">
      <div className="text-gray-500 text-lg">Get to know</div>
      <div className="text-gray-900 text-5xl font-bold">About Me</div>
      <div className="flex flex-col lg:flex-row lg:justify-start lg:items-center gap-5 lg:gap-10 py-10">
        <img src="/imgA.png" className="lg:h-[400px] rounded-3xl" />
        <div className=" py-10 flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="ring-1 rounded-lg p-10 flex flex-col gap-3 justify-center items-center">
              <img src="/education.png" className="h-20" />
              <div className="text-3xl font-bold text-gray-900">Education</div>
              <div className="text-xl font-semibold text-gray-600">
                Bachelor of Computer Science Lahore Garrison University (Lahore,
                Pakistan)
              </div>
              <div className="text-md font-semibold text-gray-600">
                (2020-2024)
              </div>
            </div>
            <div className="ring-1 rounded-lg p-10 flex flex-col gap-3 justify-center items-center">
              <img src="/experience.png" className="h-20" />
              <div className="text-3xl font-bold text-gray-900">Experience</div>
              <div className="text-xl font-semibold text-gray-600">1 Month</div>
              <div className="text-md font-semibold text-gray-600">
                Ecodecamp Front-End Development Internship
              </div>
            </div>
          </div>
          <div className="text text-start text-2xl text-gray-600">
            Detail-oriented MERN Stack Developer with expertise in building
            dynamic, responsive web applications using React.js, Node.js,
            Express.js and MongoDB. Proficient in creating seamless user
            experiences, integrating APIs, and managing state with Redux.
            Passionate about writing clean, maintainable code and contributing
            to impactful, fast-paced projects.
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
