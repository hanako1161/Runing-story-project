import React ,{ Component } from 'react';
import $ from 'jquery';

class R016_Jquery extends Component {

    input_alert = (e) => {
        var input_val = $('#inputId').val();
        alert("jquery 를 사용해서 가지고 온 inputID 값:"+input_val);

        var input_dom = document.getElementById('inputId').value;
        alert("dom 의 getElementById 사용해서 가지고 온 inputID 값:"+input_dom);
        
        var input_dom_name = document.getElementsByName('inputName')[0].value;
        alert("dom의 getElementsByName 사용해서 가지고 온 inputName 값:"+input_dom_name);
    }

render() {  
    return (
        <div>
        <h2>* jquery : 자바스크립트 라이브러리</h2>
        <input id="inputID" name="inputName"/>
        <button id="buttonID" onClick={e => this.input_alert(e)}>Jquery button</button>
        </div>
    )
}
}
export default R016_Jquery;