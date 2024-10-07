import React, { Component } from "react";

class R011_SpreadOperator extends Component {
    
    // 항상 1번은 constructor
    constructor(props) {
        console.log('1. constructor Call');
        super(props);
        this.state = {}; // 초기 상태 설정
    }

    componentDidMount() {
        console.log(`4. componentDidMount Call`); // 3번째 추출
        var varArray1 = ['num1', 'num2'];
        var varArray2 = ['num3', 'num4'];
        // 배열 합치기
        var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
        console.log('1. sumVarArr : '+sumVarArr);

        let sumLetArr = [...varArray1, ...varArray2];
        console.log('2. sumLetArr: ' + sumLetArr);
        
        const [sum1, sum2, ...remain] = sumLetArr;
        console.log('3. sum1: ' + sum1 + ', sum2: ' + sum2 + ', remain: ' + remain);

        var varObj1 = { key1: 'val1', key2: 'val2' };
        var varObj2 = { key2: 'new2', key3: 'val3' };
        // 객체 합치기
        var sumVarObj = Object.assign({}, varObj1, varObj2);
        console.log('4. sumVarObj: ' + JSON.stringify(sumVarObj));

        var sumLetObj = { ...varObj1, ...varObj2 };
        console.log('5. sumLetObj: ' + JSON.stringify(sumLetObj));

        var { key1, key3, ...others } = sumLetObj;
        console.log('6. key1: ' + key1 + ', key3: ' + key3 + ', others: ' + JSON.stringify(others));
    }

    render() {  
        console.log('3. render Call');
        return (
            <div>
                <h2>* var varArray1 = ['num1', 'num2'] : 배열 선언, 초기값 설정</h2> 
                <h2>* ... 전개 연산자 : 배열명 앞에 붙여 여러 개의 배열을 합칠 수 있다</h2>
            </div>
        );
    }
}

// 화면 표출 역할
export default R011_SpreadOperator;
