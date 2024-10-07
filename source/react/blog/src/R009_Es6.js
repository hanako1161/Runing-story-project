import React, { Component } from "react";

class R009_Es6 extends Component {
    
    // 항상1번은 constructor
    constructor(props) {
        super(props);
        this.state = {}; //3 render 2번째로 추출
        console.log('1. constructor Call');
    }
    componentDidMount(){
        console.log(`4.componentDidMount Call`); //3번째 추출
        var jsString1 = '자바스크립트';
        var jsString2 = '입니다\n다음 줄 입니다';
        console.log(jsString1+'문자열'+jsString2+'~');

        var Es6String1 = 'Es6'
        var Es6String2 = '입니다'
        console.log(`${Es6String1} 문자열${Es6String2}!!
    다음 줄 입니다`);

    var LongString = "ES6에 추가된 String 함수들입니다.";
    console.log('startsWith:'+LongString.startsWith("ES6에 추가"));
    console.log('endsWith : '+LongString.endsWith("함수들입니다."));
    console.log('includes:'+LongString.includes("추가된 String"));
    }

    render() {  
        console.log('3. render Call');
        return (
            <h2>+: 문자열 연결, `(백틱) 으로 전체 문자열과 변수를 묶어서 사용.
            startsWith, endsWith, includes 는 ES6에 추가된 String() 함수
            startsWith:변수 앞에서 일치하는 문자열이 있는지 찾는다.
            endsWith:변수 뒤에서 일치하는 문자열이 있는지 찾는다.
            includes:위치에 상관없이 변수에 특정 문자열이 포함돼 있는지 판단하여
            true, false 를 반환
        </h2>
        )
    }
}
 //화면표출 역할 render
export default R009_Es6;

