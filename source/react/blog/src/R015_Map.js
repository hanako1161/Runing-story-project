import React, { Component } from "react";

class R015_Map extends Component {
    
    componentDidMount() {
        var Map_Arr = [ 3, 2, 8, 8 ]
        var Map_newArr = Map_Arr.map(x => x)
        console.log("1. Map_newArr : ["+Map_newArr+"]")
        
        let Map_multiArr = Map_Arr.map(x => x * 2)
        console.log("2. Map_multiArr : ["+Map_multiArr+"]")

        var objArray = [{key:'react', value:'200'},   
                        {key:'리액트', value:'TwoHundred'}]; 
                        
        let Map_objArr = objArray.map((obj, index) => {
            console.log((index+3)+". obj : "+JSON.stringify(obj))
            var Obj = {};
            Obj[obj.key] = obj.value;
            return Obj;
        });
        console.log("5. Map_objArr : "+JSON.stringify(Map_objArr))
    }

    render() {  
        return (
            <h2>* map : 순번과 배열 크기 변수 사용하지 않고 사용하는 배열 함수. return 사용해서 반환 값을 받음</h2>
        )
    }
}

// 화면 표출 역할
export default R015_Map;

