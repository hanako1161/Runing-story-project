import React, { Component } from 'react';
// 이렇게 어렵게 코딩하긴 싫어서 잘 안쓰는 로직 이 로직을 커링함수라고 하는데 커링함수를 리액트에서 사용하는걸 본적이없음

class R074_ReactCurrying extends Component {
    plusNumOrString(c, d){
        return c + d;
    }
    plusFunc1(a){
        return function(b) {
            return this.plusNumOrString(a, b)
        }.bind(this)
    }

    PlusFunc2 = a => b => this.plusNumOrString(a, b)

    PlusFunc(a){
        return this.plusFunc1(a)(200)
    }

    render() {
        return (
            <>
                <input type="button" value="NumberPlus"onClick={e => alert(this.PlusFunc(100))}/>
                <input type="button" value="StringPlus"
                onClick={e => alert(this.PlusFunc("react"))}/>
            </>
        )
    }
}

export default R074_ReactCurrying;