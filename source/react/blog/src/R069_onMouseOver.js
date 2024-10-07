import React, { Component } from 'react';


class R069_onMouseOver extends Component {
    MouseOver(tag) {
        console.log('TAG : '+tag);
    }

    render() {
        return (
            <>
                <div onMouseOver={e => this.MouseOver("div")}>
                    <h3>DIV onMouseOver</h3>
                </div>
                <input type="text" onMouseOver={e => this.MouseOver("input")}/>
                <select onMouseOver={e => this.MouseOver("select")}>
                    <option value="react1">react</option>
                    <option value="react">200</option>
                    <option value="200">힘내세요</option>
                </select>
            </>
        )
    }
}

export default R069_onMouseOver;