export interface IRegistrationAPI {
    readonly _token: string;
    readonly _usersPost: string;
    readonly _usersGet: string;
    readonly _position: string;
    getResource(url: string): object;
    getToken(): Promise<any>;
    postUser(data: any): void;
    getPosition(): Promise<any>;
    
}

export default class RegistrationAPI implements IRegistrationAPI{
    readonly _token: string = `https://frontend-test-assignment-api.abz.agency/api/v1/token`
    readonly _usersPost: string = `https://frontend-test-assignment-api.abz.agency/api/v1/users`
    readonly _usersGet: string = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=`
    readonly _position: string = `https://frontend-test-assignment-api.abz.agency/api/v1/positions`

    getResource = async (url: string) => {
        const response = await fetch(url)

        if(!response.ok) {
            throw new Error(`Could not fetch ${url}` + 
            `, recived ${response.status}`)
        }

        return await response.json()
    }

    getToken = async () => {
        const response = await this.getResource(this._token)
        return response.token
    }

    postUser = async (data: any) => {
        const token = await this.getToken()
        return fetch(this._usersPost, {
            method: 'POST',
            body: data,
            headers: {
                'Token': token
            }
        })
        .then(response => {
            return response.json()
        } )
        .then(data => {
            if(data.success) {
                alert("You have successfully passed the registration")
                localStorage.setItem('user_id', data.user_id)
            } else {
                alert("Failed registration, please enter valid data")
                throw new Error(`Error bacause of ${data}`)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    getUsers = async (num: number = 6) => {
        return this.getResource(`${this._usersGet}${num}`)
        .then(data => {
            if(data.success) {
                console.log(data.users)
                return data.users
            } else {
                throw new Error(`Invalid request`)
            }
        })
        .catch(error => console.log(error))
    }

    getPosition = async () => {
        return this.getResource(this._position)
        .then(data => {
            return data.positions
        })
        .catch(error => {console.log(error)})
    }
}