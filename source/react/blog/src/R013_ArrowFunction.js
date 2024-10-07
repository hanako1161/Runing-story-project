import React, { Component } from "react";

class R013_ArrowFunction extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            arrowFuc: 'React200',
            num: 3
        }; 
    }

    componentDidMount() {
        Function(1);
        this.function2(1,1);
        this.function3();
        this.function4();
        this.function5(0,2,3);

        function Function1(num1) {
            return console.log(num1+'. Es5 Function');
        }
    }
    Function2 = (num1,num2) => {
        let num3 = num1 + num2;
        console.log(num3+'. Arrow Function : '+this.state.arrowFuc);
    }

    Function3() {
        var this_bind = this;
        setTimeout(function() {
            console.log(this_bind.state.num+'.Es5 Callback Function noBind : ');
        //     console.log(this.state.arrowFuc);
        //     console.log(this.state.arrowFuc)
        },100);
    }
    
    Function4() {
        setTimeout(function() {
            console.log('4. Es5 Callback Function Bind :'+this.state.arrowFuc);
        }.bind(this),100);
    }

    Function5 = (num1, num2, num3) => {
        const num4 = num1 + num2 + num3;
        setTimeout(() => {
            console.log(num4+'. Arrow Callback Function : '+this.state.arrowFuc);
        },100);
    }

    render() {  
        return (
            <div>
                <h2>
                화살표 함수는 function 대신 = 문자열을 사용하며 return 문자열 생략 가능
                </h2>
                <h2>
                화살표 함수에서는 this 를 bind 해 주지 않아도 this 를 컴포넌트로 사용해
                state 변수에 접근이 가능
                </h2>
                </div>
        );
    }
}

// 화면 표출 역할
export default R013_ArrowFunction;