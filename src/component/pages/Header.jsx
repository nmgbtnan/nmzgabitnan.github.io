import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { saveAs } from 'file-saver';
import { BsBox } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const fileDownload = () => {
        const pdfUrl = 'http://localhost:3000/Resume.pdf';
        const fileName = 'Resume_-_Nemuel_M_Gabitanan_Jr.pdf';

        saveAs(pdfUrl, fileName);
    }

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
                                <Button onClick={fileDownload} className="custom-btn custom-border-btn">Download CV
                                    <FaArrowRight />
                                </Button>
                            </div>
                            <Button className="custom-btn custom-border-btn" id="burgerbutton" onClick={handleShow}>
                                <GiHamburgerMenu />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <Offcanvas scroll tabindex="-1" id="offcanvasMenu" show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <nav>
                        <ul>
                            <li className="nav-item">
                                <a href="#intro" className="nav-link smoothScroll">Introduction</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link smoothScroll">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link smoothScroll">Contact</a>
                            </li>
                            <li className="social-icon-item">
                                <hr />
                                <span class="text-white">Stay connected: </span>
                                <br />
                                <Link to="https://www.facebook.com/shirotenshiNmz/" href="#" target="_blank" className="social-icon-link" rel="noopener noreferrer"><FaFacebook /></Link>
                                <Link to="https://github.com/nmgbtnan" href="#" target="_blank" className="social-icon-link" rel="noopener noreferrer"><FaGithub /></Link>
                                <Link to="https://www.linkedin.com/in/nemuel-gabitanan-jr-533705276/?trk=nav_responsive_tab_profile_pic&originalSubdomain=ph" href="#" target="_blank" className="social-icon-link" rel="noopener noreferrer"><FaLinkedin /></Link>
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