import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-speck-footer-bg pb-24'>
            <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-x-20 md:gap-x-8 md:p-20 p-10 pt-2'>
                <div className='col-span-2 md:col-span-2 flex flex-col'>
                        <h3 className=' text-speck-footer-label font-heywow text-base font-bold'>OUR OFFICES</h3>
                        <div className='grid grid-cols-2 md:gap-x-0 gap-x-12 mt-2 flex-grow'>
                            <div className='flex flex-col justify-between'>
                                <h3 className='text-white font-heywow text-2xl font-bold'>Indiana</h3>
                                <div className='text-speck-ligt-siva font-garibaldi font-light mt-3 text-base'>
                                    <p>55 Monument Circle</p>
                                    <p>Indianopolis 46204</p>
                                    <p className='mt-auto underline'><a href="tel:+13175365585">+1 (317) 536-5585</a></p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <h3 className='text-white font-heywow text-2xl font-bold'>Croatia</h3>
                                <div className='text-speck-ligt-siva font-garibaldi font-light mt-3 text-base'>
                                    <p>Petračićeva 6</p>
                                    <p>10000 Zagreb</p>
                                    <p className='mt-auto underline'><a href="tel:+385993587050">+385 99 3587 050</a></p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className='col-span-1 md:col-span-1 md:mt-0 mt-16 overflow-visible flex flex-col justify-between'>
                    <h3 className='text-speck-footer-label font-heywow text-base font-bold'>CONTACT</h3>
                    <div className='flex flex-row mt-4'>
                        <div className='mr-5'>
                            <a href="https://www.facebook.com"><img src="/facebook-app-logo 1.svg" alt="Facebook" /></a>
                        </div>
                        <div className='mr-5'>
                            <a href="https://www.linkedin.com"><img src="/linkedin-logo 1.svg" alt="LinkedIn" /></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com"><img src="/clutch_small_logo 1.svg" alt="Instagram" /></a>
                        </div>
                    </div>
                    <div className='text-speck-ligt-siva font-garibaldi font-light text-base mt-14'>
                        <a href='mailto:hello@speck.agency' className='underline text-base mb-2'>hello@speck.agency</a><br/>
                        <a href='mailto:career@speck.agency' className='underline text-base'>career@speck.agency</a>
                    </div>
                </div>
                <div className='col-span-1 md:col-span-1 md:mt-0 mt-16 flex flex-col justify-between'>
                    <h3 className='text-speck-footer-label font-heywow text-base font-bold'>LEGAL</h3>
                    <ul className='text-white font-heywow font-bold text-base'>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms of Use</a></li>
                        <li className='mb-10'><a href="/">EU Project</a></li>
                        <p className=' text-speck-ligt-siva font-garibaldi font-light text-sm'>&copy; 2024 Speck d.o.o.</p>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
