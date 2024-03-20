import React from 'react';
import { Image } from 'react-bootstrap';
import StackIcon from "tech-stack-icons";
import discordIcon from '../icons/discord_icon.ico';
import webexIcon from '../icons/webex_icon.ico';
import zoomIcon from '../icons/zoom_icon.ico';
import tviewerIcon from '../icons/tviewer_icon.ico';
import gsuitIcon from '../icons/gsuit_icon.ico';
import msofficeIcon from '../icons/msoffice_icon.ico';
import ajaxIcon from '../icons/ajax_icon.png';

function Skills () {
    return (
        <section className="skills section-padding" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Technological stacks</h2>
                        <div className="row align-items-center justify-content-evenly">
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="html5" /></div>
                                <span><p>HTML5</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="css3" /></div>
                                <span><p>CSS3</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="php" /></div>
                                <span><p>PHP</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="java" /></div>
                                <span><p>Java</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="jquery" /></div>
                                <span><p>Jquery</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="js" /></div>
                                <span><p>Javascript</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><Image src={ajaxIcon} fluid /></div>
                                <span><p>AJAX</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="reactjs" /></div>
                                <span><p>ReactJS</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="bootstrap5" /></div>
                                <span><p>Bootstrap 5</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="laravel" /></div>
                                <span><p>Laravel</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="mariadb" /></div>
                                <span><p>MariaDB</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="mysql" /></div>
                                <span><p>MySQL</p></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <h2>Collaboration tools</h2>
                        <div className="row align-items-center justify-content-evenly">
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="bash" /></div>
                                <span><p>Bash</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="github" /></div>
                                <span><p>Github</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="slack" /></div>
                                <span><p>Slack</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><StackIcon name="vscode" /></div>
                                <span><p>VS Code</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><Image src={discordIcon} fluid /></div>
                                <span><p>Discord</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><Image src={webexIcon} fluid /></div>
                                <span><p>Cisco Webex</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><Image src={zoomIcon} fluid /></div>
                                <span><p>Zoom</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><Image src={tviewerIcon} fluid /></div>
                                <span><p>Team Viewer</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><Image src={gsuitIcon} fluid /></div>
                                <span><p>Google Suit</p></span>
                            </div>
                            <div className="col col-sm-2 ts-icon-label">
                                <div className="ts-icon-link"><Image src={msofficeIcon} fluid /></div>
                                <span><p>MS Office</p></span>
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