import React, { Component } from 'react'
import './Input.sass'
import { observer } from 'mobx-react'


@observer
class Intut extends Component<{store: any, name: string, placeholder: string}> {

    onChange = (evt: any): void => {
        const { onFiledChange, textValidator} = this.props.store
        const name: string = evt.target.name
        const value: string = evt.target.value 
        onFiledChange(name, value)
        textValidator(name, value)
        
    }

    onBlure = (name: string, value: string) => {
        this.props.store.textValidator(name, value)
    }

    render() {
    const { store, name, placeholder } = this.props
    const { data, inputState } = store 
    let validator = inputState[name]
    let classNamez;
    validator ? classNamez = "fieldset-wrapper" : classNamez = "fieldset-wrapper-error"
    return <>
        <fieldset className={classNamez}>
            <legend className="fieldset-name">{name}</legend>
            <input
                className="input" 
                name={name} 
                type='text'
                value={data[name]}
                onInput={this.onChange}
                onBlur={() => this.onBlure(name, data[name])}
                placeholder={placeholder}/>
        </fieldset>
    </>
    }
}

export default Intut