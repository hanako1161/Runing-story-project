import React, { Component } from "react";

class R014_ForEach extends Component {
    

    componentDidMount() {
        var Es5_Arr = [3, 2, 8, 8];
        var Es5_NewArr = [];

        for (var i = 0; i < Es5_Arr.length; i++) {
            Es5_NewArr.push(Es5_Arr[i]);
        }
        console.log("1. Es5_NewArr : |" +Es5_NewArr+"]")
    
        var Es6_Arr = [ 3,3,9,8]
        var Es6_newArr = []
        Es6_Arr.forEach((result) => {
            Es6_newArr.push(result)
        })
        console.log("2. Es6_newArr : ["+Es6_newArr+"]")
    }

    render() {  
        return (
        <div>
            <h2>
                forEach : 순번과 배열의 크기 정보 사용하지 않음. 부터 배열의 크기만큼 반복하여 순서대로 배열 값을 반환</h2><h2>
                for : 순번 변수와 배열의 크기를 사용해서 배열 순번에 접근하여 값을 가지고 옴
            </h2>
        </div>
        );
    }
}

// 화면 표출 역할
export default R014_ForEach;

