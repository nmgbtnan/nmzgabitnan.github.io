import React, { useRef, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import aboutPicFB from '../images/nems4.webp';

function About() {
    const target = useRef(null);
    const [copied, setCopied] = useState(false);
    const copyToClipboardAbout = () => {
        navigator.clipboard.writeText('nemuelmgabitananjr@gmail.com');
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <Router>
            <section className="about section-padding" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h2 className="mb-4">This is Nems' Resume</h2>
                            <p>I am a career-shifter from a longtime Back-Office agent to a Self-studying Web Developer returning to my roots as a programmer same from college days. </p>
                            <p>Engaged in a Full-Stack Web-developer bootcamp to be refreshed and be proficient again in an assortment of technologies, including HTMl/CSS, JavaScript, PHP, MySQL, and aquired bootcamp knowledge like Bootstrap 5, Jquery, MySQLi, Ajax, React JS, and Laravel.</p>
                            <p>I am able to effectively self-manage during independent projects, as well as collaborate in a team setting due to my longtime experience as a Back-office agent.</p>
                            <ul className="mt-4 mb-5 mb-lg-0 profile-list list-unstyled">
                                <li><strong>Full Name :</strong> Nemuel M Gabitanan Jr </li>
                                <li><strong>Date of Birth:</strong> February 18, 1993</li>
                                <li><strong>Website :</strong> <Link to="https://nmzgbtnanportfolio.vercel.app/" href="#" title="Nems - Portfolio website" target="_blank">nmzgbtnanportfolio.vercel.app</Link></li>
                                <li><strong>Email :</strong> <Link to="/" href="" ref={target} onClick={copyToClipboardAbout} title="click to copy email link">nemuelmgabitananjr@gmail.com</Link></li>
                                <Overlay target={target.current} show={copied} placement="right">
                                    {(props) => (
                                        <Tooltip id="overlay-example" {...props}>
                                            Email link copied
                                        </Tooltip>
                                    )}
                                </Overlay>
                            </ul>
                        </div>
                        <div className="about-pic col-lg-4 mx-auto col-md-5 col-10 d-none d-md-block">
                            <picture>
                                {/* <source srcSet={aboutPic} className="img-fluid" type="image/webp" />
                                <source src={aboutPicFB} className="img-fluid" type="image/jpeg" alt="This is the Primary picture" /> */}
                                <Image src={aboutPicFB} alt="This is the Primary picture" fluid />
                            </picture>
                        </div>
                        <div className="image-wrap">
                            <picture className="bg-img1" />
                        </div>
                    </div>
                </div>
            </section>
            <Routes>
                <Route />
            </Routes>
        </Router>
    );
}

export default About;