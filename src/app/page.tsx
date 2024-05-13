import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import MainContent from './main';
import './globals.css';

export default function Page() {
  return (
    <div className=' overflow-x-hidden'>
      <NavBar />
      <main className='min-w-fit'>
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}