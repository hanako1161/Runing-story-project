import React, { Component } from 'react';


class R071_Onkey extends Component {
    OnKey(event,e) {
        var val = e.target.value;
        console.log('even:'+event+",value:"+val);    
    }

    render() {
        return (
            <>
                onKeyDown: <input type="text" onKeyDown={e => this.OnKey("onKeyDown", e)}/><br/>
                {/* onKeyPress : <input type="text" onKeyPress={e} */}
                onKeyUp : <input type="text" onKeyUp={e => this.OnKey("onKeyUp", e)}/>
            </>
        )
    }
}

export default R071_Onkey;