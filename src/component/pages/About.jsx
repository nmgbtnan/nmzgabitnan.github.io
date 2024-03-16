import React from 'react';
import Image from 'react-bootstrap/Image';
import StackIcon from "tech-stack-icons";
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
                            <li><strong>Website :</strong> https://nmzgbtnanportfolio.vercel.app/</li>
                            <li><strong>Email :</strong> nemuelmgabitananjr@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 mx-auto col-md-5 col-10">
                        <Image src={aboutPic} alt="This is the Primary picture" fluid />
                    </div>
                    <div className="image-wrap">
                        <Image src={aboutBG} className="bg-img1" alt="this is an image" />
                    </div>
                </div>
                <div className="row about-third ">
                    <div className="col-md-6 col-12">
                        <h3>Technological stacks</h3>
                        <div className="row justify-content-evenly">
                            <div className="col ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="html5" /></div>
                                <span><p>HTML5</p></span>
                            </div>
                            <div className="col ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="css3" /></div>
                                <span><p>CSS3</p></span>
                            </div>
                            <div className="col ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="php" /></div>
                                <span><p>PHP</p></span>
                            </div>
                            <div className="col ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="java" /></div>
                                <span><p>Java</p></span>
                            </div>
                            <div className="col ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="jquery" /></div>
                                <span><p>Jquery</p></span>
                            </div>
                            <div className="col ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="js" /></div>
                                <span><p>Javascript</p></span>
                            </div>
                            <div className="col ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="bootstrap5" /></div>
                                <span><p>Bootstrap 5</p></span>
                            </div>
                            <div className="col ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="laravel" /></div>
                                <span><p>Laravel</p></span>
                            </div>
                            <div className="col ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="mariadb" /></div>
                                <span><p>MariaDB</p></span>
                            </div>
                            <div className="col ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="mysql" /></div>
                                <span><p>MySQL</p></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <h3>Collaboration tools</h3>
                        <div className="row">
                            <div className="col ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="bash" /></div>
                                <span><p>Bash</p></span>
                            </div>
                            <div className="col ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="github" /></div>
                                <span><p>Github</p></span>
                            </div>
                            <div className="col ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="prettier" /></div>
                                <span><p>Prettier</p></span>
                            </div>
                            <div className="col ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="slack" /></div>
                                <span><p>Slack</p></span>
                            </div>
                            <div className="col ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="vscode" /></div>
                                <span><p>VS Code</p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default About;