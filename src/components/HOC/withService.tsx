import React from 'react'
import { RegistrationConsumer } from '../serviceContext/'

const withService = (Wrapped: any) => {
    return(props: any) => {
        return (
            <RegistrationConsumer>
                {
                    (value) => {
                        return <Wrapped {...props} {...value}/>
                    }
                }
            </RegistrationConsumer>
        )
    }
}

export default withService