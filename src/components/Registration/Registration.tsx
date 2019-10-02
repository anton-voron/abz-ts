import React, { Component } from 'react'
import { configure } from 'mobx'
import { observer } from 'mobx-react'

import Input from '../Input/Input'
import './Registration.sass'
import  Store  from '../../store'

configure({ enforceActions: 'observed' });



interface IHeders {
    [key: string]: string | number
}

interface Props {
    store: Store
  }

@observer
class Registration extends Component <Props> {


    handleSelect = (evt: any): void => {
        const { onSelectChange } = this.props.store
        const value: string = evt.target.value
        onSelectChange(value)
    }

    handleSubmit = async (evt: any) => {
        evt.preventDefault()
        this.props.store.postUser()
    }

    render() {
        const { store } = this.props
        const { data } = store
        return <>
            <section className="registration">
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
                            <select value={data.position_id} onChange={this.handleSelect} className="selector">
                                <option value="0">Lead designer</option>
                                <option value="1">QA</option>
                                <option value="2">SMM</option>
                                <option value="3">Frontend developer</option>
                                <option value="4">Backend developer</option>
                                <option value="5">Leading specialist of Control Department</option>
                            </select>
                            <div>
                                <input type="file" placeholder="Upload your photo" className="upload-photo" />
                            </div>
                        </div>
                        <input type="submit" value="Sign Up"/>
                    </form>
                </div>
            </section>
        </>
    }
};


export default Registration