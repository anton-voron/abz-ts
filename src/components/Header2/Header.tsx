import React, { Component } from 'react'
import './Header.sass'
import { observer } from 'mobx-react'
import Store from '../../store'
import TabletHeader from './TabletHeader'

interface Props {
    store: Store
}

@observer
class Header extends Component<Props>{

    state={
        display: false
    }

    showSideheader = () => {
        this.setState({
            display: !this.state.display
        })
    }

    render() {
        const {
            email,
            name,
            photo,
        } = this.props.store.currentUser
        return <>
            <header className="main-header">
                <div className="header-container">
                    <div className="flex-wrapper">
                        <div className="box-1">
                            <a className="navbar-brand" href="#">
                                <img src={require('../../static/header/logo.svg')} width="137" height="32" alt="company logo" />
                            </a>
                        </div>
                        <button className="navbar-toggler" type="button" onClick={this.showSideheader}>
                            <img src={require('../../static/header/line-menu.svg')} width="137" height="32" alt="company logo" />
                        </button>
                        <div className="collapser">
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
                                <ul className="nav-items">
                                    <li className="item">
                                        <p className="user-data">
                                            <span className="login">
                                                {name}
                                            </span> <br />
                                            <span className="email">
                                                {email}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="item">
                                        <img src={photo} className="avatar" alt="user photo" />
                                    </li>
                                    <li className="item">
                                        <a className="log-out" href="#">
                                            <img src={require('../../static/header/sign-out.svg')} alt="sign out" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <TabletHeader store={this.props.store} display={this.state.display}/>
            </header>
        </>
    }
}

export default Header