import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../Header/Header'
import Section1 from '../Section1/Section'



function App () {

    return(
        <main className="">
            <Header />
            <Section1 />
        </main>
    )
}

export default App