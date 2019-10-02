import React, { Component } from 'react'
import { configure } from 'mobx'
import { observer } from 'mobx-react'

import Input from '../Input/Input'
import Selector from '../Selector/Selector'
import './Registration.sass'
import Store from '../../store'

configure({ enforceActions: 'observed' });


interface Props {
    store: Store
}

@observer
class Registration extends Component<Props> {


    handleSubmit = async (evt: any) => {
        evt.preventDefault()
        this.props.store.postUser()
    }

    render() {
        const { store } = this.props
        return <>
            <section className="registration" id="signup">
                <div className="container">
                    <h1 className="title">Register to get a work</h1>
                    <p className="registration-p1">
                        Attention! After successful registration and alert,
                        update the list of users in the block from the top
                    </p>
                    <form className="form-wrapper" onSubmit={this.handleSubmit} id="postData">
                        <Input
                            store={store}
                            name="name"
                            placeholder="Your name" />
                        <Input
                            store={store}
                            name="email"
                            placeholder="Your email" />
                        <Input
                            store={store}
                            name="phone"
                            placeholder="+38 ( __ ) ___ __ __" />
                        <div className="box">
                            <Selector store={store} />
                            <div>
                                <input type="file" placeholder="Upload your photo" className="upload-photo" />
                            </div>
                        </div>
                        <input type="submit" value="Sign Up" />
                    </form>
                </div>
            </section>
        </>
    }
};


export default Registration