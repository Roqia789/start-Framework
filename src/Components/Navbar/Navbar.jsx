import {Link,NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <>
<nav className="bg-white border-gray-200 dark:bg-gray-700 py-4">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse rounded md:bg-transparent">
        <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">SART FRAMEWORK</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col md:px-4 mt-4 md:flex-row md:space-x-8 md:mt-0">
        <li>
          <NavLink to="/about" className="block font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="block font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PORTFOLIO</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="block font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};
export default Navbar;

