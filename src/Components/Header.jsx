import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

export default function Header() {

    // ============== SETTING USER NAME (FORM) ==============
    const [userName, setUserName] = useState("")

    // ---------- Getting UserName From Form ----------
    const run = (i) => {
        setUserName(i.target.value)
    }

    // ---------- Form Handler ----------
    const handleSubmit = (i) => {
        i.preventDefault();
        alert(`You are logged in as ${userName}`)
    }
    // ============== FORM END ==============



    // ============== DARK / LIGHT MODE TOGGLER STYLE ==============
    // light mode style
    const [myStyle1, setStyle1] = useState({
        display: "block",
        color:"#fff"
    })
    // dark mode style
    const [myStyle2, setStyel2] = useState({
        display: "none"
    })
    // MODE TOGGLER BACKGROUND STYLE 
    const [tglBg, setTglBg] = useState({
        backgroundColor: "#0F0F0F"
    })
    // ============== END ==============



    // ================== HEADER BACKGROUND STYLE ==================
    const [headerBg, setHeaderBg] = useState({
        backgroundColor: "white"
    })



    // ================== SIDE MENU TOGGLER ==================
    const [hide, show] = useState({
        transform: "translateX(100%)"
    })
    // Show
    const menuBtn = () => {
        show({
            transform: "translateX(0)"
        })
    }
    // Close
    const close = () => {
        show({
            transform: "translateX(100%)"
        })
    }
    // ================== END ==================



    // ================== PASSWORD TOGGLER ==================
    const showPwd = () => {
        let pwd = document.getElementById("password")

        if (pwd.type === "password") {
            pwd.type = "text"
        } else {
            pwd.type = "password"
        }
    }



    // ================== MODE TOGGLER CONDITIONS ==================
    const modeToggler = () => {
        if (myStyle1.display === "block") {
            setStyle1({
                display: "none"
            })
            setStyel2({
                display: "block",
                color: "#0F0F0F"
            })
            setHeaderBg({
                backgroundColor: "#000"
            })
            setTglBg({
                backgroundColor: "#fff"
            })
        } else {
            setStyle1({
                display: "block",
                color:"#fff"
            })
            setStyel2({
                display: "none"
            })
            setHeaderBg({
                backgroundColor: "#fff"
            })
            setTglBg({
                backgroundColor: "#0F0F0F"
            })
        }
    }


    return (
        <>

            {/* ========================= SIDE MENU ========================= */}
            <div className="menu" style={hide}>
                <div className='menu-header d-flex align-items-center justify-content-between'>
                    <i className="fa fa-user-circle user"></i>
                    <i className="bi bi-x close-btn" onClick={close}></i>
                </div>
                <ul className='menu-body'>
                    <li>
                        <NavLink to='/'><i className="bi bi-house-fill"></i><span>Home</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/features' href=""><i className="bi bi-fire"></i><span>FEATURES</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" ><i className="bi bi-person-bounding-box"></i><span>PORTFOLIO</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog"><i className="bi bi-card-text"></i><span>BLOG</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"><i className="bi bi-person-lines-fill"></i><span>CONTACT</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"><i className="bi bi-info-square-fill"></i><span>ABOUT</span></NavLink>
                    </li>
                </ul>
                <div className='menu-footer d-flex justify-content-around'>
                    <a href="https://www.facebook.com/sujan.chy.9210/" target='_blank'><i className="fa fa-facebook"></i></a>
                    <a href="https://github.com/sujanChy00" target='_blank'><i className="fa fa-github"></i></a>
                    <a href="https://google.com" target='_blank'><i className="fa fa-google-plus"></i></a>
                </div>
            </div>

            {/* ========================= HEADER ========================= */}
            <header style={headerBg}>
                <div className="container-lg container-fluid">
                    <div className="logo">
                        <NavLink to='/' >
                            <h3>React App</h3>
                        </NavLink>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">HOME</NavLink>
                            </li>

                            {/* ========================= DROP DOWN MENU ========================= */}
                            <li className='list'>
                                <NavLink to='/features' href="">FEATURES <i className="fa fa-angle-down"></i></NavLink>
                                <nav className='list-items'>
                                    <ul>
                                        <li><a href=""><i className="fa fa-magic"></i>Animations</a></li>
                                        <li><a href=""><i className="fa fa-paperclip"></i>Buttons</a></li>
                                        <li><a href=""><i className="fa fa-pause"></i>Carousel</a></li>
                                        <li><a href=""><i className="fa fa-area-chart"></i>Charts</a></li>
                                        <li><a href=""><i className="fa fa-users"></i>Clients</a></li>
                                        <li><a href=""><i className="fa fa-th-large"></i>Columns</a></li>
                                        <li><a href=""><i className="fa fa-clock-o"></i>Counters</a></li>
                                        <li><a href=""><i className="fa fa-ellipsis-h"></i>Read More</a></li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <a href=""><i className="fa fa-outdent"></i>Dividers</a>
                                        </li>
                                        <li>
                                            <a href=""><i className="fa fa-lightbulb-o"></i>Icons Boxes</a>
                                        </li>
                                        <li>
                                            <a href=""><i className="fa fa-picture-o"></i>Galleries</a>
                                        </li>
                                        <li>
                                            <a href=""><i className="fa fa-pencil"></i>Heading Styles</a>
                                        </li>
                                        <li>
                                            <a href=""><i className="fa fa-list-alt"></i>Icon Lists</a>
                                        </li>
                                        <li>
                                            <a href=""><i className="fa fa-tint"></i>Gradients</a>
                                        </li>
                                        <li>
                                            <a href=""><i className="fa fa-plus-square-o"></i>Item Overlays</a>
                                        </li>
                                        <li>
                                            <a href=""><i className="fa fa-pencil-square-o"></i>Form Elements</a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li><a href=""><i className="fa fa-th-list"></i>List & Cards</a></li>
                                        <li><a href=""><i className="fa fa-map"></i>Maps</a></li>
                                        <li><a href=""><i className="fa fa-play"></i>Media Embeds</a></li>
                                        <li><a href=""><i className="fa fa-arrows-alt"></i>Modal Boxes</a></li>
                                        <li><a href=""><i className="fa fa-navicon"></i>Navigations</a></li>
                                        <li><a href=""><i className="fa fa-gears"></i>Pagination</a></li>
                                        <li><a href=""><i className="fa fa-list-ul"></i>Pie & Skills</a></li>
                                        <li><a href=""><i className="fa fa-caret-square-o-up"></i>Shape Dividers</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href=""><i className="fa fa-money"></i>Pricing Boxes</a></li>
                                        <li><a href=""><i className="fa fa-thumbs-o-up"></i>Process Steps</a></li>
                                        <li><a href=""><i className="fa fa-rocket"></i>Promo Boxes</a></li>
                                        <li><a href=""><i className="fa fa-quote-left"></i>Blockqoutes</a></li>
                                        <li><a href=""><i className="fa fa-tv"></i>Responsive</a></li>
                                        <li><a href=""><i className="fa fa-folder-open"></i>Sections</a></li>
                                        <li><a href=""><i className="fa fa-facebook"></i>Social Icons</a></li>
                                        <li><a href=""><i className="fa fa-hand-pointer-o"></i>Hover Animation</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href=""><i className="fa fa-exclamation-triangle"></i>Alert Boxes</a></li>
                                        <li><a href=""><i className="fa fa-flag-o"></i>Styled Icons</a></li>
                                        <li><a href=""><i className="fa fa-table"></i>Tables</a></li>
                                        <li><a href=""><i className="fa fa-star"></i>Tabs</a></li>
                                        <li><a href=""><i className="fa fa-user"></i>Testimonials</a></li>
                                        <li><a href=""><i className="fa fa-camera"></i>Thumbnails</a></li>
                                        <li><a href=""><i className="fa fa-toggle-on"></i>Toggles</a></li>
                                        <li><a href=""><i className="fa fa-check-square-o"></i>Radio & Switches</a></li>
                                    </ul>
                                </nav>
                            </li>
                            <li>
                                <NavLink to="/portfolio" >PORTFOLIO</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog">BLOG</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">CONTACT</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">ABOUT</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-icons">
                        <ul>
                            <li>
                                <i className="fa fa-search"></i>
                            </li>
                            <li>
                                <i className="bi bi-bag-fill"></i>
                                <sup>0</sup>
                            </li>
                            <li>

                                {/* ========================= LOGIN BUTTON / MODAL ========================= */}
                                <button type="button" className="btn bg-transparent" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    <i className="bi bi-person-fill user"></i>
                                </button>

                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Sign Up</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form action="" onSubmit={handleSubmit}>
                                                    <div className='d-flex gap-3'>
                                                        <input type="text" className="form-control" placeholder='first name' name='fname' required />
                                                        <input type="text" className='form-control' placeholder='last name' name='lname' required />
                                                        <input type="text" className='form-control' placeholder='user name' name='uname' required onChange={run} />
                                                    </div>
                                                    <div className="d-flex gap-4 py-3">
                                                        <input type="email" className="form-control" placeholder='email here' name='email' required />
                                                        <div className="input-group">
                                                            <input type="password" className='form-control' placeholder='password' name='password' id='password' required />
                                                            <span className='input-group-text'><i className="fa fa-eye" onClick={showPwd}></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-3 align-items-center">
                                                        <input type="number" className="form-control" placeholder='age' name='age' min='18' max='60' required />
                                                        <input type="city" className="form-control" placeholder='city' name='city' required />
                                                        <label htmlFor="male">Male</label>
                                                        <input type="radio" id='male' name='gender' value='male' required />
                                                        <label htmlFor="female">Female</label>
                                                        <input type="radio" id='female' name='gender' value='female' required />
                                                    </div>
                                                    <button className='modal-btn mt-3'>Sign Up</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ========================= MODAL END ========================= */}
                            </li>
                            <li>
                                <div className='modeTgl' onClick={modeToggler} style={tglBg}>
                                    <i className="fa fa-lightbulb-o" style={myStyle1}></i>
                                    <i className="fa fa-moon-o" style={myStyle2}></i>
                                </div>
                            </li>
                            <li>
                                <i className="fa fa-bars" id='toggler' onClick={menuBtn}></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

        </>
    )
}
