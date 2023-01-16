import React from "react";
import logo from "../assets/text-logo.png";
import telegram from "../assets/telegram-logo-944.png";
import twitter from "../assets/logo-twitter-png-5860.png";
import poocoin from "../assets/poocoin-poocoin-logo.png";
import pancakeSwap from "../assets/bunny-color.png";
import dextools from "../assets/dextools.svg";

const Navbar = () => {
  return (
    <div className="navbar w-9/12 mx-auto rounded-full bg-base-100 shadow-lg">
      <div className="navbar-start">
        <a className="normal-case text-xl">
          <img src={logo} className="w-24 ml-5" alt="" />
        </a>
      </div>
      <div className="navbar-center gap-4">
        <li className="list-none">About</li>
        <li className="list-none">Tokenomics</li>
        <li className="list-none">Roadmap</li>
        <li className="list-none">
          <img src={telegram} className="w-8" alt="" />
        </li>
        <li className="list-none">
          <img src={twitter} className="w-8" alt="" />
        </li>
        <li className="list-none">
          <img src={pancakeSwap} className="w-8" alt="" />
        </li>
        <li className="list-none">
          <img src={poocoin} className="w-8" alt="" />
        </li>
        <li className="list-none">
          <img src={dextools} className="w-8" alt="" />
        </li>
      </div>
      <div className="navbar-end gap-2">
        <a
          href="#_"
          class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
        >
          <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
          <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
            Join
          </span>
        </a>
        <a
          href="#_"
          class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span class="relative text-white">Buy Now</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
