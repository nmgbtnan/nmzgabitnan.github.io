import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { BsBox } from "react-icons/bs";
import '../css/tooplate-kool-form-pack.css';
import 'bootstrap/dist/css/bootstrap.css';


function Header() {
    return (
        <Router>
            <div>
                <header className="site-header">
                    <div className="container">
                        <div className="row justify-content-between">

                            <div className="col-lg-12 col-12 d-flex align-items-center">
                                <Link to="/" className="site-header-text d-flex justify-content-center align-items-center me-auto" href="#">
                                    <BsBox />
                                    <span>
                                        Nems - Portfolio
                                    </span>
                                </Link>
                                <div className="vr"></div>

                                <ul className="social-icon d-flex justify-content-center align-items-center mx-auto">
                                    <span><Link to="intro" href="" className="smoothScroll site-header-text me-4 d-none d-lg-block">Introduction</Link></span>
                                    <span><Link to="about" href="#" className="smoothScroll site-header-text me-4 d-none d-lg-block">About</Link></span>
                                    <span><Link to="contact" href="#" className="smoothScroll site-header-text me-4 d-none d-lg-block">Contact Me</Link></span>
                                    <li className="social-icon-item">
                                        <Link to="https://www.facebook.com/shirotenshiNmz/" href="#" target="_blank" className="social-icon-link" rel="noopener noreferrer"><FaFacebook /></Link>
                                    </li>

                                    <li className="social-icon-item">
                                        <Link to="https://github.com/nmgbtnan" href="#" target="_blank" className="social-icon-link" rel="noopener noreferrer"><FaGithub /></Link>
                                    </li>

                                    <li className="social-icon-item">
                                        <Link to="https://www.linkedin.com/in/nemuel-gabitanan-jr-533705276/?trk=nav_responsive_tab_profile_pic&originalSubdomain=ph" href="#" target="_blank" className="social-icon-link" rel="noopener noreferrer"><FaLinkedin /></Link>
                                    </li>
                                </ul>
                                <div>
                                    <Link to="../../files/resume/Resume_-_Nemuel_M_Gabitanan_Jr_-_09-08-2023.pdf" href="#" download className="custom-btn custom-border-btn btn" target="_blank">Download CV
                                        <FaArrowRight />
                                    </Link>
                                </div>
                                <Link className="bi-list offcanvas-icon" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu" />
                            </div>
                        </div>
                    </div>
                </header>
                <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body d-flex flex-column justify-content-center align-items-center">
                        <nav>
                            <ul>
                                <li class="nav-item">
                                    <Link to="intro" href="#" class="nav-link smoothScroll">Introduction</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="about" href="#" class="nav-link smoothScroll">About Me</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="contact" href="#" class="nav-link smoothScroll">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/" element="" />
            </Routes>
        </Router>
    );
}

export default Header;