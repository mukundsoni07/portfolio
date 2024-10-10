import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Mukund</h3>
            <p className="text-gray-400">
            A developer with expertise in web and Android development, as well as cybersecurity.
            </p>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Mukund. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <Link to="https://www.instagram.com/mukund_soni_07/" target="_blank" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </Link>
            <Link to="https://x.com/MukundSoni07" target="_blank" className="text-gray-400 hover:text-white">
              <FaXTwitter />
            </Link>
            <Link to="https://www.linkedin.com/in/mukundsoni07" target="_blank" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </Link>
            <Link to="https://github.com/mukundsoni07" target="_blank" className="text-gray-400 hover:text-white">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
