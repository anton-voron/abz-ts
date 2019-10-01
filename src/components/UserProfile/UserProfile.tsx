import React from 'react'

import './UserProfile.sass'

export interface PersonData {
    img: string,
    name: string,
    jobPostion: string,
    email: string,
    tel: string,
    id: number
}


function UserProfile(props: any) {
    const { img, name, jobPostion, email, tel, id } = props.person as PersonData

    return (
        <div className="box" id={`${id}`}>
            <div className="box-1">
                <img src={img} alt="user photo" className="user-photo" />
            </div>
            <div className="box-2">
                <h3 className="name">{name}</h3>
                <span className="job-position">{jobPostion}</span><br/>
                <span className="email">{email}</span><br/>
                <span className="tel">{tel}</span><br/>
            </div>
        </div>
    )
}

export default UserProfile