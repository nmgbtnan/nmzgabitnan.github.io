import React from 'react';
import { useState } from 'react';
import '../css/tooplate-kool-form-pack.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { BsBox } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import resumeDL from '../../../public/files/resume/Resume_-_Nemuel_M_Gabitanan_Jr_-_09-08-2023.pdf';

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Router>
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
                                <span><a href="#intro" className="smoothScroll site-header-text me-4 d-none d-lg-block">Introduction</a></span>
                                <span><a href="#about" className="smoothScroll site-header-text me-4 d-none d-lg-block">About</a></span>
                                <span><a href="#contact" className="smoothScroll site-header-text me-4 d-none d-lg-block">Contact Me</a></span>
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
                                <Link to="../../../public/files/resume/Resume_-_Nemuel_M_Gabitanan_Jr_-_09-08-2023.pdf" href="#" download="Nemuel_M_Gabitanan_Jr_-_Resume.pdf" className="custom-btn custom-border-btn" target="_blank">Download CV
                                    <FaArrowRight />
                                </Link>
                            </div>
                            <Link className="bi-list offcanvas-icon" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu" />
                            <Button className="custom-btn custom-border-btn" onClick={handleShow}>
                                Menu
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <Offcanvas className="offcanvas offcanvas-end" scroll tabindex="-1" id="offcanvasMenu" show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <h1>Menu</h1>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <nav>
                        <ul>
                            <li class="nav-item">
                                <a href="#intro" className="nav-link smoothScroll">Introduction</a>
                            </li>
                            <li class="nav-item">
                                <a href="#about" className="nav-link smoothScroll">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a href="#contact" className="nav-link smoothScroll">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>
            <Routes>
                <Route />
            </Routes>
        </Router>
    );
}

export default Header;