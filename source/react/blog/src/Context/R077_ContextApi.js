import React from 'react'
import Children  from "./contextChildren4";

const {Provider, Consumer} = React.createContext()
export {Consumer}

class R077_ContextApi extends React.Component {
    constructor (props) {
        console.log("----------------1")
        super(props);
        this.setStateFunc = this.setStateFunc.bind(this)
    }

    setStateFunc(value) {
        console.log("----------------3")
        this.setState({name : value});
    }

    render () {
        console.log("----------------2")
        const content = {
            ...this.state,
            setStateFunc: this.setStateFunc
        }
        return (
            <Provider value={content}>
                <Children />
            </Provider>
        )
    }
}
export default R077_ContextApi