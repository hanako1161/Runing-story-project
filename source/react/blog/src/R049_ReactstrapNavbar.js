import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class R048_ReactstrapModal extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: false }
    }
    
    navBarToggle = () => {
        this.setState({collapsed: !this.state.collapsed})
    }

    render() {
        return (
            <>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">HOME</NavbarBrand>
                    <NavbarToggler onClick={this.navBarToggle} className="mr-2" /> 
                    <Collapse isOpen={this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="#"><h2>react</h2></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="http://www.daum.net/"><h2>200</h2></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        )
    }
}

export default R048_ReactstrapModal;