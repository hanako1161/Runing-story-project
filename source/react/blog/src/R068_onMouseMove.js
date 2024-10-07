import React, { Component } from 'react';

class R068_onMouseMove extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectBackgroundColor: 'white'
        };
    }

    MouseMove(tag) {
        console.log('TAG : '+tag);
        if (tag === 'select') {
            this.setState({selectBackgroundColor: 'pink'});
        } else {
            this.setState({selectBackgroundColor: 'white'});
        }
    }

    render() {
        return (
            <>
                <div onMouseMove={e => this.MouseMove("div")}>
                <h3>DIV onMouseMove</h3>
                </div>
                <input type="text" onMouseMove={e => this.MouseMove("input")}/>
                <select onMouseMove={e => this.MouseMove("select")}
                style={{backgroundColor: this.state.selectBackgroundColor}}
                >
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </>
        )
    }
}

export default R068_onMouseMove;