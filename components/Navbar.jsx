import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="p-5 lg:p-10 flex justify-between items-center">
      <h1 className="text-xl lg:text-5xl font-bold">Muhammad Amir</h1>
      <ul className="lg:flex hidden lg:block gap-20">
        <Link
          to="header"
          smooth={true}
          duration={500}
          offset={50}
          className="text-2xl cursor-pointer transition hover:text-red-700"
        >
          HOME
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={100}
          className="text-2xl cursor-pointer transition hover:text-red-700"
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={100}
          className="text-2xl cursor-pointer transition hover:text-red-700"
        >
          PROJECTS
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={150}
          className="text-2xl cursor-pointer transition hover:text-red-700"
        >
          CONTACT
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
