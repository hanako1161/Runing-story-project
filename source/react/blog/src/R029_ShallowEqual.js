import React, { Component  } from 'react';
import { shallowEqualArrays} from "shallow-equal";

class R029_ShallowEqual extends Component  {
    constructor (props) {
        super(props);
        this.state = { 
            StateString: 'react',
            StateArrayObj: ['react', 200]
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('state 변경이 일어나면 shouldComponentUpdate 실행')
        console.log('this.state.StateArrayObj:'+JSON.stringify(this.state.StateArrayObj))
        console.log('nextState.StateArrayObj:'+JSON.stringify(nextState.StateArrayObj))
        let result = shallowEqualArrays(this.state.StateArrayObj, nextState.StateArrayObj)
        console.log('result:'+result)
        return !result

        // console.log('this.state.StateArrayObj:'+this.state.StateString)
        // console.log('nextState.StateArrayObj:'+nextState.StateString)
        // let result = shallowEqualArrays(this.state.StateString, nextState.StateString)
        // console.log('result:'+result)
        // return !shallowEqualArrays(this.state.StateString, nextState.StateString)
        //return !result
        //return !shallowEqualArrays(this.state, nextState)
    }

    componentDidMount(){
        console.log('4.componentDidMount() 실행')
        const object = { react : '200'};
        const Array1 = ['리액트', object];
        const Array2 = ['리액트', object];
        const Array3 = ['리액트', { react : '200'}];

        console.log('shallowEqualArrays(Array1, Array2) : ' + shallowEqualArrays(Array1, Array2));
        console.log('shallowEqualArrays(Array2, Array3) : ' + shallowEqualArrays(Array2, Array3));
        // this.setState({StateString : 'react2'})
        this.setState({StateArrayObj: ['react', 2001]})
    }

    render() {
        console.log('3.render() 실행')
        return (
            <div>
                <h2>StateString : {this.state.StateString}</h2>
            </div>
        )
    }
}

export default R029_ShallowEqual;