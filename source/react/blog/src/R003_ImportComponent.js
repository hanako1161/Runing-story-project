import React, { Component } from 'react';

class R003_ImportComponent extends Component {
    render() {
        const { title } = this.props; // props를 통해 제목을 받음

        return (
            <h2 style={{ color: 'blue', textAlign: 'center' }}>
                {title || "component란 특정 코드 뭉치를 다른 부분에 이식 재사용 하기 위해 사용하는 코드 블록"}
                [ THIS IS IMPORTED COMPONENT ]
            </h2>
        );
    }
}

export default R003_ImportComponent;
