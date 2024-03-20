import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import introPicFB from '../images/nems3.webp';
import introVid from '../files/video1.mp4';

function Home() {
    const target = useRef(null);
    const [copied, setCopied] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText('nemuelmgabitananjr@gmail.com');
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <Router>
            <section className="hero-section d-flex justify-content-center align-items-center" id="intro">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-lg-4 col-md-4 col-sm-5 col-xs-4 col-8">
                            <picture>
                                {/* <source srcSet={introPic} className="img-fluid" type="image/webp" />
                                <source srcSet={introPicFB} className="img-fluid" type="image/jpeg" alt="nems' Resume HTML Template" /> */}
                                <Image src={introPicFB} alt="nems' Resume HTML Template" fluid />
                            </picture>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
                            <div className="hero-text">
                                <h1 className="hero-title">👋 Nems, a Gamer / Digital Nomad</h1>
                                {/* <Button ref={target} className="email-link" onClick={copyToClipboard}>
                                    nemuelmgabitananjr@gmail.com
                                </Button> */}
                                <Link to="/" href="" ref={target} className="email-link" onClick={copyToClipboard} title="click to copy this email link">
                                    nemuelmgabitananjr@gmail.com
                                </Link>
                                <Overlay target={target.current} show={copied} placement="right">
                                    {(props) => (
                                        <Tooltip id="overlay-example" {...props}>
                                            Email link copied
                                        </Tooltip>
                                    )}
                                </Overlay>
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