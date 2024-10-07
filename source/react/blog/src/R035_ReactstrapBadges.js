import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

class R035_ReactstrapBadges extends Component {
    render() {
        return (
        <div>
            <h1>PRODUCT NAME &nbsp;
                <Badge color="primary">new</Badge>&nbsp;
                <Badge color="secondary">hit</Badge>&nbsp;
                <Badge color="info">sale</Badge>
            </h1>
            <Button color="info" outline>
                Accessor <Badge color="dark">4</Badge>
            </Button>&nbsp;
            <Badge color="danger" pill>pill</Badge>&nbsp;
            <Badge href="http://www.daum.net/" color="primary">GoLink(daum)</Badge>
        </div>
        )
    }
}

export default R035_ReactstrapBadges;