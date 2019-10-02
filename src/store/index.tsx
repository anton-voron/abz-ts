import { observable, action, runInAction, toJS, computed } from 'mobx'
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

export interface IPositions {
    id: number,
    name: string
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
    public userList: PersonData[] = []

    @observable
    public currentUser: PersonData = {
        id: 37,
        name: "Lisa",
        email: "lisa.medina@example.com",
        phone: "+380564753087",
        position: "Security",
        position_id: 3,
        registration_timestamp: 1537639019,
        photo: "https://frontend-test-assignment-api.abz.agency/images/users/5d94a90233368185.jpg"
    }

    @observable
    public positions: IPositions[] = []

    constructor(){

    }

    @action
    onFiledChange = (name: string, value: string): void => {
        this.data[name] = value
    }

    @action
    onSelectChange = (value: string): void => {
        this.data.position_id = value
    }

    @action
    postUser = async () => {
        const formData = new FormData();
        const fileField: any = document.querySelector('input[type="file"]')

        console.log(fileField.files[0]);
        formData.append('position_id', `${this.data.position_id}`);
        formData.append('name', `${this.data.name}`);
        formData.append('email', `${this.data.email}`);
        formData.append('phone', `${this.data.phone}`);
        formData.append('photo', fileField.files[0]);

        await this.service.postUser(formData)
        const usersMap = await this.service.getUsers()
        runInAction(() => {
            this.userList = [...usersMap]
        })
    }

    @action
    getUsers = async (num: number = 6) => {
        const usersMap = await this.service.getUsers(num)
        runInAction(() => {
            this.userList = [...usersMap]
        })
    }

    @action
    getUser = () => {
        const id = localStorage.getItem("user_id") || 180
        const user = this.userList.find((user: PersonData) => {
            console.log(id)
            return user.id == id
        })
        console.log(user)
        if(user) {
            this.currentUser = user
            
        } else {
            console.log(`there is no user with id: ${id}`)
        }
    }

    @action
    getPosition = async () => {
        const positions = await this.service.getPosition()
        runInAction(() => {
            this.positions = [...positions]
        })
    }

}