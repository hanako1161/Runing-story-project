import React, { Component } from 'react';

class R20_akdk extends Component {
    
    render() {
    const elInputUsername = document.querySelector("#username");
    const elSuccessMessage = document.querySelector("#username");
    const elFailureMessage = document.querySelector("#username");
    const password1 = document.querySelector("#username");
    const elInputUsername = document.querySelector("#username");
    const elInputUsername = document.querySelector("#username");
        
    const userName = document.querySelector('#username')
        userName.onclick = () => {
	    console.log('안녕하세요') //
        }
        function isMoreThan4Length(value) {
            return value.length < 4;
        }
        
        elInputUsername.onkeyup = () => {
            if (isMoreThan4Length(elInputUsername.value)) {
            elSuccessMessage.classList.add("hide");
            elFailureMessage.classList.remove("hide");
            } else {
            elSuccessMessage.classList.remove("hide");
            elFailureMessage.classList.add("hide");
            }
            function isMatch(password1, password2) {
                return password1 === password2 ? true : false;
            }
            
            password2.onkeyup = () => {
            console.log(password2.value);
            if (!isMatch(password1.value, password2.value)) {
                elMissmatchMessage.classList.remove("hide");
            } else {
                elMissmatchMessage.classList.add("hide");
            }
            };
        };
    }
}

export default R20_akdk;
