import React, { Component } from "react";

class R012_ClassPrototype extends Component {
    
    constructor(props) {
        console.log('1. constructor Call');
        super(props);
        this.state = {}; 
    }

    componentDidMount() {
        console.log('4. componentDidMount Call');

        // ES5 prototype
        var ExamCountFunc = (function () {
            function ExamCount(num) {
                this.number = num;
            }      
            ExamCount.prototype.showNum = function() {
                console.log('1. react_' + this.number);
            };
            return ExamCount;
        }());
        
        var cnt = new ExamCountFunc('200');
        cnt.showNum();

        // ES6 class
        class ExamCountClass {
            constructor(num2) {
                this.number2 = num2;
            }
            showNum() {
                console.log(`2. react_${this.number2}`);
            }
        }

        var cnt2 = new ExamCountClass('2hundred');
        cnt2.showNum();
    }

    render() {  
        console.log('3. render Call');
        return (
            <div>
                <h2>* ES5 - prototype 으로 객체 구현</h2>
                <h2>* ES6 - class 으로 객체 구현</h2>
            </div>
        );
    }
}

// 화면 표출 역할
export default R012_ClassPrototype;

//즉시실행 함수, ex6형태