import React from 'react';
import StackIcon from "tech-stack-icons";

function Skills () {
    return (
        <section className="skills section-padding" id="skills">
            <div className="container">
                <div className="row about-third ">
                    <div className="col-md-6 col-12">
                        <h2>Technological stacks</h2>
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
                        <h2>Collaboration tools</h2>
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
                    <div className="image-wrap">
                        <picture className="bg-img2" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;