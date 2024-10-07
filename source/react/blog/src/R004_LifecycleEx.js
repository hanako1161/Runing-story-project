import React, { Component } from "react";

class R004_LifecycleEx extends Component {
    render(){
        console.log('3. render Call');
        return (
            <h2>render(), constructor(), getDerivedStateFromProps(),
                componentDidMount() 함수들을 Component 의 '생성'과정에 속한다
            </h2>
        )
    }
}

export default R004_LifecycleEx;