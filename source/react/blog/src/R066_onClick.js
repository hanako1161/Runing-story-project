import React, { Component } from 'react';


class R066_onClick extends Component {
    buttonClick = (param) => {
        if(typeof param != 'string') param = "Click a"
        console.log('param : '+ param);
    }

    render() {
        return (
            <>
                <button onClick={e => this.buttonClick("Click button")}>Click button</button>
                <div onClick={e => this.buttonClick("Click div")}>Click div</div>
                {/* <a href="javascript:" onClick={this.buttonClick("a")}>Click a</a> */}
                {/* javascript 라고쓰는건 보안상 에러남 */}
                <a href="#" onClick={e => this.buttonClick()}>Click a</a>
            </>
        )
    }
}

export default R066_onClick;