import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count : 0};

        this.increment = this.increment.bind(this);
        console.log('1. constructor Call');
    }

    increment() {
        console.log('increment Call');
        this.setState({count : this.state.count +1});
    }

    render() {
        console.log('3. render Call');
        return (
            <div>
                <h1>카운터: {this.state.count}</h1>
                <button onClick={this.increment}>증가</button>
            </div>
        );
    }
}

// 화면 표출 역할
export default Counter;