import { Fragment, useState } from 'react'
import Image from 'next/image'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <Fragment>
            <nav className="bg-black">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">

                        <div className="flex space-x-4">

                            <div>
                                <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                    <Image
                                        src="/image/lezzdash.png"
                                        alt="lezzdash"
                                        width={200}
                                        height={500}
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center space-x-1">
                            <a href="#" className="py-2 px-3 bg-indigo-500 hover:bg-indigo-300 text-purple-200 hover:text-purple-800 rounded transition duration-300">Sign Up</a>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu} className="mobile-menu-button">
                                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} mobile-menu md:hidden`}>
                    <a href="#" className="block py-2 px-4 text-white text-sm hover:bg-gray-200">Menu 1</a>
                    <a href="#" className="block py-2 px-4 text-white text-sm hover:bg-gray-200">Menu 2</a>
                    <a href="#" className="block py-2 px-4 text-white text-sm hover:bg-gray-200">Sign Up</a>
                </div>
            </nav>
        </Fragment>
    )
}
