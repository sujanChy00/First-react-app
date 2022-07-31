import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Contact() {
    return (
        <>
            
            {/* ========================= FLOATING BUTTON ========================= */}
            <a href="#top" className="top">
                <i className="fa fa-angle-up"></i>
                <i className="fa fa-angle-up angle"></i>
            </a>

            {/* ========================= HEADER ========================= */}
            <Header />
            
            {/* ========================= CONTACT SECTION ========================= */}
            <section className='contact' id='top'>
                <div className="container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.030086206542!2d85.34261931430208!3d27.685464982800898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d99470043%3A0x167d008efb47d64c!2sBroadway%20Infosys!5e0!3m2!1sen!2snp!4v1658911536367!5m2!1sen!2snp" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <Footer/>
        </>
    )
}
