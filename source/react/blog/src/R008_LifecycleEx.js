import React, { Component } from "react";

class R008_LifecycleEx extends Component {
    
    constructor(props) {
        super(props);
        this.state ={};
        console.log('1. constructor Call');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call:'+props.prop_value);
        return {tmp_state:props.prop_value};
    }

    componentDidMount(){
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : '+this.state.tmp_state);
        this.setState({tmp_state2 : true});
    }

    shouldComponentUpdate(props,state) {
        console.log('6.shouldComponentUpdate Call/ tmp_state2 ='+state.tmp_state2);
        return state.tmp_state2;
    }

    render() {  
        console.log('3. render Call');
        return (
            <h2>shouldComponentUpdate() 함수는 component 의 '변경' 과정에 속한다.
                변경이랑 props나 state 의 변경을 말한다.
                componentDidMount() 함수는 생성 단계의 생명주기 함수 중 가장 
                마지막으로 실행된다.
                setState() 함수는 변수의 선언과 초기화를 동시에 실행한다
                componentDidMount() 함수에서 this.setState(~) 때문에
                변경이 일어났으므로 shouldComponentUpdate() 함수가 실행된다
            </h2>
        )
    }
}
 //화면표출 역할 render
export default R008_LifecycleEx;

