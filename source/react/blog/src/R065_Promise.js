import React, { Component } from 'react';


class R065_Promise extends Component {
    componentDidMount (){ 
        new Promise((resolve, reject) => {
        reject(Error("ERROR Into"));
        //resolve('이행')
        })
        .then(result => console.log("then"+result))
        .catch(result => console.log("catch : "+result));
        }
    
    render() {
        return (
            <h1>Promise</h1>
        )
    }
}

export default R065_Promise;