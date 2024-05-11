import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#212129', paddingBottom: '100px'}}>
            <div className='flex justify-between p-20 mx-4 pt-2'>
                <div style={{ flex: 1, margin: '0 20px' }}>
                    <h3 style={{ color: '#83838F', fontFamily: 'HeyWow', fontWeight: 100, fontSize: '15px'}}>OUR OFFICES</h3>
                    <div>
                        <div className='mt-5' style={{ display: 'flex', flexDirection: 'row'}}>
                            <div style={{ marginRight: '20px', display: 'flex', flexDirection: 'column'}}>
                                <h3 style={{ color: '#FFF', fontFamily: 'HeyWow', fontWeight: 100, fontSize:'24px'}}>Indiana</h3>
                                <div style={{color: '#CBD3D6', fontFamily: 'Gabribaldi', marginTop: 10, fontSize: '16px'}}>
                                    <p>55 Monument Circle</p>
                                    <p>Indianopolis 46204</p>
                                    <p style={{marginTop: 20}}><a href="tel:+13175365585" style={{ textDecoration: 'underline' }}>+1 (317) 536-5585</a></p>
                                </div>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <h3 style={{ color: '#FFF', fontFamily: 'HeyWow', fontWeight: 100, fontSize: '24px'}}>Croatia</h3>
                                <div style={{color: '#CBD3D6', fontFamily: 'Gabribaldi', marginTop: 10, fontSize: '16px'}}>
                                    <p>Petračićeva 6</p>
                                    <p>10000 Zagreb</p>
                                    <p style={{marginTop: 20}}><a href="tel:+385993587050" style={{ textDecoration: 'underline'}}>+385 99 3587 050</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1, margin: '0 20px' }}>
                    <h3 style={{ color: '#83838F', fontFamily: 'HeyWow', fontWeight: 100}}>CONTACT</h3>
                    <div className='mt-5 h-10' >
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ marginRight: '20px' }}>
                                <a href="https://www.facebook.com"><img src="/facebook-app-logo 1.svg" alt="Facebook" /></a>
                            </div>
                            <div style={{ marginRight: '20px' }}>
                                <a href="https://www.linkedin.com"><img src="/linkedin-logo 1.svg" alt="LinkedIn" /></a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com"><img src="/clutch_small_logo 1.svg" alt="Instagram" /></a>
                            </div>
                        </div>
                        <div style={{color: '#CBD3D6', fontFamily: 'Gabribaldi', display: 'flex', flexDirection: 'column', alignContent: 'center', marginTop: '53px'}}> 
                            <a href='mailto:hello@speck.agency' style={{ textDecoration: 'underline', fontSize: '17px', marginBottom: '10px' }}>hello@speck.agency</a>
                            <a href='mailto:career@speck.agency' style={{ textDecoration: 'underline', fontSize: '17px' }}>career@speck.agency</a>
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1, margin: '0 20px' }}>
                    <h3 style={{ color: '#83838F', fontFamily: 'HeyWow', fontWeight: 100}}>LEGAL</h3>
                    <div className='mt-5 h-10' style={{ color: '#FFF', fontFamily: 'HeyWow', fontWeight: 10, fontSize: '15px'}}>    
                        <p><a href="/">Privacy Policy</a></p>
                        <p><a href="/">Company</a></p>
                        <p><a href="/">EU Project</a></p>
                        <p style={{color: '#CBD3D6', fontFamily: 'Gabribaldi', fontSize: '13px', marginTop: '50px'}}>&copy; 2024 Speck d.o.o.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;