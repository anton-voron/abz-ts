import React, { Component } from 'react'
import './TabletHeader.sass'
import { observer } from 'mobx-react'
import Store from '../../store'

interface Props {
    store: Store,
    display: boolean
}

@observer
class TabletHeader extends Component<Props>{

    render() {
        const {
            email,
            name,
            photo,
        } = this.props.store.currentUser

        const { display } = this.props
        let clasez: string
        display ? clasez = `collapser2` : clasez = `hidden`
        return <>
            <div className={clasez}>
                <div className="box-2">
                    <ul className="nav-items">
                        <li className="item">
                            <a className="link" href="#about-me">About me</a>
                        </li>
                        <li className="item">
                            <a className="link" href="#relationships">Relationships </a>
                        </li>
                        <li className="item">
                            <a className="link" href="#requirements">Requirements</a>
                        </li>
                        <li className="item">
                            <a className="link" href="#user">User</a>
                        </li>
                        <li className="item">
                            <a className="link" href="#signup">Sign up</a>
                        </li>
                    </ul>
                    <ul className="nav-items auth-data">
                        <li className="item m-b-15">
                            <p className="user-data">
                                <span className="login">
                                    {name}
                                </span> <br />
                                <span className="email">
                                    {email}
                                </span>
                            </p>
                        </li>
                        <li className="item m-b-15">
                            <img src={photo} className="avatar" alt="user photo" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    }
}

export default TabletHeader