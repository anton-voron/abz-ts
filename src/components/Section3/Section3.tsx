import React, { Component } from 'react'

import './Section3.sass'
import img1 from '../../static/section3/html.svg'
import img2 from '../../static/section3/css.svg'
import img3 from '../../static/section3/javascript.svg'


export interface LangType {
    img: string,
    title: string,
    text: string
}

export const codeLang: LangType[] = [
    {
        img: img1,
        title: `I'm in love with HTML`,
        text: `Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.`
    },
    {
        img: img2,
        title: `CSS is my best firend`,
        text: `Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a ocument written in a markup language like HTML.`
    },
    {
        img: img3,
        title: `JavaScript is my passion`,
        text: `JavaScrpt is a hig-level, interpreted programming language which is also characterized as dynamic, weakly typed, prototyped, prototyped-base and multi-paradigm.`
    }
]



class Section3 extends Component {


    displayElem = (arr: LangType[]): any => {
        return arr.map((item, idx) => {
            const { img, title, text } = item
            return (
                <div className="code-lang-item"
                    key={idx}>
                    <div className="img-wrapper">
                        <img src={img} alt="code lang" className="mob-size" />
                    </div>
                    <div className="box-2">
                        <h2 className="box-title">
                            {title}
                        </h2>
                        <p className="box-p1">
                            {text}
                        </p>
                    </div>
                </div>
            )
        })
    }

    render() {
        const codeMap = this.displayElem(codeLang)
        return <>
            <section className="section3">
                <div className="container">
                    <div className="content-wrapper">
                        <h1 className="title">
                            About my relationships with <br />
                            web-development
                        </h1>
                        <div className="grid-wrapper">
                            {codeMap}
                        </div>
                    </div>
                </div>
            </section>
        </>
    }
}

export default Section3