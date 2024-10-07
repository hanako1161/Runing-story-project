import React, {Component} from "react";

class R019_PropsDatatype extends Component { 

    render(){
        let { 
            BooleanTrueFalse
        } = this.props
        return (
        <div style={{padding: "0px"}}><h2>
            {BooleanTrueFalse ? '2. ': '1.'}
            {BooleanTrueFalse.toString()} 
        </h2></div>
        )
    }
}

export default R019_PropsDatatype;