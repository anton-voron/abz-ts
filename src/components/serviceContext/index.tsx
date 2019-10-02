import React, { ReactNode } from 'react'
import RegistrationAPI, { IRegistrationAPI } from '../../service/RegistrationAPI'
import { type } from 'os'

type Props = {
    children: {
      content: ReactNode
      header?: ReactNode
      media?: ReactNode
      actions?: ReactNode
    },
    RegistrationAPI: IRegistrationAPI
  }
const value = new RegistrationAPI()
const {
    Provider: RegistrationProvider,
    Consumer: RegistrationConsumer
    } = React.createContext<IRegistrationAPI>(value)

export {
    RegistrationProvider,
    RegistrationConsumer
}

