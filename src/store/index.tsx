import { observable, action, runInAction } from 'mobx'
import RegistrationAPI from '../service/RegistrationAPI'


export interface IForm {
    [key: string]: string | number 

}

export interface PersonData {
    email: string
    id: number
    name: string
    phone: string
    photo: string
    position: string
    position_id: number
    registration_timestamp: number
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

    @observable
    public userList: PersonData[] = [
        
    ]

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

    @action
    getUsers = async () => {
        const usersMap = await this.service.getUsers()
        runInAction(() => {
            this.userList = [...usersMap]
        })
    }

}