import React, { Component } from 'react';
import { Form, Label, Input, Row, Col, FormGroup } from 'reactstrap';

class R044_ReactstrapForm extends Component {
    render() {
        return (
            <Form>
                <Label for="exampleGender">gender</Label>
                <Input type="select" bsSize="sm">
                    <option>no select</option>
                    <option>woman</option>
                    <option>man</option>
                </Input>
                <Row form>
                    {/* 사이즈종류 md xs sm lg xl */}
                    <Col md={6}> 
                        <FormGroup>
                            <Label for="exampleAddress">address</Label>
                            <Input type="text" name="address" id="address" placeholder="천안시" required/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleMobile">mobile</Label>
                            <Input type="tel" name="mobile" id="mobile"/>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleAge">age</Label>
                            <Input type="number" name="age" id="age"/>
                        </FormGroup>
                    </Col>
                </Row>

                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="password" required/>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="email" />
                </FormGroup>

            </Form>
        )}
}

export default R044_ReactstrapForm;
