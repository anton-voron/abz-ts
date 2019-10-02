export interface IRegistrationAPI {
    readonly _token: string;
    readonly _usersPost: string;
    readonly _usersGet: string;
    readonly _position: string;
    getResource(url: string): object;
    getToken(): Promise<any>;
    postUser(data: any): void
    
}

export default class RegistrationAPI implements IRegistrationAPI{
    readonly _token: string = `https://frontend-test-assignment-api.abz.agency/api/v1/token`
    readonly _usersPost: string = `https://frontend-test-assignment-api.abz.agency/api/v1/users`
    readonly _usersGet: string = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5`
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
            if(!response.ok) {
                throw new Error(`Could not fetch, recived ${response.status}`)
            }
            return response.json()
        } )
        .then(data => {
            console.log(data)
            if(data.success) {
                //prosess
            } else {
                throw new Error(`Error bacause of ${data}`)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}