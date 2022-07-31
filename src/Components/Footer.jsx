import React from 'react';
import Copyright from './Copyright';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 left">
                            <ul>
                                <li>
                                    <h3>React App</h3>
                                </li>
                                <li>
                                    We believe in Simple, Creative & Flexible Design Standards.
                                </li>
                                <li>
                                    Headquarters:
                                    <var>795 Folsom Ave, Suite 600
                                        San Francisco, CA 94107</var>
                                </li>
                                <li>Phone: (1) 8547 632521</li>
                                <li>Fax: (1) 11 4752 1433</li>
                                <li> Email: suzu9050@gmail.com</li>
                            </ul>

                        </div>
                        <div className="col-md-2 col-sm-6 mid_1">
                            <ul>
                                <li>
                                    <h3>BLOGROLL</h3>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i>
                                    Documentation
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i>
                                    Feedback
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i>
                                    Plugins
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i>
                                    support Forums
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i>
                                    Themes
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i>
                                    Canvas Blog
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i>
                                    Canvas Planet
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 pt-md-0 pt-sm-4 pt-5 mid_2">
                            <ul>
                                <li>
                                    <h3>RECENT POSTS</h3>
                                </li>
                                <li>
                                    <a href="">Lorem ipsum dolor sit amet, consectetur</a>
                                    <code>10th July 2021</code>
                                </li>
                                <li>
                                    <a href="">Elit Assumenda vel amet dolorum quasi</a>
                                    <code>10th July 2021</code>
                                </li>
                                <li>
                                    <a href="">Debitis nihil placeat, illum est nisi</a>
                                    <code>10th July 2021</code>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6 pt-md-0 pt-sm-4 pt-5 right">
                            <ul>
                                <li className='d-flex align-items-center justify-content-sm-between justify-content-around'>
                                    <div>
                                        <h3 className="timer count-title count-number" data-to="15065421" data-speed="5000"></h3>
                                        <code>TOTAL DOWNLOADS</code>
                                    </div>
                                    <div >
                                        <h3 className="timer count-title count-number" data-to="18465" data-speed="5000"></h3>
                                        <code>CLIENTS</code>
                                    </div>
                                </li>
                                <li>Subscribe to Our Newsletter to get Important News, Amazing Offers & Inside Scoops:     
                                </li>
                                <li>
                                    <form action="https://google.com" className="input-group" target='_blank'>
                                        <span className="input-group-text"><i className="fa fa-paper-plane-o"></i></span>
                                        <input type="email" className="form-control" name="q" placeholder='email here' required/>
                                        <button className="input-group-text">Subscribe</button>
                                    </form>
                                </li>
                                <li className='d-flex align-items-center justify-content-around copyright-links'>
                                    <div>
                                        <i className="fa fa-facebook"></i>
                                        <span>Like us <br /> on Facebook</span>
                                    </div>
                                    <div>
                                        <i className="fa fa-rss"></i>
                                        <span>Subscribe <br /> to RSS Feeds</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <Copyright/>
        </>
    )
}
