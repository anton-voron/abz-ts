import React, { Component } from 'react'

import './Section1.sass'


class Section1 extends Component {

    render() {
        return <>
            <section className="section1">
                <div className="container">
                    <div className="content-wrapper">
                        <h1 className="title">
                            Test assignment for Frontend Developer position
                        </h1>
                        <p className="p1">
                            We kindly remind you that your test assignment should be submitted as a link to
                            github/bitbucket repository. Please be patient, we consider and respond to every application
                            that meets minimum requirements. We look forward to your submission. Good luck!
                        </p>
                        <button className="sign-up-btn">
                            <div className="in-button">
                                Sign Up
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </>
    }
}

export default Section1