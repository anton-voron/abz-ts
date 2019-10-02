import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import "../../styles/universal.sass"

import Header from '../Header/Header'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Section4'
import Section5 from '../Section5/Section5'
import Registration from '../Registration/Registration'
import Footer from '../Footer/Footer'
import  Store  from '../../store'

const store= new Store()


function App () {

    return(
        <main className="">
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Registration store={store}/>
            <Footer />
        </main>
    )
}

export default App