import React, {useState, useRef, useEffect} from "react";
import "../styles/globals.css";

const Blog = () => {
    return (
        <main className="md:p-24 p-5 min-h-screen">
            <div className="flex md:flex-row flex-col justify-between md:items-center md:mt-10">
                <h1 className="md:text-6xl text-5xl font-heywow font-bold">Specks of Knowledge
                    <span className="text-speck-red">.</span>
                </h1>
                <div className="text-xl font-poppins font-light md:w-96 md:mt-0 mt-10">
                    <section>
                        Explore our selection of stories, opinions and guides about business, tech, 
                        investments and corporate innovation.
                    </section>
                </div>
            </div>

            <div className="md:mt-20 mt-10 items-center">
                <div className="overflow-x-auto mt-3">
                    <div className="flex flex-row md:w-full items-center min-w-fit md:gap-0 gap-2">
                        <button type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:min-w-1/6 w-max h-auto p-1 md:mr-2 mb-2`}>ALL</button>
                        <button type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:min-w-1/6 w-max h-auto p-1 md:mr-2 mb-2`}>INSIGHTS</button>
                        <button type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:min-w-1/6 w-max h-auto p-1 md:mr-2 mb-2`}>AI</button>
                        <button type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:min-w-1/6 w-max h-auto p-1 md:mr-2 mb-2`}>DIGITAL TRANSFORMATION</button>
                        <button type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:min-w-1/6 w-max h-auto p-1 md:mr-2 mb-2`}>PRODUCT DEVELOPMENT</button>
                        <button type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:min-w-1/6 w-max h-auto p-1 md:mr-2 mb-2`}>DESIGN</button>
                        <button type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:min-w-1/6 w-max h-auto p-1 md:mr-2 mb-2`}>CULTURE</button>
                    </div>
                </div>
            </div>

            {/* MAIN */}
            <div className="flex md:flex-row flex-col items-center md:mt-10 mt-5">
                <img id="main-img" src="/blog-main-placeholder.png" alt="Highlighted blog post" className="md:h-96 md:w-auto h-56 w-auto overflow-visible"/>

                <div className="flex flex-col md:ml-10 md:h-96 md:w-1/2 h-auto justify-around">
                    <div className="flex flex-row items-center md:mt-0 mt-5">
                        <button id="main-cat" type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:min-w-1/6 w-max h-auto p-1 md:mr-2 mb-2`}>AI</button>
                        <p id="main-read" className="md:text-base text-sm font-poppins font-bold ml-3 md:ml-0">8 min read</p>
                    </div>
                    <h1 id="main-title" className="md:text-5xl text-2xl font-heywow font-bold md:mt-0 mt-3 leading-normal">Why you should think about implementing AI?</h1>
                    <section id="main-section" className="md:text-xl text-base font-poppins font-light mt-3 md:w-8/12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua.
                    </section>
                    <h3 id="main-auth" className="md:text-base text-sm font-poppins font-bold mt-3">Jelena Šverko · Jan 26, 2024</h3>
                </div>
            </div>

            {/* BLOGS */}
            <div className="flex md:flex-row flex-col md:mt-10 mt-5 justify-between">
                <div id="blog1">
                    <img id="blog1" src="/blog-gray-placeholder.png" alt="blog1" className="md:h-60 md:w-96 h-56 w-auto"/>
                    <div className="flex flex-row items-center mt-5">
                        <button id="blog1-cat" type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:w-1/6 w-max h-auto p-1 md:mr-2 mb-2`}>AI</button>
                        <p id="blog1-read" className="md:text-base text-sm font-poppins font-bold ml-3 md:ml-0">8 min read</p>
                    </div>
                    <div className="md:w-96 w-80">
                        <h1 id="blog1-title" className="md:text-2xl text-xl font-heywow font-bold">Why you should think about implementing AI</h1>
                        <section id="blog1-section" className="md:text-xl text-base font-poppins font-light mt-3 md:w-8/12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.
                        </section>
                        <h3 id="blog1-auth" className="md:text-base text-sm font-poppins font-bold mt-3">Jelena Šverko · Jan 26, 2024</h3>
                    </div>
                </div>

                <div id="blog2">
                    <img id="blog2" src="/blog-gray-placeholder.png" alt="blog2" className="md:h-60 md:w-96 h-56 w-auto"/>
                    <div className="flex flex-row items-center mt-5">
                        <button id="blog2-cat" type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:w-1/6 w-max h-auto p-1 md:mr-2 mb-2`}>AI</button>
                        <p id="blog2-read" className="md:text-base text-sm font-poppins font-bold ml-3 md:ml-0">8 min read</p>
                    </div>
                    <div className="md:w-96 w-80">
                        <h1 id="blog2-title" className="md:text-2xl text-xl font-heywow font-bold">Why you should think about implementing AI</h1>
                        <section id="blog2-section" className="md:text-xl text-base font-poppins font-light mt-3 md:w-8/12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.
                        </section>
                        <h3 id="blog2-auth" className="md:text-base text-sm font-poppins font-bold mt-3">Jelena Šverko · Jan 26, 2024</h3>
                    </div>
                </div>

                <div id="blog3">
                    <img id="blog3" src="/blog-gray-placeholder.png" alt="blog3" className="md:h-60 md:w-96 h-56 w-auto"/>
                    <div className="flex flex-row items-center mt-5">
                        <button id="blog3-cat" type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:w-1/6 w-max h-auto p-1 md:mr-2 mb-2`}>AI</button>
                        <p id="blog3-read" className="md:text-base text-sm font-poppins font-bold ml-3 md:ml-0">8 min read</p>
                    </div>
                    <div className="md:w-96 w-80">
                        <h1 id="blog3-title" className="md:text-2xl text-xl font-heywow font-bold">Why you should think about implementing AI</h1>
                        <section id="blog3-section" className="md:text-xl text-base font-poppins font-light mt-3 md:w-8/12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.
                        </section>
                        <h3 id="blog3-auth" className="md:text-base text-sm font-poppins font-bold mt-3">Jelena Šverko · Jan 26, 2024</h3>
                    </div>
                </div>
            </div>

            {/* INSIGHTS */}
            <div className="bg-gray-200 md:mt-10 mt-5 w-full rounded-xl justify-between md:px-10 px-3">
                <div className="relative pt-5">
                    <p className="text-white md:text-10xl text-7xl font-black font-heywow text-opacity-85 -z-10">Insights</p>
                    <h1 className="absolute text-black font-bold font-heywow md:text-6xl text-4xl md:inset-x-10 md:inset-y-24 z-10 inset-y-5 inset-x-2 pt-5 md:pt-0">Insights</h1>
                </div>

                <div className="flex flex-col md:flex-row md:gap-5 md:mt-10 mt-5 justify-around">
                    <div id="blog1-ins" className="md:w-1/3 md:mt-0 mt-5 flex flex-col items-start">
                    <img src="/blog-gray-placeholder.png" alt="blog1-ins" className="md:h-60 md:w-96 h-56 w-auto" />
                    <div className="flex flex-row items-center mt-5">
                        <button id="blog1-ins" type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:w-10 w-max h-auto p-1 md:mr-2 mb-2`}>AI</button>
                        <p id="blog1-ins-read" className="md:text-base text-sm font-poppins font-bold ml-3 md:ml-0">8 min read</p>
                    </div>
                    <div className="md:w-96 w-80">
                        <h1 id="blog1-ins-title" className="md:text-2xl text-lg font-heywow font-bold">Why you should think about implementing AI</h1>
                        <section id="blog1-ins-section" className="md:text-xl text-base font-poppins font-light mt-3 md:w-8/12 w-4/5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </section>
                        <h3 id="blog1-ins-auth" className="md:text-base text-sm font-poppins font-bold mt-3">Jelena Šverko · Jan 26, 2024</h3>
                    </div>
                    </div>

                    <div id="blog2-ins" className="md:w-1/3 md:mt-0 mt-10 flex flex-col items-start">
                    <img src="/blog-gray-placeholder.png" alt="blog2-ins" className="md:h-60 md:w-96 h-56 w-auto" />
                    <div className="flex flex-row items-center mt-5">
                        <button id="blog2-ins" type="button" className={` border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:w-10 w-max h-auto p-1 md:mr-2 mb-2`}>AI</button>
                        <p id="blog2-ins-read" className="md:text-base text-sm font-poppins font-bold ml-3 md:ml-0">8 min read</p>
                    </div>
                    <div className="md:w-96 w-80">
                        <h1 id="blog2-ins-title" className="md:text-2xl text-lg font-heywow font-bold">Why you should think about implementing AI</h1>
                        <section id="blog2-ins-section" className="md:text-xl text-base font-poppins font-light mt-3 md:w-8/12 w-4/5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </section>
                        <h3 id="blog2-ins-auth" className="md:text-base text-sm font-poppins font-bold mt-3">Jelena Šverko · Jan 26, 2024</h3>
                    </div>
                    </div>

                    <div id="blog3-ins" className="md:w-1/3 md:mt-0 mt-10 flex flex-col items-start">
                    <img src="/blog-gray-placeholder.png" alt="blog3" className="md:h-60 md:w-96 h-56 w-auto" />
                    <div className="flex flex-row items-center mt-5">
                        <button id="blog3-ins" type="button" className="border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:w-10 w-max h-auto p-1 md:mr-2 mb-2">AI</button>
                        <p id="blog3-ins-read" className="md:text-base text-sm font-poppins font-bold ml-3 md:ml-0">8 min read</p>
                    </div>
                    <div className="md:w-96 w-80">
                        <h1 id="blog3-ins-title" className="md:text-2xl text-lg font-heywow font-bold">Why you should think about implementing AI</h1>
                        <section id="blog3-ins-section" className="md:text-xl text-base font-poppins font-light mt-3 md:w-8/12 w-4/5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </section>
                        <h3 id="blog3-ins-auth" className="md:text-base text-sm font-poppins font-bold mt-3">Jelena Šverko · Jan 26, 2024</h3>
                    </div>
                    </div>
                </div>

                <div className="flex md:justify-end jusstify-start mt-10 pb-10">
                    <button className="bg-speck-red text-white font-bold py-2 px-4 rounded-full">
                        More &rarr;
                    </button>
                </div>
            </div>

            {/* DIGITAL TRANSFORMATION */}
            <div className="md:mt-10 mt-5 w-full rounded-xl justify-between md:px-10 px-3 relative overflow-hidden">
                <div className="relative pt-5">
                    <p className="text-speck-ligt-siva md:text-10xl text-7xl font-black font-heywow text-opacity-20 -z-10 md:whitespace-nowrap overflow-hidden" style={{ lineHeight: '1' }}>
                        Digital transformation
                    </p>
                    <h1 className="absolute text-black font-bold font-heywow md:text-6xl text-4xl md:inset-x-10 md:inset-y-24 inset-y-10 inset-x-2 pt-5 md:pt-0">
                        Digital transformation
                    </h1>
                </div>

            <div className="flex flex-col md:flex-row md:gap-5 md:mt-10 mt-10 justify-around">
                <div id="blog1-ins" className="md:w-1/3 md:mt-0 mt-5 flex flex-col items-start">
                <img src="/blog-gray-placeholder.png" alt="blog1-ins" className="md:h-60 md:w-96 h-56 w-auto" />
                <div className="flex flex-row items-center mt-5">
                    <button id="blog1-ins" type="button" className="border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:w-10 w-max h-auto p-1 md:mr-2 mb-2">AI</button>
                    <p id="blog1-ins-read" className="md:text-base text-sm font-poppins font-bold ml-3 md:ml-0">8 min read</p>
                </div>
                <div className="md:w-96 w-80">
                    <h1 id="blog1-ins-title" className="md:text-2xl text-lg font-heywow font-bold">Why you should think about implementing AI</h1>
                    <section id="blog1-ins-section" className="md:text-xl text-base font-poppins font-light mt-3 md:w-8/12 w-4/5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </section>
                    <h3 id="blog1-ins-auth" className="md:text-base text-sm font-poppins font-bold mt-3">Jelena Šverko · Jan 26, 2024</h3>
                </div>
                </div>

                <div id="blog2-ins" className="md:w-1/3 md:mt-0 mt-10 flex flex-col items-start">
                <img src="/blog-gray-placeholder.png" alt="blog2-ins" className="md:h-60 md:w-96 h-56 w-auto" />
                <div className="flex flex-row items-center mt-5">
                    <button id="blog2-ins" type="button" className="border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:w-10 w-max h-auto p-1 md:mr-2 mb-2">AI</button>
                    <p id="blog2-ins-read" className="md:text-base text-sm font-poppins font-bold ml-3 md:ml-0">8 min read</p>
                </div>
                <div className="md:w-96 w-80">
                    <h1 id="blog2-ins-title" className="md:text-2xl text-lg font-heywow font-bold">Why you should think about implementing AI</h1>
                    <section id="blog2-ins-section" className="md:text-xl text-base font-poppins font-light mt-3 md:w-8/12 w-4/5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </section>
                    <h3 id="blog2-ins-auth" className="md:text-base text-sm font-poppins font-bold mt-3">Jelena Šverko · Jan 26, 2024</h3>
                </div>
                </div>

                <div id="blog3-ins" className="md:w-1/3 md:mt-0 mt-10 flex flex-col items-start">
                <img src="/blog-gray-placeholder.png" alt="blog3-ins" className="md:h-60 md:w-96 h-56 w-auto" />
                <div className="flex flex-row items-center mt-5">
                    <button id="blog3-ins" type="button" className="border-speck-ligt-siva border-solid border-2 rounded-full font-heywow text-sm font-bold md:w-10 w-max h-auto p-1 md:mr-2 mb-2">AI</button>
                    <p id="blog3-ins-read" className="md:text-base text-sm font-poppins font-bold ml-3 md:ml-0">8 min read</p>
                </div>
                <div className="md:w-96 w-80">
                    <h1 id="blog3-ins-title" className="md:text-2xl text-lg font-heywow font-bold">Why you should think about implementing AI</h1>
                    <section id="blog3-ins-section" className="md:text-xl text-base font-poppins font-light mt-3 md:w-8/12 w-4/5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </section>
                    <h3 id="blog3-ins-auth" className="md:text-base text-sm font-poppins font-bold mt-3">Jelena Šverko · Jan 26, 2024</h3>
                </div>
                </div>
            </div>

            <div className="flex md:justify-end justify-start mt-10 pb-10">
                <button className="bg-speck-red text-white font-bold py-2 px-4 rounded-full">
                More &rarr;
                </button>
            </div>
            </div>

        </main>
    )
};

export default Blog;