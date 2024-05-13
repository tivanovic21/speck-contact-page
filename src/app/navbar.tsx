"use client";
import React, {useState} from 'react';

const NavBar = () => {

  const [opened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  return (
  <nav className="bg-white">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-12">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/logo.svg" alt="Speck logo" />
    </a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-end items-center">
        <div className="items-center hidden w-full md:flex md:w-auto" id="navbar-cta">
          <ul className="flex flex-col font-heywow font-bold mr-10 text-black text-sm p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:ml-0">
            <li>
              <a href="#" className="block py-2 px-3 md:p-0" aria-current="page">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0">Our Work</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0">About Us</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0">Carreers</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0">Blog</a>
            </li>
          </ul>
        </div>
        <button type="button" className="text-white bg-speck-red font-bold font-heywow rounded-full px-4 py-2 text-center items-center w-40 h-14">Get In Touch</button>
        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center w-10 h-10 justify-center text-black rounded-lg md:hidden" aria-controls="navbar-cta" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
    </div>
    </div>
  </nav>

  );
};

export default NavBar;