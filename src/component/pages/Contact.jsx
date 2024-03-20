import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaLinkedin, FaViber, FaRegSmileWink } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
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

    const target = useRef(null);

    const [copied, setCopied] = useState(false);
    const copyToClipboardContact = () => {
        navigator.clipboard.writeText('nemuelmgabitananjr@gmail.com');
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    const [copied2, setCopied2] = useState(false);
    const copyToClipboardContactNumber = () => {
        navigator.clipboard.writeText('+639771032610');
        setCopied2(true);
        setTimeout(() => {
            setCopied2(false);
        }, 2000);
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
                                <Link to="/" href="" ref={target} onClick={copyToClipboardContact} title="click to copy this email link">
                                    <MdOutlineEmail /> nemuelmgabitananjr@gmail.com
                                </Link>
                                <Overlay target={target.current} show={copied} placement="right">
                                    {(props) => (
                                        <Tooltip id="overlay-example" {...props}>
                                            Email link copied
                                        </Tooltip>
                                    )}
                                </Overlay>
                            </p>
                            <p>Hi there! Have a project proposal, want to discuss some collaboration opportunities, want to hire me, or simply want to say hi?
                                Feel free to drop me a message using the email form provided or via my viber phone number provided below.
                                I am looking forward to our collaboration together~! <FaRegSmileWink /></p>
                            <p className="mb-1">
                                <Link to="/" href="" ref={target} onClick={copyToClipboardContactNumber} title="click to copy this viber phone number">
                                    <FaViber /> +63-977-103-2610
                                </Link>
                                <Overlay target={target.current} show={copied2} placement="right">
                                    {(props) => (
                                        <Tooltip id="overlay-example" {...props}>
                                            Email link copied
                                        </Tooltip>
                                    )}
                                </Overlay>
                            </p>
                            <ul class="social-links mt-2">
                                <li className="social-icon-item">
                                    <Link to="https://www.facebook.com/shirotenshiNmz/" href="#" target="_blank" className="social-icon-link" rel="noopener noreferrer" title="Facebook profile"><FaFacebook /></Link>
                                </li>
                                <li className="social-icon-item">
                                    <Link to="https://github.com/nmgbtnan" href="#" target="_blank" className="social-icon-link" rel="noopener noreferrer" title="Github profile"><FaGithub /></Link>
                                </li>
                                <li className="social-icon-item">
                                    <Link to="https://www.linkedin.com/in/nemuel-gabitanan-jr-533705276/?trk=nav_responsive_tab_profile_pic&originalSubdomain=ph" href="#" target="_blank" className="social-icon-link" rel="noopener noreferrer" title="LinkedIn profile"><FaLinkedin /></Link>
                                </li>
                            </ul>
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