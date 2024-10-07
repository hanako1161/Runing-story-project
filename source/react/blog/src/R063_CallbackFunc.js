import React, { Component } from 'react';


class R063_CallbackFunc extends Component {
    componentDidMount (){ 
        this.logPrint(1, function(return1){
            console.log("return1 : "+return1);
            this.logPrint(return1, function(return2){
                console.log("return2 : "+return2);
            })
    }.bind(this));
    
    let retValue = this.logPrint2(1);
    console.log(" 1retValue"+retValue);
    retValue = this.logPrint2(retValue);
    console.log(" 2retValue"+retValue);;
}
logPrint(param, callback) {
    console.log("logPrint param : "+param);
    param += param
    callback(param);
}

logPrint2(param) {
    console.log("logPrint param : "+param);
    param += param;
    return param;
}
    render() {
        return (
            <h1>Callback Function</h1>
        )
    }
}

export default R063_CallbackFunc;