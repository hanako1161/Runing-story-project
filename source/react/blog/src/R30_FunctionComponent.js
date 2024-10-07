import React, {Component} from "react";


function R30_FunctionComponent(props){
    let { contents } = props;
    return (
        <div>
            <h2>{contents} state가 없고 생명주기 함수를 사용할 수 없다</h2>
            <h2>props와 context를 파라미터로 전달받아 사용한다</h2>
            <h2>render() 함수가 없으므로 return 만 사용해 화면을 그려준다</h2>
        </div>
    )
}

export default R30_FunctionComponent;