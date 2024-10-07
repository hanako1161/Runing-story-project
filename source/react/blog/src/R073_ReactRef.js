import React, { Component } from 'react';

class R073_ReactRef extends Component {
    constructor(props) {
        super(props);
        this.InputRef = React.createRef();
    }

    RefFocus = (e) => {
        this.InputRef.current.focus();
        this.InputRef.current.value = 2;
    }

    JavascriptFocus() {
        document.getElementById('id').focus();
        document.getElementById('id').value = 1;
    }

    render() {
        return (
            <>
                <input id="id" type="text" ref={this.InputRef} />
                <input type="button" value="Ref Focus" onClick={this.RefFocus}/>
                <input type="button" value="Javascript Focus" onClick={this.JavascriptFocus}/>
            </>
        )
    }
}

export default R073_ReactRef;