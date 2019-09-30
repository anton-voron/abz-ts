import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

class InputState {

    @observable
    value: number = 0
    
     @action
     onChange = (): void => {
         console.log(this.value)
         this.value++
    }
}

const props = new InputState()


interface Iprops {
    InputState: InputState
}


@observer
class App extends Component<Iprops> {

    handleInc = (): void => {
        this.props.InputState.onChange()
    }
    render(){
        return<>
            <h1 className="title">{this.props.InputState.value}</h1>
            <button onClick={this.handleInc}>+1</button>
        </>
    }
}

// ReactDOM.render(<App InputState={props}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
