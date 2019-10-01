import React, { Component } from 'react'
import './Input.sass'
import { observer } from 'mobx-react'


@observer
class Intut extends Component<{store: any, name: string, placeholder: string}> {

    onChange = (evt: any): void => {
        const { onFiledChange } = this.props.store
        const name: string = evt.target.name
        const value: string = evt.target.value 
        onFiledChange(name, value)
    }

    render() {
    const { store, name, placeholder } = this.props
    const { data } = store 
    return <>
        <fieldset className="fieldset-wrapper">
            <legend className="fieldset-name">{name}</legend>
            <input
                className="input" 
                name={name} 
                type='text'
                value={data[name]}
                onInput={this.onChange}
                placeholder={placeholder}/>
        </fieldset>
    </>
    }
}

export default Intut