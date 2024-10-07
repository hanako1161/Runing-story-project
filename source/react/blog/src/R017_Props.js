import React ,{ Component } from 'react';


class R017_Props extends Component {
    render() {  
        let props_value = this.props.props_val;
        props_value += ' * props를 전달받은 자식 컴포넌트에서는 데이터를 수정할 수 없음'
        // this.props.props_val = '222222'; //이걸 넣으면 에러남
        return (
            <div><h2>{props_value}</h2></div>
        )
    }
}

export default R017_Props;