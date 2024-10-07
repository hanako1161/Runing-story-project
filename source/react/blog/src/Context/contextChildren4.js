import React from 'react'
import {Consumer}  from "./R077_ContextApi";

class contextChildren4 extends React.Component {
    render () {
        console.log("----------------4")
        return (
            <Consumer>
                {contextValue=>
                    <button onClick={e => contextValue.setStateFunc("react200")}>
                        {contextValue.name}_button
                    </button>
                }
            </Consumer>
        )
    }
}
export default contextChildren4