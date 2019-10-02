import React, { Component } from 'react'

import './Section4.sass'



class Section4 extends Component {

    render() {
        return <>
            <section className="section4" id="requirements">
                <div className="container">
                    <div className="content-wrapper">
                        <h2 className="title">
                            General requirements for the test task
                        </h2>
                        <div className="grid-wrapper">
                            <div className="box-1">
                                <p className="section4-p1">
                                    Users want to find answers to their questions quickly and data shows that people really
                                    care about how quickly their pages load. The Search team announced speed would
                                    be a ranking signal for desktop searches in 2010 and as of this month (July 2018),
                                    page speed will be a ranking factor for mobile searches too.
                                <br /> <br />
                                    If you're a developer working on a site, now is a good time to evaluate your performance
                                    using our speed tools. Think about how performance affects the user experience
                                    of your pages and consider measuring a variety of real-world user-centric performan
                                    ce metrics.
                                <br /> <br />
                                    Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most
                                    significant contributors to the page weight that affect page load time based on
                                    data from HTTP Archive and the Chrome User Experience Report - our public dataset
                                    for key UX metrics as experienced by Chrome users under real-world conditions.
                                </p>
                            </div>
                            <div className="box-2">
                                <div className="img-central">
                                    <img src={require('../../static/section4/man-laptop-v1.svg')} alt="man with mobile" className="img-responsive img1" />
                                </div>
                                <div className="img-central">
                                    <img src={require('../../static/section4/man-laptop-v2.svg')} alt="man with mobile" className="img-responsive img2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    }
}

export default Section4