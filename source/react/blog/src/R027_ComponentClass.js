import React, {Component} from "react";
//28번 넘어가기

class R027_ComponentClass extends Component { 
    constructor (props) { 
        super(props);
        this.state = {
            StateString: 'react',
            StateArrayObj:['react', { react:'200'}] //0번째 인덱스에는 리액트 1번인덱스에는 객체가 들어가있음 200
        }
    }

    buttonclick = (type) => {
        // 값과같니? ===의미
        if(type === 'String'){
            this.setState({ StateString: 'react'});
        }else{
            this.setState({ StateArrayObj: ['react1', {react: '2001'}] });
        //어레이 오브제이라는 데이터를 변경한후에 랜더를 콜 1번인덱스 리액트1로 2번인덱스는 2001로 변경
        }
    }

    render() {
        console.log('render() 실행')
        return (
            <div>
                <button onClick={e => this.buttonclick('String')}>문자열 변경</button>
                <button onClick={e => this.buttonclick('ArrayObject')}>객체 배열 변경</button>
                <h2>[문자열 변경하기] StateString : {this.state.StateString}</h2>
                <h2>[객체 배열 변경하기] StateArrayObj : {JSON.stringify(this.state.StateArrayObj)}</h2>
            </div>
        )
    }
}
export default R027_ComponentClass;