import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TailSpin } from 'react-loading-icons';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
            </Modal.Header>
            <Modal.Body>
                <p>Email Successfully sent. <br />
                    Thank you for submitting your message. We will get back to you soon!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="custom-btn custom-border-btn" >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Contact() {
    const form = useRef();
    const [modalShow, setModalShow] = React.useState(false);
    const [loadingShow, setLoadingShow] = React.useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const formEmailReset = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    const handleNameChange = (event) => {
        const value = event.target.value;
        if (/^[a-zA-Z0-9@.\s-]*$/.test(value)) {
            setName(value);
        }
    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        if (/^[a-zA-Z0-9@.-]*$/.test(value)) {
            setEmail(value);
        }
    };

    const handleMessageBoxChange = (event) => {
        const value = event.target.value;
        setMessage(value);
    };


    const sendEmail = (e) => {
        setLoadingShow(false);
        e.preventDefault();

        emailjs
            .sendForm('service_jwhtd7g', 'template_4r0teak', form.current, {
                publicKey: 'MJKkIayz2sHG9UG4R',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setModalShow(true);
                    setLoadingShow(true);
                    formEmailReset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setLoadingShow(true);
                },
            );
    };

    return (
        <Router>
            <section className="contact section-padding" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <form ref={form} onSubmit={sendEmail} action="#" method="get" className="contact-form webform" id="contact-form">

                                <div className="form-group d-flex flex-column-reverse">
                                    <input type="text" className="form-control" maxLength={50} name="cf-name" id="cf-name" placeholder="Your Name" value={name} onChange={handleNameChange} />

                                    <label for="cf-name" className="webform-label">Full Name</label>
                                </div>

                                <div className="form-group d-flex flex-column-reverse">
                                    <input type="email" className="form-control" maxLength={50} name="cf-email" id="cf-email" placeholder="Your Email" value={email} onChange={handleEmailChange} />

                                    <label for="cf-email" className="webform-label">Email</label>
                                </div>

                                <div className="form-group d-flex flex-column-reverse">
                                    <textarea className="form-control" maxLength={254} rows="5" name="cf-message" id="cf-message" placeholder="Your Message" value={message} onChange={handleMessageBoxChange}></textarea>

                                    <label for="cf-message" className="webform-label">Message</label>
                                </div>
                                <div className="row">
                                    <button type="submit" className="col form-control" id="submit-button" name="submit">
                                        <div className="loading-icon-content" hidden={loadingShow} >
                                            <TailSpin stroke="#000000" speed={.75} strokeWidth={5} className="col align-content-start" />
                                            &nbsp;
                                        </div>
                                        Send
                                    </button>
                                </div>
                                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                            </form>
                        </div>

                        <div className="mx-auto col-lg-4 col-md-6 col-12">
                            <h2 className="my-4 pt-4 pt-lg-0">Say Hello</h2>
                            <p>
                                <Link to="" href="#">nemuelmgabitananjr@gmail.com<i className="fas fa-arrow-right custom-icon"></i></Link>
                            </p>
                            <ul class="social-links mt-2">
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
                            <p className="mb-1">+63-977-103-2610</p>
                            <p className="copyright-text mt-3 pt-2">Copyright &copy; 2024 Nems Portfolio Page</p>
                            <p>
                                Design: <Link to="https://www.tooplate.com" href="#" title="free HTML templates" target="_blank">Tooplate</Link><br />
                            </p>
                        </div>
                        <div className="image-wrap">
                            <picture className="bg-img3" />
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

export default Contact;