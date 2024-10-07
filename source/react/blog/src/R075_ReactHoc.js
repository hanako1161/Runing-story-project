import React, { Component } from 'react';
import witHocComponent from "./Hoc/withHocComponent";

class R075_ReactHoc extends Component {
    render() {
        console.log('2. R075_ReactHoc HoicComponent render')
        return (
            <h2>props.name : {this.props.name}</h2>
        )
    }
}
// export default R075_ReactHoc;
export default witHocComponent(R075_ReactHoc, 'ReactHoc');