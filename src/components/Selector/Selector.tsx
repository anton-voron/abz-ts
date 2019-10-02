import React, { Component } from 'react'
import Store from '../../store'
import { observer } from 'mobx-react'
import './Selector.sass'
import { toJS } from 'mobx'
import { IPositions } from '../../store' 

interface Props {
    store: Store
}

@observer
class Selector extends Component<Props>{

    state = {
        positions: []
    }

    componentDidMount(){
        this.updatePositions()
    }

    updatePositions = async () => {
        return await this.props.store.getPosition()
    }

    showPositions = (arr: IPositions[]) => {
        return arr.map(item => {
            const { id, name } = item
            return<>
                <option value={id} key={id}>
                    {name}
                </option>
            </>
        })
    }

    handleSelect = (evt: any): void => {
        const { onSelectChange } = this.props.store
        const value: string = evt.target.value
        onSelectChange(value)
    }


    render() {
        const res = this.showPositions(this.props.store.positions)
        return <>
            <select value={this.props.store.data.position_id} onChange={this.handleSelect} className="selector">
                {res}
            </select>
        </>
    }
}

export default Selector