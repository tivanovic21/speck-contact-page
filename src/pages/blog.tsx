import React from "react";
import Head from "next/head";
import NavBar from "../app/components/navbar";
import Footer from "../app/components/footer";
import BlogContent from "../app/components/blog";

import '../app/styles/globals.css';

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Speck</title>
        <meta name="description" content="Speck blog - Toni Ivanović" />
      </Head>
      <div>
        <NavBar />
      </div>
      <main className="min-h-screen">
        <BlogContent />
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Blog;