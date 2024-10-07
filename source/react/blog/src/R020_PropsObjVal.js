import React, { Component } from 'react';
import datatype from 'prop-types';

class R020_PropsObjVal extends Component { 
    render() {
        let {
            ObjectJson2
        } = this.props
        return (
        <div style={{padding: "0px"}}>
            <h2>{JSON.stringify(ObjectJson2)}</h2>
            </div>
        )
    }
}


R020_PropsObjVal.propTypes = {
    ObjectJson: datatype.shape({
        react: datatype.string,
        twohundred: datatype.number
    })
}

export default R020_PropsObjVal;