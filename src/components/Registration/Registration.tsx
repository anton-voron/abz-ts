import React, { Component } from 'react'
import { observable, action, comparer, autorun, configure, computed } from 'mobx'
import { observer } from 'mobx-react'

import Input from '../Input/Input'
import './Registration.sass'

configure({ enforceActions: 'observed' });

interface IForm {
    [key: string]: string | number 

}

interface IHeders {
    [key: string]: string | number
}

class FormSend {

    @observable
    public data: IForm = {
        name: '',
        email: '',
        phone : '',
        position_id: 0,
        photo: ''

    }

    @action
    onFiledChange = (name: string, value: string): void => {
        this.data[name] = value
    }

    @action
    onSelectChange = (value: string): void => {
        console.log(value)
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

    getToken = async () => {
        let token: string
        const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        const data = await response.json()
        if(data) {
            console.log(data.token)
            token = data.token
        } else {
            throw new Error
        }
        return token
    }

    handleSubmit = async (evt: any) => {
        evt.preventDefault()
        const postData = document.getElementById('postData')
        const token = await this.getToken()

        const formData = new FormData();

        const fileField: any = document.querySelector('input[type="file"]')
        console.log(fileField.files[0]);
        formData.append('position_id', `${store.data.position_id}`);
        formData.append('name', `${store.data.name}`);
        formData.append('email', `${store.data.email}`);
        formData.append('phone', `${store.data.phone}`);
        formData.append('photo', fileField.files[0]);

        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
             method: 'POST',
             body: formData,
             headers: {
                'Token': token
              },
        })
        .then(response => {
            return response.json()
        })
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(`FUCK we got an error ${error}`)
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