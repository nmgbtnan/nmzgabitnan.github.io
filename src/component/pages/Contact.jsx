import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/tooplate-kool-form-pack.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import contactBG from '../images/ACVI4.jpg';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Email successfully sent
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Thank you for submitting your message. We will get back to you soon!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function Contact() {
    const form = useRef();
    const [modalShow, setModalShow] = React.useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_jwhtd7g', 'template_4r0teak', form.current, {
                publicKey: 'MJKkIayz2sHG9UG4R',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setModalShow(true)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        };

    return (
        <Router>
            <section className="contact section-padding" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <form ref={form} onSubmit={sendEmail} action="#" method="get" class="contact-form webform">

                                <div class="form-group d-flex flex-column-reverse">
                                    <input type="text" class="form-control" name="cf-name" id="cf-name" placeholder="Your Name" />

                                        <label for="cf-name" class="webform-label">Full Name</label>
                                </div>

                                <div class="form-group d-flex flex-column-reverse">
                                    <input type="email" class="form-control" name="cf-email" id="cf-email" placeholder="Your Email" />

                                        <label for="cf-email" class="webform-label">Email</label>
                                </div>

                                <div class="form-group d-flex flex-column-reverse">
                                    <textarea class="form-control" rows="5" name="cf-message" id="cf-message" placeholder="Your Message"></textarea>

                                    <label for="cf-message" class="webform-label">Message</label>
                                </div>

                                <button type="submit" class="form-control" id="submit-button" name="submit">Send</button>
                                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}  />
                            </form>
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