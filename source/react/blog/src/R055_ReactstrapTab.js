import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

class R055_ReactstrapTab extends Component {
    constructor (props) {
        super(props);
        this.state = { TabState:'React' }
    }

    tabToggle = (tabnum) => {
        if(this.state.TabState !== tabnum) this.setState({TabState:tabnum});
    }

    render() {
        return (
            <>
                <Nav tabs>
                    <NavItem>
                        <NavLink onClick={() => { this.tabToggle('React'); }}
                        style={{ cursor: 'pointer', color: this.state.TabState === 'React' ? 'orange' : 'black', backgroundColor: this.state.TabState === 'React' ? '#007bff' : '#fff' }}
                        >First Tab</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => { this.tabToggle('200'); }}
                        style={{ cursor: 'pointer', color: this.state.TabState === '200' ? 'orange' : 'black', backgroundColor: this.state.TabState === '200' ? '#007bff' : '#fff' }}
                        >Second Tab</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.TabState}>
                    <TabPane tabId="React"><h3>React</h3></TabPane>
                    <TabPane tabId="200"><h3>200</h3></TabPane>
                </TabContent>
            </>
        )
    }
}

export default R055_ReactstrapTab;