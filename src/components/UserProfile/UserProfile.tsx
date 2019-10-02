import React from 'react'
import { PersonData } from '../../store'
import './UserProfile.sass'



function UserProfile(props: any) {
    const { email, id, name, phone, photo, position } = props.person as PersonData

    return (
        <div className="box" id={`${id}`}>
            <div className="box-1">
                <img src={photo} alt="user photo" className="user-photo" />
            </div>
            <div className="box-2">
                <h3 className="name">{name}</h3>
                <span className="job-position">{position}</span><br/>
                <span className="email">{email}</span><br/>
                <span className="tel">{phone}</span><br/>
            </div>
        </div>
    )
}

export default UserProfile