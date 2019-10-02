import React, { Component } from 'react'
import './Section5.sass'
import  Store  from '../../store'


import UserProfile from '../UserProfile/UserProfile'
import { PersonData } from '../../store'
import { observer } from 'mobx-react'


interface Props {
    store: Store
  }

@observer
class Section5 extends Component <Props> {

    state= {
        open: false
    }

    componentDidMount() {
        this.props.store.getUsers()
    }

    getUsers = () => {
        console.log("Here we go")
        this.props.store.getUsers()
    }

    noShowMore = () => {
        this.setState({
            open: !this.state.open
        })
        let numb
        this.state.open ? numb = 6 : numb = 12
        this.props.store.getUsers(numb)
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
                <div className="container">
                    <div className="content-wrapper">
                        <h2 className="title">Our cheerful users</h2>
                        <p className="section5-p1">Attention! Sorting users by registration date</p>
                        <div className="grid-wrapper">
                            {userMap}
                        </div>
                        <button className="btn-show-more"
                            onClick={this.noShowMore}>
                            Show more
                        </button>
                    </div>
                </div>
            </section>
        </>
    }
}

export default Section5