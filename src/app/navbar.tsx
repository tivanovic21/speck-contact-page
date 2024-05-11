"use client";
import React, {useState} from 'react';

const NavBar = () => {

  return(
    <header className="flex flex-col sm:flex-row justify-between items-center p-20 mx-4 pt-2">
      <img src="/logo.svg" alt="Logo" className="h-8" />
      <nav className='flex flex-row ml-auto'>
        <ul className={`flex space-x-5`}>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Our Work</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
      </nav>
      <button className="bg-red-500 text-white px-4 py-2 rounded-full ml-4">Get In Touch</button> 
    </header>
  );
};

export default NavBar;