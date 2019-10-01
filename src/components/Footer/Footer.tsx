import React from 'react'

import './Footer.sass'

function Footer() {
    return <>
        <footer className="main-footer" id="footer">
            <div className="border-b">
                <div className="container">
                    <div className="top">
                        <div className="img-wrapper">
                            <img src={require('../../static/footer/logo.png')}
                                className="footer-logo" alt="logo" />
                        </div>
                        <ul className="link-list">
                            <li className="link-item">
                                <a href="#">About me</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Relationships</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Requirments</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Users</a>
                            </li>
                            <li className="link-item">
                                <a href="#">Sing Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="midle">
                    <div className="contacts">
                        <p>
                            <img src={require('../../static/footer/mail.svg')}
                                className="icon" alt="email" />
                            work.of.future@gmail.com
                        </p>
                        <p>
                            <img src={require('../../static/footer/phone.svg')}
                                className="icon" alt="phone" />
                            +38 (050) 789 24 98
                        </p>
                        <p>
                            <img src={require('../../static/footer/cellphone.svg')}
                                className="icon" alt="cellphone" />
                            +38 (095) 556 08 45
                        </p>
                    </div>
                    <ul className="page-links">
                        <li className="page-item">
                            <a className="page" href="#">News</a>
                            <a className="page" href="#">Blog</a>
                            <a className="page" href="#">Partners</a>
                            <a className="page" href="#">Shop</a>
                        </li>
                        <li className="page-item">
                            <a className="link" href="#">Overview</a>
                            <a className="link" href="#">Design</a>
                            <a className="link" href="#">Code</a>
                            <a className="link" href="#">Collaborate</a>
                        </li>
                        <li className="page-item">
                            <a className="link" href="#">Tutorial</a>
                            <a className="link" href="#">Resources</a>
                            <a className="link" href="#">Guides</a>
                            <a className="link" href="#">Examples</a>
                        </li>
                        <li className="page-item">
                            <a className="link" href="#">FAQ</a>
                            <a className="link" href="#">Terms</a>
                            <a className="link" href="#">Conditions</a>
                            <a className="link" href="#">Helps</a>
                        </li>
                    </ul>
                </div>
                <div className="bottom">
                    <div>
                        <span className="copyright">© abz.agency specially for the test task</span>
                    </div>
                    <ul className="icon-list">
                        <li className="icon-item">
                            <a href="#">
                                <img src={require('../../static/footer/facebook.svg')}
                                    className="social-newtork" alt="facebook" />
                            </a>
                        </li>
                        <li className="icon-item">
                            <a href="#">
                                <img src={require('../../static/footer/linkedin.svg')}
                                    className="social-newtork" alt="linkedin" />
                            </a>
                        </li>
                        <li className="icon-item">
                            <img src={require('../../static/footer/instagram.svg')}
                                className="social-newtork" alt="instagram" />
                        </li>
                        <li className="icon-item">
                            <a href="#">
                                <img src={require('../../static/footer/twitter.svg')}
                                    className="social-newtork" alt="twiter" />
                            </a>
                        </li>
                        <li className="icon-item">
                            <a href="#">
                                <img src={require('../../static/footer/pinterest.svg')}
                                    className="social-newtork" alt="pinterest" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
}

export default Footer