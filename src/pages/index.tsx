import React from 'react';
import Head from 'next/head';
import NavBar from '../app/components/navbar';
import Footer from '../app/components/footer';
import ContactForm from '../app/components/contactForm';
import '../app/styles/globals.css';

export default function Page() {
  return (
    <>
    <Head>
      <title>Contact Us | Speck</title>
      <meta name='description' content='Speck contact form - Toni Ivanović'/>
    </Head>
      <div className='overflow-x-hidden'>
        <NavBar />
        <main>
          <ContactForm />
        </main>
        <div className='md:mt-44 mt-10'>
          <Footer/>
        </div>
      </div>
    </>
  );
}