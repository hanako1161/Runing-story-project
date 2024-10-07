import React, { Component } from 'react';
import { InputGroup, InputGroupText, Input, Button } from 'reactstrap';

class R045_ReactstrapInputGroup extends Component {
    render() {
        return (
            <>
                <InputGroup>
                    <Input placeholder="userid" />
                    <InputGroupText style={{ backgroundColor: 'lightgrey' }}>@reactmail.com</InputGroupText>
                </InputGroup>
                <InputGroup>
                    <InputGroupText><Button>버튼</Button></InputGroupText>
                    <Input />
                </InputGroup>
            </>
        )}
}

export default R045_ReactstrapInputGroup;