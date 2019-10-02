import { observable, action } from 'mobx'
import RegistrationAPI from '../service/RegistrationAPI'

interface IForm {
    [key: string]: string | number 

}

interface IHeders {
    [key: string]: string | number
}

export default class Store {

    protected service = new RegistrationAPI()

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
        console.log(value)
        this.data[name] = value
    }

    @action
    onSelectChange = (value: string): void => {
        console.log(value)
        this.data.position_id = value
    }

    postUser = async () => {
        const token = await this.service.getToken()
        const formData = new FormData();
        const fileField: any = document.querySelector('input[type="file"]')

        console.log(fileField.files[0]);
        formData.append('position_id', `${this.data.position_id}`);
        formData.append('name', `${this.data.name}`);
        formData.append('email', `${this.data.email}`);
        formData.append('phone', `${this.data.phone}`);
        formData.append('photo', fileField.files[0]);

        this.service.postUser(formData)
    }

}