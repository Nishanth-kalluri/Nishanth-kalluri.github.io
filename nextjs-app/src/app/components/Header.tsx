import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          Nishanth Kalluri
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="#introduction"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
              >
                Introduction
              </Link>
            </li>
            <li>
              <Link
                href="#education"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="#work-experience"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
              >
                Skills
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
