import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

//특정영역을 펼치고 숨기는 기능
class R042_ReactstrapCollapse extends Component {
    render(){
        return(
            <div>
                <Button color="warning" id= "toggle2">
                    펼치기/접기
                </Button>
                <UncontrolledCollapse toggler='#toggle2'>
                    <Card>
                        <CardBody>
                            REACT 200
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        )
    }
}

export default R042_ReactstrapCollapse;