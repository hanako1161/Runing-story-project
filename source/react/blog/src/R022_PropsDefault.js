import React, {Component} from "react";
import datatype from 'prop-types';

class R022_PropsDefault extends Component { 

    render(){
        let { ReactString,ReactNumber } = this.props
        return (
            <div style={{padding: "0px"}}>
                <h2>{ReactString}_{ReactNumber}</h2>
            </div>
        )
    }
}


R022_PropsDefault.defaultProps = {
    ReactString: "리액트",
    ReactNumber: 0
}

export default R022_PropsDefault;