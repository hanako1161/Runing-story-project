import React, {useState, useEffect} from "react";


function R031_ReactHook(props){
    const [contents, setContents] = useState('useState() 함수로 state 변수값을 선언 및 할당합니다.');

    useEffect(() =>{
        console.log('useEffect: componentDidMount() 와 같은 순서로 실행이 됩니다. 최초 페이지 로딩 될때 한번 실행됩니다')
    });

    console.log('-----------1')
    return (
        <div style={{padding: "0px"}}>
            <h2>{contents}</h2>
            <button onClick={() => setContents('Hook 기능 사용합니다')}>버튼</button>
        </div>
    )
}

export default R031_ReactHook;
//많이 어려운구간