import React, { Component } from "react";

class R006_LifecycleEx extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }
    
    static getDerivedStateFromProps(props,state) {
        console.log('2. getDerivedStateFromProps Call'+props.prop_value);
        return {};
    }

    render() {
        console.log('3. render Call');
        return (
            <div> 
            <h2>getDerivedStateFromProps(props, state) 함수는
            constructor() 함수 다음으로 실행된다. 컴포넌트가 새로운 props를 
            받게 되었을 때 state를 변경해 준다</h2>
            <p>prop_value : {this.props.prop_value}</p>
            </div>
        )
    }
}

export default R006_LifecycleEx;