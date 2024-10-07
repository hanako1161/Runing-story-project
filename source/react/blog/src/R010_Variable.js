import React, { Component } from "react";

class R010_Variable extends Component {
    
    // 항상1번은 constructor
    constructor(props) {
        console.log('1. constructor Call');
        super(props);
        this.state = {}; //3 render 2번째로 추출
    }
    componentDidMount() {
        console.log(`4.componentDidMount Call`); //3번째 추출
        var varName = 'react';
        console.log('varName1:'+varName);

        var varName = '200';
        console.log('varName2:'+varName);
        
        let letName = 'react';
        console.log('letName1:'+letName);
        
        //let letName = 'react'; 변수사용할때 let 사용
        letName = '200';
        console.log('letName2:'+letName);

        const constName = 'react';
        console.log('constName1:'+constName);
        // const constName = '200';
        // constName = '200';
        }

    render() {  
        console.log('3. render Call');
        return (
            <div>
            <h2>var 는 유연한 방식으로 변수를 재선언, 재할당 가능</h2>
            <h2>let 는 재선언 불가능, 재할당 가능</h2>
            <h2>const 는 재선언, 재할당 불가능</h2>
        </div>
        )
    }
}
 //화면표출 역할 render
export default R010_Variable;

