import React from 'react';

const MobileMenu = () => {
    return (
        <>
            {/* Mobile menu */}
            <div className="side-area fixed w-full h-full inset-0 z-50">
                {/* bg open */}
                <div className="back-menu fixed bg-gray-900 bg-opacity-70 w-full h-full inset-x-0 top-0">
                    <div className="cursor-pointer text-white absolute right-64 p-2">
                        <svg
                            className="bi bi-x"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                                clipRule="evenodd"
                            />
                            <path
                                fillRule="evenodd"
                                d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
                {/* Mobile navbar */}
                <nav
                    id="mobile-nav"
                    className="side-menu flex flex-col right-0 w-64 fixed top-0 bg-white h-full overflow-auto z-40"
                >
                    <div className="mb-auto">
                        {/*navigation*/}
                        <nav className="relative flex flex-wrap">
                            <ul id="side-menu" className="w-full float-none flex flex-col">
                                <li className="relative">
                                    <a href="/Bangladesh" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                                        Bangladesh
                                    </a>
                                </li>
                                <li className="relative">
                                    <a href="/World" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                                        World
                                    </a>
                                </li>
                                <li className="relative">
                                    <a href="/Politics" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                                        Politics
                                    </a>
                                </li>
                                <li className="relative">
                                    <a href="/Sports" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                                        Sports
                                    </a>
                                </li>
                                <li className="relative">
                                    <a href="/Corporates" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                                        Corporates
                                    </a>
                                </li>
                                <li className="relative">
                                    <a href="/Tech" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                                        Tech
                                    </a>
                                </li>
                                <li className="relative">
                                    <a href="/Entertainment" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                                        Entertainment
                                    </a>
                                </li>
                                <li className="relative">
                                    <a href="/Features" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                                        Features
                                    </a>
                                </li>
                                <li className="relative">
                                    <a href="/Lifestyle" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                                        Lifestyle
                                    </a>
                                </li>
                                <li className="relative">
                                    <a href="/Education" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
                                        Education
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* copyright */}
                    <div className="py-4 px-6 text-sm mt-6 text-center">
                        <p>
                            Copyright <a href="#">BangladeshFirst.com</a> - All right reserved
                        </p>
                    </div>
                </nav>
            </div>
            {/* End Mobile menu */}
        </>
    );
};

export default MobileMenu;