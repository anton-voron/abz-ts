import React, { Component } from 'react'
import { observable, action, comparer, autorun, configure, computed } from 'mobx'
import { observer } from 'mobx-react'

import Input from '../Input/Input'
import './Registration.sass'

configure({ enforceActions: 'observed' });

interface IForm {
    [key: string]: string

}

class FormSend {

    @observable
    public data: IForm = {
        name: '',
        email: '',
        phone : '',
        position_id: 'Select your postiton',
        photo: ''

    }

    @action
    onFiledChange = (name: string, value: string): void => {
        this.data[name] = value
    }

    @action
    onSelectChange = (value: string): void => {
        this.data.position_id = value
    }


}

const store = new FormSend()

@observer
class Registration extends Component {

    handleSelect = (evt: any): void => {
        const { onSelectChange } = store
        const value: string = evt.target.value
        onSelectChange(value)
    }

    handleSubmit = (evt: any): void => {
        evt.preventDefault()
        const postData = document.getElementById('postData')
        console.log(postData)
        
         fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
             method: 'GET',
             body: JSON.stringify(store.data),
             headers: {
                'Token': "token",
              },
        })
        .then(response => {
            console.log(response.json())
            return response.json()
        })
        .then(data => {
            console.log(data)
            if(data.success) {
                console.log('all good')
            } else {
                throw new Error('could not fetch')
            }
        })
        .catch(error => {
            console.log(error, error.massage)
        })
    }

    render() {
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
                                <option value="Lead designer">Lead designer</option>
                                <option value="QA">QA</option>
                                <option value="SMM">SMM</option>
                                <option value="Frontend developer">Frontend developer</option>
                                <option value="Backend developer">Backend developer</option>
                                <option value="Leading specialist of Control Department">Leading specialist of Control Department</option>
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