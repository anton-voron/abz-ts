import React, { Component } from 'react'
import './Header.sass'

class Header extends Component {

    render() {
        return <>
            <header className="main-header">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg nav-self">
                        <a className="navbar-brand" href="#">
                            <img src={require('../../static/header/logo.svg')} width="137" height="32" alt="company logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <img src={require('../../static/header/line-menu.svg')} width="137" height="32" alt="company logo" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="nav-wrapper">
                                <div className="box-0">
                                    <a className="navbar-brand-toggle" href="#">
                                        <img src={require('../../static/header/logo.svg')} width="137" height="32" alt="company logo" />
                                    </a>
                                </div>
                                <ul className="navbar-nav box-1">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About me</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Relationships </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Requirements</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">User</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Sign up</a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav box-2">
                                    <li className="nav-item">
                                        <p className="user-data">
                                            <span className="login">
                                                Superstar
                                    </span> <br />
                                            <span className="email">
                                                superstar@gmail.com
                                    </span>
                                        </p>
                                    </li>
                                    <li className="nav-item">
                                        <img src={require('../../static/header/user-superstar-2x.jpg')} className="avatar" alt="user photo" />
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link log-out" href="#">
                                            <img src={require('../../static/header/sign-out.svg')} alt="sign out" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    }
}

export default Header;