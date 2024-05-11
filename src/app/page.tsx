import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import MainContent from './main';
import './globals.css';

export default function Page() {
  return (
    <div>
      <NavBar /> {}
      <main className="flex min-h-screen flex-col justify-between p-24">
        <MainContent />
      </main>
      <Footer /> {}
    </div>
  );
}