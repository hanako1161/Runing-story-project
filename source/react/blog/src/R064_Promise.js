import React, { Component } from 'react';


class R064_Promise extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = { cTime:0 }
    // }
    //선생님도 어려운듯 then x = 대기 then 이행 catch 거부(예외처리=Error)가낫을때 Exception 라고도함 
    //throw 나 catch 둘중하나로 오류해결
    componentDidMount (){ 
        let cTime = new Date();
        console.log("1초:"+cTime.getSeconds()+"."+cTime.getMilliseconds());
            // console.log(cTime.getMilliseconds());
        new Promise(resolve  => {
            setTimeout(function() {
                let cTime = new Date();
                console.log("2초:"+cTime.getSeconds()+"."+cTime.getMilliseconds());
                resolve('react');
            }, 2000);    
        })
        .then(function(result) {
            let cTime = new Date();
            console.log("3초:"+cTime.getSeconds()+"."+cTime.getMilliseconds());
            console.log(result);
            return result + 200;
        })
        .then(result => {
            let cTime = new Date();
            console.log("4초:"+cTime.getSeconds()+"."+cTime.getMilliseconds());
            console.log(result);
        })
    }
    render() {
        return (
            <h1>Promise</h1>
        )
    }
}

export default R064_Promise;