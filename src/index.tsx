import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './components/App/App'
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry'
import { RegistrationProvider } from './components/serviceContext'
import RegistrationAPI, { IRegistrationAPI } from './service/RegistrationAPI'

const service = new RegistrationAPI()



ReactDOM.render(
    <ErrorBoundry>
        <BrowserRouter>
            
                <App />
            
        </BrowserRouter>
    </ErrorBoundry>,
    document.getElementById('root'));