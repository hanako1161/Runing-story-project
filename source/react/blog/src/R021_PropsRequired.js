import React, {Component} from "react";
import datatype from 'prop-types';

class R021_PropsRequired extends Component { 

    render(){
        let {
            ReactString,ReactNumber
        } = this.props
        return (
            <div style={{padding: "0px"}}>
                <h2>{ReactString}{ReactNumber}</h2>
            </div>
        )
    }
}


R021_PropsRequired.propTypes = {
    ReactString: datatype.string.isRequired,
}

export default R021_PropsRequired;