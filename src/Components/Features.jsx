import React from 'react';
import Copyright from './Copyright';
import Header from './Header';

export default function Features() {


    return (
        <>
            {/* ========================= HEADER ========================= */}
            <Header />

            {/* ========================= FLOATING BUTTON ========================= */}
            <a href="#top" className="top">
                <i className="fa fa-angle-up"></i>
                <i className="fa fa-angle-up angle"></i>
            </a>

            {/* ========================= TABS SECTION ========================= */}
            <section className="features" id='top'>
                <div className="container">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-blog" type="button" role="tab" aria-controls="pills-blog" aria-selected="false">Blog</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-business" type="button" role="tab" aria-controls="pills-business" aria-selected="false">Business</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-comingSoon-tab" data-bs-toggle="pill" data-bs-target="#pills-comingSoon" type="button" role="tab" aria-controls="pills-comingSoon" aria-selected="false" >Coming Soon</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-creative-tab" data-bs-toggle="pill" data-bs-target="#pills-creative" type="button" role="tab" aria-controls="pills-creative" aria-selected="false" >Creative</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-Ecommerce-tab" data-bs-toggle="pill" data-bs-target="#pills-Ecommerce" type="button" role="tab" aria-controls="pills-Ecommerce" aria-selected="false" >E-Commerce</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-miscellenous-tab" data-bs-toggle="pill" data-bs-target="#pills-miscellenous" type="button" role="tab" aria-controls="pills-miscellenous" aria-selected="false" >Miscellenous</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-onePage-tab" data-bs-toggle="pill" data-bs-target="#pills-onePage" type="button" role="tab" aria-controls="pills-onePage" aria-selected="false" >One Page</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-personal-tab" data-bs-toggle="pill" data-bs-target="#pills-personal" type="button" role="tab" aria-controls="pills-personal" aria-selected="false" >Personal</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-fotography-tab" data-bs-toggle="pill" data-bs-target="#pills-fotography" type="button" role="tab" aria-controls="pills-fotography" aria-selected="false" >Photography</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-portfolio-tab" data-bs-toggle="pill" data-bs-target="#pills-portfolio" type="button" role="tab" aria-controls="pills-portfolio" aria-selected="false" >Portfolio</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                            <div className="row">
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img1.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img2.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img3.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img4.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img5.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img6.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img7.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img8.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img9.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img10.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img11.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img12.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img13.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img14.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img15.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img16.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img17.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img18.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img19.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img20.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='img'>
                                        <img src="/img/shop/shop-img21.jpg" alt="" />
                                        <div className="social-icons">
                                            <i className="fa fa-shopping-cart"></i>
                                            <i className="fa fa-heart"></i>
                                            <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-blog" role="tabpanel" aria-labelledby="pills-profile-blog" tabindex="0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img13.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img14.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img15.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img16.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img17.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img18.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img19.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-business-tab" tabindex="0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img5.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img6.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img7.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img8.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img9.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img10.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img11.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-comingSoon" role="tabpanel" aria-labelledby="pills-comingSoon-tab" tabindex="0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img16.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img17.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img18.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img19.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img20.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img21.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img11.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-creative" role="tabpanel" aria-labelledby="pills-creative-tab" tabindex="0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img9.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img10.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img11.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img12.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img13.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img14.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img15.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-Ecommerce" role="tabpanel" aria-labelledby="pills-Ecommerce-tab" tabindex="0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img2.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img3.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img4.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img5.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img6.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img7.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img8.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img9.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img10.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img11.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-miscellenous" role="tabpanel" aria-labelledby="pills-miscellenous-tab" tabindex="0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img18.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img19.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img20.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img21.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img3.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img4.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img5.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img6.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-onePage" role="tabpanel" aria-labelledby="pills-onePage-tab" tabindex="0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img13.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img14.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img15.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img16.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img1.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img2.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img3.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img4.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img5.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img17.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img18.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-personal" role="tabpanel" aria-labelledby="pills-personal-tab" tabindex="0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img11.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img12.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img3.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img4.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img5.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img6.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img13.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-fotography" role="tabpanel" aria-labelledby="pills-fotography-tab" tabindex="0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img21.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img13.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img14.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img15.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img16.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img17.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img9.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img4.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-portfolio" role="tabpanel" aria-labelledby="pills-portfolio-tab" tabindex="0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img8.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img9.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img10.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img11.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img12.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img13.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img14.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img15.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className='img'>
                                            <img src="/img/shop/shop-img17.jpg" alt="" />
                                            <div className="social-icons">
                                                <i className="fa fa-shopping-cart"></i>
                                                <i className="fa fa-heart"></i>
                                                <a href="" className='btn'>Buy Now <i className="bi bi-arrow-right-circle-fill"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================= FEATURES LIST ========================= */}
            <div className="featuresList">
                <h2>Shortcodes & Components</h2>
                <div className="container">
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/star.gif" alt="" />
                            <h5>Animations</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/bell.gif" alt="" />
                            <h5>Alert Boxes</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/button.png" alt="" />
                            <h5>Buttons</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/quotes.png" alt="" />
                            <h5>Blockquotes</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/action.png" alt="" />
                            <h5>Call to Action</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/carousel.png" alt="" />
                            <h5>Carousel</h5>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/chart.png" alt="" />
                            <h5>Charts</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/client.png" alt="" />
                            <h5>Clients</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/column.png" alt="" />
                            <h5>Columns Grids</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/counter.png" alt="" />
                            <h5>Counters</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/divider.png" alt="" />
                            <h5>Dividers</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/calendar.gif" alt="" />
                            <h5>Date & Time Picker</h5>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/basketball.png" alt="" />
                            <h5>Dribble Shots</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/calendar.png" alt="" />
                            <h5>Event Calendars</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/faq.png" alt="" />
                            <h5>FAQs</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/upload.png" alt="" />
                            <h5>File Upload</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/form.png" alt="" />
                            <h5>Forms</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/flip.png" alt="" />
                            <h5>Flip-Cards</h5>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/gallery.png" alt="" />
                            <h5>Galleries</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/google.png" alt="" />
                            <h5>Google Fonts</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/heading.png" alt="" />
                            <h5>Headings</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/icons.png" alt="" />
                            <h5>Icons</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/image.png" alt="" />
                            <h5>Image Hotspot</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/instagram.png" alt="" />
                            <h5>Instagram Shots</h5>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/box.png" alt="" />
                            <h5>Info Box & Cards</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/label.png" alt="" />
                            <h5>Labels & Badges</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/lightbox.png" alt="" />
                            <h5>Lightbox</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/map.png" alt="" />
                            <h5>Maps</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/media.png" alt="" />
                            <h5>Embeded Media</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/modal.png" alt="" />
                            <h5>Modals</h5>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/navigator.png" alt="" />
                            <h5>Navigations</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/parallax.png" alt="" />
                            <h5>Parallax</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/pagination.png" alt="" />
                            <h5>Pagination</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/sub-menu.png" alt="" />
                            <h5>Page Sub-Menu</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/pie-chart.png" alt="" />
                            <h5>Pie & Skilss</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/progressbar.png" alt="" />
                            <h5>Progressbar</h5>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/starbust.png" alt="" />
                            <h5>Promo Boxes</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/coins.png" alt="" />
                            <h5>Pricing Table</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/calculator.png" alt="" />
                            <h5>Price Calculator</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/recycle.png" alt="" />
                            <h5>Process Steps</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/portfolio.png" alt="" />
                            <h5>Protfio Block</h5>
                        </div>
                    </div>
                    <div className="featureList-icons">
                        <div>
                            <img src="/img/shop/icons/switch.png" alt="" />
                            <h5>Radio & Switches</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========================= COPYRIGHT ========================= */}
            <Copyright />
        </>
    )
}
