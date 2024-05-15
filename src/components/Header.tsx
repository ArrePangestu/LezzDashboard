import { Fragment, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Fragment>
      <nav className="bg-black sticky place-items-center border-solid top-0 z-50 px-6 sm:px-16 py-4 sm:py-3">
        <div>
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <Image
                  src="/image/lezzform-logo.svg"
                  alt="lezzdash"
                  width={100}
                  height={100}
                  className="h-auto sm:h-auto size-28 sm:size-40"
                />
              </div>
            </div>
            <div className="flex sm:gap-2">
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-2 px-3 bg-indigo-500 hover:bg-indigo-300 text-purple-200 hover:text-purple-800 rounded-full transition duration-300"
                >
                  Book a Demo
                </a>
                <a href="#" className="py-2 px-3 text-white">
                  Sign In
                </a>
              </div>

              <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="mobile-menu-button">
                  <svg
                    className="w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} mobile-menu md:hidden text-center`}
        >
          <a
            href="#"
            className="block py-2 px-4 text-white text-sm"
          >
            Menu 1
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-white text-sm"
          >
            Menu 2
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-white text-sm"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </Fragment>
  );
}
