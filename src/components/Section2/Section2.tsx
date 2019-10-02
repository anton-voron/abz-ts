import React, { Component } from 'react'

import './Section2.sass'



class Section2 extends Component {

    render() {
        return <>
            <section className="section2" id="about-me">
                <div className="container">
                    <div className="content-wrapper">
                        <h2 className="title">
                            Let's get acquainted
                        </h2>
                        <div className="grid-wrapper">
                            <div className="box-1">
                                <div className="img-central">
                                    <img src={require('../../static/section2/man-mobile.svg')} alt="man with mobile" className="img-responsive mob-size" />
                                </div>
                            </div>
                            <div className="box-2">
                                <h3 className="section2-h3">
                                    I am cool frontend developer
                                </h3>
                                <p className="section2-p1">
                                    When real users have a slow experience on mobile, they're much
                                    less likely to find what they are looking for or purchase from
                                    you in the future. For many sites this equates to a huge missed
                                    opportunity, especially when more than half of visits are abandoned
                                    if a mobile page takes over 3 seconds to load.
                                <br /> <br />
                                    Last week, Google Search and Ads teams announced two new speed
                                    initiatives to help improve user-experience on the web.
                                </p>
                                <button className="sing-up-link">
                                    <a href="#signup" className="in-link">
                                        Sign Up
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    }
}

export default Section2