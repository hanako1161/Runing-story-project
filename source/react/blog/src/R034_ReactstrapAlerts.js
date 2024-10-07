import React, { Component } from 'react';
import { Alert, UncontrolledAlert } from 'reactstrap';

class R034_ReactstrapAlerts extends Component {
    render() {
        return (
        <div>
            <Alert color="light">
                Simple Aler (기본 알림) [color : light]
            </Alert>
            <UncontrolledAlert color="primary">
                Uncontrolled Alert (기본 + 삭제 기능 알림) [color : primary]
            </UncontrolledAlert>
            <UncontrolledAlert color="secondary">
                Uncontrolled Alert (기본 + 삭제 기능 알림) [color : secondary]
            </UncontrolledAlert>
            <UncontrolledAlert color="success">
                Uncontrolled Alert (기본 + 삭제 기능 알림) [color : success]
            </UncontrolledAlert>
            <UncontrolledAlert color="danger">
                Uncontrolled Alert (기본 + 삭제 기능 알림) [color : danger]
            </UncontrolledAlert>
            <UncontrolledAlert color="warning">
                Uncontrolled Alert (기본 + 삭제 기능 알림) [color : warning]
            </UncontrolledAlert>
            <UncontrolledAlert color="info">
                Uncontrolled Alert (기본 + 삭제 기능 알림) [color : info]
            </UncontrolledAlert>
            <UncontrolledAlert color="light">
                Uncontrolled Alert (기본 + 삭제 기능 알림) [color : light]
            </UncontrolledAlert>
            <UncontrolledAlert color="dark">
                Uncontrolled Alert (기본 + 삭제 기능 알림) [color : dark]
            </UncontrolledAlert>
        </div>
        )
    }
}

export default R034_ReactstrapAlerts;