import React, { Component } from 'react'


class Header extends Component {

    render() {
        return <>
            <header>
                <nav className="navbar navbar-expand-md">
                    <a className="navbar-brand" href="#">
                        <img src={require('../../static/header/logo.svg')} width="137" height="32" alt="company logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Relationships </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Requirements</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">User</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Sign up</a>
                            </li>
                            <ul>
                                <li>
                                    <p>
                                        <span>
                                            Superstar
                                        </span>
                                        <span>superstar@gmail.com</span>
                                    </p>
                                </li>
                                <li>
                                    <img src={require('../../static/header/user-superstar-2x.jpg')} alt="user photo" />
                                </li>
                                <li>
                                    <a>
                                        <img src={require('../../static/header/sign-out.svg')} alt="sign out" />
                                    </a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    }
}

export default Header;