import React from 'react';
import { SiMeta, SiAmazon } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const Topbar = () => {
    return (
        <div className="bg-gradient-to-r from-yellow-700 via-red-600 to-purple-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4 py-2">
                
                {/* Social Icons */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="https://about.meta.com/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition duration-300 ease-in-out hover:text-blue-200">
                        <SiMeta className="h-6 w-6 drop-shadow" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition duration-300 ease-in-out hover:text-pink-300">
                        <FaInstagram className="h-6 w-6 drop-shadow" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition duration-300 ease-in-out hover:text-gray-300">
                        <RiTwitterXFill className="h-6 w-6 drop-shadow" />
                    </a>
                    <a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition duration-300 ease-in-out hover:text-yellow-300">
                        <SiAmazon className="h-6 w-6 drop-shadow" />
                    </a>
                </div>

                {/* Center Tagline */}
                <div className="text-sm text-center flex-grow font-medium tracking-wide animate-pulse">
                    <span>"Wear your confidence with Wearly — Fashion that feels like you!" 👕👖</span>
                </div>

                {/* Phone */}
                <div className="hidden md:flex items-center space-x-2 text-sm">
                    <MdOutlinePhoneAndroid className="h-5 w-5" />
                    <a href="tel:+1234567890" className="hover:text-blue-200 transition duration-300 ease-in-out">+1 234 567-890</a>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
