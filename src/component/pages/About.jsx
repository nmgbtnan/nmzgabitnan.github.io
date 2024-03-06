import React from 'react';
import '../css/tooplate-kool-form-pack.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'react-bootstrap/Image';
import aboutPic from '../images/nems4.jpg';
import aboutBG from '../images/ACVI1.jpg';

function About() {
    return (
        <section className="about section-padding" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h3 className="mb-4">This is Nems' Resume</h3>
                        <p>A career-shifter from a longtime Back-Office agent to a Web Developer returning to my roots as a programmer same from college days. </p>
                        <p>Engaged in a Full-Stack Web-developer bootcamp to be refreshed and be proficient again in an assortment of technologies, including HTMl/CSS, JavaScript, PHP, MySQL, and aquired bootcamp knowledge like Bootstrap 5, Jquery, MySQLi, Ajax, React JS, and Laravel.</p>
                        <p> Able to effectively self-manage during independent projects, as well as collaborate in a team setting due to my longtime experience as a Back-office agent.</p>
                        <ul className="mt-4 mb-5 mb-lg-0 profile-list list-unstyled">
                            <li><strong>Full Name :</strong> Nemuel M Gabitanan Jr </li>
                            <li><strong>Date of Birth:</strong> February 18, 1993</li>
                            <li><strong>Website :</strong> TBA</li>
                            <li><strong>Email :</strong> nemuelmgabitananjr@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 mx-auto col-md-5 col-10">
                        <Image src={aboutPic} alt="This is the Primary picture" fluid />
                    </div>
                </div>
                <div className="row about-third">
                    <div className="col-lg-4 col-md-4 col-12">
                        <h3>Integer volutpat</h3>
                        <p>Sed eu risus tincidunt, finibus dolor non, gravida ex. Donec lacinia mi nec erat tempus, vel consectetur ante scelerisque. Ut blandit, risus in venenatis ultricies, lacus tellus fermentum.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <h3>Mauris semper</h3>
                        <p>Cras et nisl vestibulum, accumsan elit sed, pretium enim. Vestibulum in condimentum magna. Maecenas quam magna, iaculis eu turpis et, commodo pulvinar leo.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <h3>Integer id neque</h3>
                        <p>Duis at mollis leo, venenatis congue ex. Cras urna dui, gravida euismod lectus et, cursus tempor nulla. Praesent at turpis quis ex tristique gravida quis eget eros.</p>
                    </div>
                </div>
            </div>
            <div className="bg-img1">
                <Image src={aboutBG} alt="this is an image" fluid />
            </div>
        </section>
    );
}

export default About;