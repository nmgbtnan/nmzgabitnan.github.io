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
    const [loadingShow, setLoadingShow] = React.useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const fileDownload = () => {
        setLoadingShow(false);
        //uncomment line below prior to server upload
        const pdfUrl = 'https://nmzgbtnanportfolio.vercel.app/Resume.pdf';
        //uncomment line below for local testing
        // const pdfUrl = 'http://localhost:3000/Resume.pdf';
        const fileName = 'Resume_-_Nemuel_M_Gabitanan_Jr.pdf';

        saveAs(pdfUrl, fileName);
        setLoadingShow(true);
    }

    return (
        <Router>
            <header className="site-header">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-12 col-12 d-flex align-items-center">
                            <a href="#intro" className="site-header-text d-flex justify-content-center align-items-center me-auto smoothScroll">
                                <BsBox />
                                <span>
                                    Nems - Portfolio
                                </span>
                            </a>
                            <div className="vr"></div>

                            <ul className="social-icon d-flex justify-content-center align-items-center mx-auto">
                                <span><a href="#intro" className="smoothScroll site-header-text me-4 d-none d-lg-block">Introduction</a></span>
                                <span><a href="#about" className="smoothScroll site-header-text me-4 d-none d-lg-block">About</a></span>
                                <span><a href="#skills" className="smoothScroll site-header-text me-4 d-none d-lg-block">Skills</a></span>
                                <span><a href="#contact" className="smoothScroll site-header-text me-4 d-none d-lg-block">Contact Me</a></span>
                                <li className="social-icon-item">
                                    <Link to="https://www.facebook.com/shirotenshiNmz/" href="#" target="_blank" className="social-icon-link" rel="noopener noreferrer" title="Facebook profile"><FaFacebook /></Link>
                                </li>
                                <li className="social-icon-item">
                                    <Link to="https://github.com/nmgbtnan" href="#" target="_blank" className="social-icon-link" rel="noopener noreferrer" title="Github profile"><FaGithub /></Link>
                                </li>
                                <li className="social-icon-item">
                                    <Link to="https://www.linkedin.com/in/nemsgabitananjr/" href="#" target="_blank" className="social-icon-link" rel="noopener noreferrer"><FaLinkedin /></Link>
                                </li>
                            </ul>
                            <div>
                                <Button onClick={fileDownload} className="custom-btn custom-border-btn resume-dl-header">
                                    <div class="spinner-border text-warning loading-icon-header align-content-start" hidden={loadingShow} role="status">
                                        <span class="visually-hidden">Loading...</span>
                                        &nbsp;
                                    </div>
                                    Download CV
                                    <FaArrowRight />
                                </Button>
                            </div>
                            &nbsp;
                            <Button className="custom-btn-bgr custom-border-btn" id="burgerbutton" onClick={handleShow}>
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
                                <a href="#intro" className="nav-link smoothScroll" onClick={handleClose}>Introduction</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link smoothScroll" onClick={handleClose}>About Me</a>
                            </li>
                            <li className="nav-item">
                                <a href="#skills" className="nav-link smoothScroll" onClick={handleClose}>Skills</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link smoothScroll" onClick={handleClose}>Contact</a>
                            </li>
                            <li className="social-icon-item">
                                <hr />
                                <span class="text-white">Stay connected: </span>
                                <br />
                                <Link to="https://www.facebook.com/shirotenshiNmz/" href="#" target="_blank" className="social-icon-link" rel="noopener noreferrer"><FaFacebook /></Link>
                                <Link to="https://github.com/nmgbtnan" href="#" target="_blank" className="social-icon-link" rel="noopener noreferrer"><FaGithub /></Link>
                                <Link to="https://www.linkedin.com/in/nemsgabitananjr/" href="#" target="_blank" className="social-icon-link" rel="noopener noreferrer"><FaLinkedin /></Link>
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