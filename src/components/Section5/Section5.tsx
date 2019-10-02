import React, { Component } from 'react'
import './Section5.sass'
import  Store  from '../../store'



// import user5 from '../../static/section5/user-alexander-2x.jpg'
// import user2 from '../../static/section5/user-adolph-2x.png'
// import user4 from '../../static/section5/user-elizabeth-2x.jpg'
// import user3 from '../../static/section5/user-liam-2x.jpg'
// import user6 from '../../static/section5/user-mason-2x.jpg'
// import user1 from '../../static/section5/user-noah-2x.jpg'

import UserProfile from '../UserProfile/UserProfile'
import { PersonData } from '../../store'
import { observer } from 'mobx-react'

// const PersonList: PersonData[] = [
//     {
//         img: user1,
//         name: `Noah`,
//         jobPostion: `Leading specialist of Control Department`,
//         email: `niah.controldepartment@gmail...`,
//         tel: `+380 (050) 678 03 24`,
//         id: 1
//     },
//     {
//         img: user2,
//         name: `Adolph Blaine Charles David Earl`,
//         jobPostion: `The contextual advertising specialist`,
//         email: `adolph.blainecharles-davidearl@...`,
//         tel: `+380 (095) 556 0845`,
//         id: 2
//     },
//     {
//         img: user3,
//         name: `Liamgrivescasey Smith Wiam`,
//         jobPostion: `Lead designer`,
//         email: `liamgruevescasey@example.com`,
//         tel: `+380 (050) 273 93 32`,
//         id: 3
//     },
//     {
//         img: user4,
//         name: `Elizabeth`,
//         jobPostion: `Frontend developer`,
//         email: `elisabet.frontend@gmail.com`,
//         tel: `+380 (095) 924 66 37`,
//         id: 4
//     },
//     {
//         img: user5,
//         name: `Alexander`,
//         jobPostion: `Backend developer`,
//         email: `alexander.deckend@gmail.com`,
//         tel: `+380 (050) 789 24 09`,
//         id: 5
//     },
//     {
//         img: user6,
//         name: `Mason`,
//         jobPostion: `QA`,
//         email: `mason.qa2gmail.com`,
//         tel: `+380 `,
//         id: 6
//     },
// ]

interface Props {
    store: Store
  }

@observer
class Section5 extends Component <Props> {

    componentDidMount() {
        this.props.store.getUsers()
    }

    getUsers = () => {
        console.log("Here we go")
        this.props.store.getUsers()
    }

    showEmployee = (arr: PersonData[]) => {
        return arr.map((person) => {
            return <UserProfile person={person} key={person.id}/>    
        })
    }

    render() {
        const userMap = this.showEmployee(this.props.store.userList)
        return <>
            <section className="section5">
                <div className="contaoner">
                    <div className="content-wrapper">
                        <h2 className="title">Our cheerful users</h2>
                        <p className="section5-p1">Attention! Sorting users by registration date</p>
                        <div className="grid-wrapper">
                            {userMap}
                        </div>
                        <button className="btn-show-more"
                        onClick={this.getUsers}>
                            Show more
                        </button>
                    </div>
                </div>
            </section>
        </>
    }
}

export default Section5