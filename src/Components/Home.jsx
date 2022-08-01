import React from 'react';
import Header from './Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

export default function Home() {

    

    return (
        <>
            {/* ========================= HEADER ========================= */}
            <Header />

            {/* ========================= FLOATING BUTTON ========================= */}
            <div className="buy-btn">
                <a href="">
                    <i className="fa fa-leaf"></i><i className="fa fa-shopping-cart"></i>
                </a>
            </div>


            {/* ========================= TOP BUTTON ========================= */}
            <a href="#top" className="top">
                <i className="fa fa-angle-up"></i>
                <i className="fa fa-angle-up angle"></i>
            </a>


            {/* ========================= MAIN / BANNER ========================= */}
            <main id="top">
                <section className="banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-7 text-md-left text-center">
                                <h1>The Most Creatively Designed Template In Current Days</h1>
                                <a className='btn' href="">View Demo</a>
                            </div>
                            <div className="col-md-5">
                                <img src="/img/banner-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>


            {/* ========================= DEMO PAGES ========================= */}
            <section className="demo">
                <div className="container demo-container">
                    <div className="row">
                        <div className="col-md-3 col-5 mx-md-0 mx-auto pt-md-0 pt-3 demo-content">
                            <div>
                                <h2 className="timer count-title count-number" data-to="04" data-speed="5000"></h2>
                                <h3>HOME PAGE</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-5 mx-md-0 mx-auto pt-md-0 pt-3 demo-content">
                            <div>
                                <h2 className="timer count-title count-number" data-to="14" data-speed="5000"></h2>
                                <h3>INNER PAGE</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-5 mx-md-0 mx-auto pt-md-0 pt-3 demo-content">
                            <div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <h2 className="timer count-title count-number" data-to="93" data-speed="5000"></h2>
                                    <h3 className='fs-2 ps-2'>%</h3>
                                </div>
                                <h3>PAGE SPEED</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-5 mx-md-0 mx-auto pt-md-0 pt-3 demo-content">
                            <div>
                                <h2>24/7</h2>
                                <h3>FAST SUPPORT</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="home-demo">
                    <div className="container">
                        <h1>DEMO</h1>
                        <h2>HOME DEMO</h2>
                        <p>Choose one of styles or cutomize easily your site following your ideas. More demos are coming soon.</p>
                        <div className='home-demo-img'>
                            <div className='demoPage'><img src="/img/demoPages.png" alt="" /></div>
                            <div className='img'><img src="/img/demo-img1.png" alt="" /></div>
                            <div className='img'><img src="/img/demo-img2.png" alt="" /></div>
                            <div className='img'><img src="/img/demo-img3.png" alt="" /></div>
                            <div className='img'><img src="/img/demo-img4.png" alt="" /></div>
                        </div>
                    </div>
                </section>

                <section className="inner-demo">
                    <div className="container">
                        <h2>INNER DEMO</h2>
                        <p>Choose one of styles or cutomize easily your site following your ideas. More demos are coming soon.</p>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            // navigation={true}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                    // navigation: false
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                    // navigation: false
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                    // navigation: false
                                },
                            }}
                            modules={[Autoplay, FreeMode, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src="/img/inner-page1.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/img/inner-page2.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/img/inner-page3.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/img/inner-page4.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/img/inner-page5.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img src="/img/inner-page6.png" alt="" /></SwiperSlide>
                        </Swiper>
                        <NavLink className='btn' to="/features">View all pages</NavLink>
                    </div>
                </section>
            </section>


            {/* ========================= FEEDBACKS SECTION ========================= */}
            <section className="feedbacks">
                <div className="container">
                    <h2>But that's just scratching the surface. Check out these other <span> incredible Cornerstone features.</span></h2>
                    <h1>↓</h1>
                    <div className="row align-items-center">
                        <div className="col-md-3 col-6 offset-md-3">
                            <h3>Responsive Styling</h3>
                            <p>Take complete control of your Element styles from A-Z...and mobile to desktop!</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <svg className='svg a' viewBox='0 0 500 500' x='0' y='0' xml-space='preserve' >
                                <path d="M 261.7,380.3 C 204.7,399.8 154.1,482.7 98.91,458.5 26.64,426.9 13.2,309.8 29.35,232.6 43.76,163.6 101.4,97.37 167.4,72.34 248,41.97 422.1,-2.762 423.4,107.7 424.6,218.1 507.5,272.4 464.3,336.7 425.7,394.2 327,357.9 261.7,380.3 Z"></path>
                            </svg>
                            <img src="/img/feedbacks-img1.png" alt="" data-aos="zoom-out" />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-3 col-6 offset-md-3">
                            <h3>Native Sliders</h3>
                            <p>Build incredible native sliders without 3rd party plugins or additional coding cruft!</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <svg className='svg b' viewBox='0 0 500 500' x='0' y='0' xml-space='preserve' >
                                <path d="M 261.7,380.3 C 204.7,399.8 154.1,482.7 98.91,458.5 26.64,426.9 13.2,309.8 29.35,232.6 43.76,163.6 101.4,97.37 167.4,72.34 248,41.97 422.1,-2.762 423.4,107.7 424.6,218.1 507.5,272.4 464.3,336.7 425.7,394.2 327,357.9 261.7,380.3 Z"></path>
                            </svg>
                            <img src="/img/feedbacks-img2.png" alt="" data-aos="zoom-out" />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-3 col-6 offset-md-3">
                            <h3>Undo / Redo</h3>
                            <p>You know that sinking feeling when you delete something on accident? Worry no more!</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <svg className='svg c' viewBox='0 0 500 500' x='0' y='0' xml-space='preserve' >
                                <path d="M 261.7,380.3 C 204.7,399.8 154.1,482.7 98.91,458.5 26.64,426.9 13.2,309.8 29.35,232.6 43.76,163.6 101.4,97.37 167.4,72.34 248,41.97 422.1,-2.762 423.4,107.7 424.6,218.1 507.5,272.4 464.3,336.7 425.7,394.2 327,357.9 261.7,380.3 Z"></path>
                            </svg>
                            <img src="/img/feedbacks-img3.png" alt="" data-aos="zoom-out" />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-3 col-6 offset-md-3">
                            <h3>Dark Mode</h3>
                            <p>Easy on the eyes, this slick new interface option will quickly become your favorite.</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <svg className='svg d' viewBox='0 0 500 500' x='0' y='0' xml-space='preserve' >
                                <path d="M 261.7,380.3 C 204.7,399.8 154.1,482.7 98.91,458.5 26.64,426.9 13.2,309.8 29.35,232.6 43.76,163.6 101.4,97.37 167.4,72.34 248,41.97 422.1,-2.762 423.4,107.7 424.6,218.1 507.5,272.4 464.3,336.7 425.7,394.2 327,357.9 261.7,380.3 Z"></path>
                            </svg>
                            <img src="/img/feedbacks-img4.png" alt="" data-aos="zoom-out" />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-3 col-6 offset-md-3">
                            <h3>Dynamic Content</h3>
                            <p>Build highly custom functionality with native support for dynamic content.</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <svg className='svg e' viewBox='0 0 500 500' x='0' y='0' xml-space='preserve' >
                                <path d="M 261.7,380.3 C 204.7,399.8 154.1,482.7 98.91,458.5 26.64,426.9 13.2,309.8 29.35,232.6 43.76,163.6 101.4,97.37 167.4,72.34 248,41.97 422.1,-2.762 423.4,107.7 424.6,218.1 507.5,272.4 464.3,336.7 425.7,394.2 327,357.9 261.7,380.3 Z"></path>
                            </svg>
                            <img src="/img/feedbacks-img5.png" alt="" data-aos="zoom-out" />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-3 col-6 offset-md-3">
                            <h3>Role Manager</h3>
                            <p>Want a client to edit text only? Need a team member to only have access to certain Elements? Now you can!</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <svg className='svg f' viewBox='0 0 500 500' x='0' y='0' xml-space='preserve' >
                                <path d="M 261.7,380.3 C 204.7,399.8 154.1,482.7 98.91,458.5 26.64,426.9 13.2,309.8 29.35,232.6 43.76,163.6 101.4,97.37 167.4,72.34 248,41.97 422.1,-2.762 423.4,107.7 424.6,218.1 507.5,272.4 464.3,336.7 425.7,394.2 327,357.9 261.7,380.3 Z"></path>
                            </svg>
                            <img src="/img/feedbacks-img6.png" alt="" data-aos="zoom-out" />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-3 col-6 offset-md-3">
                            <h3>Custom Workspace</h3>
                            <p>Vertical or horizontal? Docked or undocked? Big or small? Your workspace fits your workflow.</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <svg className='svg g' viewBox='0 0 500 500' x='0' y='0' xml-space='preserve' >
                                <path d="M 261.7,380.3 C 204.7,399.8 154.1,482.7 98.91,458.5 26.64,426.9 13.2,309.8 29.35,232.6 43.76,163.6 101.4,97.37 167.4,72.34 248,41.97 422.1,-2.762 423.4,107.7 424.6,218.1 507.5,272.4 464.3,336.7 425.7,394.2 327,357.9 261.7,380.3 Z"></path>
                            </svg>
                            <img src="/img/feedbacks-img7.png" alt="" data-aos="zoom-out" />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-3 col-6 offset-md-3">
                            <h3>Global Blocks</h3>
                            <p>Create once, place anywhere. Changes made to global blocks update sitewide with one click.</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <svg className='svg h' viewBox='0 0 500 500' x='0' y='0' xml-space='preserve' >
                                <path d="M 261.7,380.3 C 204.7,399.8 154.1,482.7 98.91,458.5 26.64,426.9 13.2,309.8 29.35,232.6 43.76,163.6 101.4,97.37 167.4,72.34 248,41.97 422.1,-2.762 423.4,107.7 424.6,218.1 507.5,272.4 464.3,336.7 425.7,394.2 327,357.9 261.7,380.3 Z"></path>
                            </svg>
                            <img src="/img/feedbacks-img8.png" alt="" data-aos="zoom-out" />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-3 col-6 offset-md-3">
                            <h3>Simple Mode</h3>
                            <p>Distill the power of our most full-featured Elements down to their most essential, very approachable controls.</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <svg className='svg i' viewBox='0 0 500 500' x='0' y='0' xml-space='preserve' >
                                <path d="M 261.7,380.3 C 204.7,399.8 154.1,482.7 98.91,458.5 26.64,426.9 13.2,309.8 29.35,232.6 43.76,163.6 101.4,97.37 167.4,72.34 248,41.97 422.1,-2.762 423.4,107.7 424.6,218.1 507.5,272.4 464.3,336.7 425.7,394.2 327,357.9 261.7,380.3 Z"></path>
                            </svg>
                            <img src="/img/feedbacks-img9.png" alt="" data-aos="zoom-out" />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-3 col-6 offset-md-3">
                            <h3>Template Manager</h3>
                            <p>Take design assets with you thanks to our incredible new templating system. +1 for portability!</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <svg className='svg j' viewBox='0 0 500 500' x='0' y='0' xml-space='preserve' >
                                <path d="M 261.7,380.3 C 204.7,399.8 154.1,482.7 98.91,458.5 26.64,426.9 13.2,309.8 29.35,232.6 43.76,163.6 101.4,97.37 167.4,72.34 248,41.97 422.1,-2.762 423.4,107.7 424.6,218.1 507.5,272.4 464.3,336.7 425.7,394.2 327,357.9 261.7,380.3 Z"></path>
                            </svg>
                            <img src="/img/feedbacks-img10.png" alt="" data-aos="zoom-out" />
                        </div>
                    </div>


                </div>
            </section>

            {/* ========================= CLIENTS SECTION ========================= */}
            <div className="container clients">
                <div className="row text-center">
                    <div className="col-md-4 col-10 mx-md-0 mx-auto">
                        <div>
                            <h4>“</h4>
                            <p>I've been using React for many many years and I can't recommend it enough.
                            </p>
                            <h3>ricavaster</h3>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-md-0 mx-auto pt-md-0 pt-5">
                        <div>
                            <h4>“</h4>
                            <p>I LOVE React. There is no other library or framework I'll ever use.
                            </p>
                            <h3>sajan kafle</h3>
                        </div>
                    </div>
                    <div className="col-md-4 col-10 mx-md-0 mx-auto pt-md-0 pt-5">
                        <h4>“</h4>
                        <p>This is a great library! Very extensible and it allows for many granular customizations.</p>
                        <h3>reedentertainment</h3>
                    </div>
                </div>
            </div>
            {/* ========================= FOOTER ========================= */}
            <Footer />
        </>
    )
}
