import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';


class R038_ReactstrapButtonGroup extends Component {
    constructor (props) {
        super(props);
        this.state = { number: 10 }
    }
    
    move = (type, a) => {
        if(type === 'Left'){
            this.setState({number: this.state.number - 1})
        }else if(type === 'Right')(
            this.setState({number: this.state.number + 1})
        )
    }
    //타입에 레프트 적용 셋스테이트끝나면 랜더 호출
    render() {
        return (
            <div style={{padding: "0px"}}>
                <ButtonGroup style={{padding: "0px"}}>
                    <Button onClick={e => this.move('Left')}>빼기</Button>
                    <Button onClick={e => this.move('Middle')}>그대로</Button>
                    <Button onClick={e => this.move('Right')}>더하기</Button>
                </ButtonGroup>
                <br/>{this.state.number}
            </div>
        )
    }
}

export default R038_ReactstrapButtonGroup;