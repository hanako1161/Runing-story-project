import React, { Component } from 'react';


class R072_onSubmit extends Component {
    SubmitFunction(e) {
        var inputValue = document.getElementById("inputId").value;
        console.log("inputValue : " +inputValue);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.SubmitFunction}>
                <input type="text" name="inputName" id="inputID"/>
                <input type="sumbit" defaultValue="Sumbit"/>
            </form>
        
        )
    }
}

export default R072_onSubmit;