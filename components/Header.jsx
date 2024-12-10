import resume from "/AmirResume.pdf";
import { Link } from "react-scroll";

function Header() {
  const linkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/amir-shabbir-74404b280/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2BIpBlYrfQOWNIbKr%2BZzGPg%3D%3D",
      "_blank"
    );
  };

  const github = () => {
    window.open("https://github.com/AmirShabbir99", "_blank");
  };

  return (
    <header className="grid grid-cols-1 lg:grid-cols-2">
      <div className="p-20 lg:p-32 flex justify-center items-center">
        <img src="/profile-pic.png" className="shadow-xl rounded-full" />
      </div>
      <div className=" py-32 flex justify-center items-center flex-col gap-5">
        <div className="text-3xl font-bold text-gray-700">Hello I'm</div>
        <div className="lg:text-6xl text-3xl  font-bold text-gray-900">
          Muhammad Amir
        </div>
        <div className="text-3xl font-bold text-gray-700">
          MERN Stack Developer
        </div>
        <div className="flex gap-3">
          <a href={resume} download>
            <button className="ring-1 p-3 rounded-full px-6 hover:bg-gray-800 hover:text-white transition">
              Download CV
            </button>
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={150}
            className="cursor-pointer"
          >
            <button className="bg-gray-800 text-white hover:bg-gray-900 p-3 rounded-full px-6 transition">
              Contact Info
            </button>
          </Link>
        </div>
        <div className="flex gap-2">
          <img
            onClick={linkedIn}
            src="/linkedin.png"
            className="h-10 hover:bg-gray-200"
          />
          <img
            onClick={github}
            src="/github.png"
            className="h-10 hover:bg-gray-200"
          />
        </div>
      </div>
    </header>
  );
}
export default Header;
