import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import introPic from '../images/nems3.jpg';
import introVid from '../files/video1.mp4';

function Home() {
    return (
        <Router>
            <section className="hero-section d-flex justify-content-center align-items-center" id="intro">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-lg-4 col-md-4 col-8">
                            <Image src={introPic} alt="nems' Resume HTML Template" fluid />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
                            <div className="hero-text">
                                <h1 className="hero-title">👋 Nems, a Gamer / Digital Nomad</h1>
                                <Link to="/" href="#" className="email-link">
                                    nemuelmgabitananjr@gmail.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="video-wrap">
                    <video src={introVid} autoPlay muted loop className="custom-video" id="video">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <Routes>
                <Route />
            </Routes>
        </Router>
    );
}

export default Home;