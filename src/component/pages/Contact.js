import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../css/tooplate-kool-form-pack.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import contactBG from '../images/ACVI4.jpg';

function Contact() {
    return (
        <Router>
            <section className="contact section-padding" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <Form action="#" method="get" className="contact-form webform" role="form">
                                <Form.Group className="d-flex flex-column-reverse">
                                    <Form.Control type="text" className="form-control" name="cf-name" id="cf-name" placeholder="Your Name" />
                                    <Form.Label htmlFor="cf-name" className="webform-label">Full Name</Form.Label>
                                </Form.Group>
                                <Form.Group className="d-flex flex-column-reverse">
                                    <Form.Control type="email" className="form-control" name="cf-email" id="cf-email" placeholder="Your Email" />
                                    <Form.Label htmlFor="cf-email" className="webform-label">Email</Form.Label>
                                </Form.Group>

                                <Form.Group className="d-flex flex-column-reverse">
                                    <Form.Control as="textarea" className="form-control" rows={5} name="cf-message" id="cf-message" placeholder="Your Message" />
                                    <Form.Label htmlFor="cf-message" className="webform-label">Message</Form.Label>
                                </Form.Group>

                                <button type="submit" className="form-control" id="submit-button" name="submit">Send</button>
                            </Form>
                        </div>

                        <div className="mx-auto col-lg-4 col-md-6 col-12">
                            <h3 className="my-4 pt-4 pt-lg-0">Say hello</h3>
                            <p>
                                <Link to="" href="#">nemuelmgabitananjr@gmail.com<i className="fas fa-arrow-right custom-icon"></i></Link>
                            </p>
                            <p className="mb-1">+63-977-103-2610</p>
                            <p className="copyright-text mt-5 pt-3">Copyright &copy; 2024 Nems Portfolio Page</p>
                            <p>Design: <Link to="https://www.tooplate.com" href="#" title="free HTML templates" target="_blank">Tooplate</Link></p>
                        </div>

                    </div>
                </div>
                <div className="bg-img2">
                    <Image src={contactBG} alt="this is an image" fluid />
                </div>
            </section>
            <Routes>
                <Route />
            </Routes>
        </Router>
    );
}

export default Contact;