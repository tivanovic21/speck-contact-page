import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import MainContent from './main';
import './globals.css';

export default function Page() {
  return (
    <div className='overflow-x-hidden'>
      <NavBar />
      <main>
        <MainContent />
      </main>
      <div className='md:mt-44 mt-10'>
        <Footer/>
      </div>
    </div>
  );
}