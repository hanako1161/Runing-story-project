import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
//원하는 구역으로 이동
class R036_ReactstrapBreadcrumbs extends Component {
    render() {
        return (
            // <div id="top">
            //     <Breadcrumb tag="nav" listTag="div">
            //         <BreadcrumbItem tag="a" href="#top">Go_top</BreadcrumbItem>
            //         <BreadcrumbItem tag="a" href="#bottom">Go_bottom</BreadcrumbItem>
            //     </Breadcrumb>
            //     <div id="bottom" style={{marginTop:"1000px"}}>
            //         <span>bottom</span>
            //     </div>
            // </div>

            <div id="home">
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="#home">Home</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#about">About</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#contact">Contact</BreadcrumbItem>
                </Breadcrumb>
                <div id="home" style={{ padding: "100px 0", height: "500px", backgroundColor: "#f8f9fa", color:"black" }}>
                    <h2>Home Section</h2>
                    <p>This is the home section content.</p>
                </div>
                <div id="about" style={{ padding: "100px 0", height: "500px", backgroundColor: "#e9ecef", color:"black" }}>
                    <h2>About Section</h2>
                    <p>This is the about section content.</p>
                </div>
                <div id="contact" style={{ padding: "100px 0", height: "500px", backgroundColor: "#dee2e6", color:"black" }}>
                    <h2>Contact Section</h2>
                    <p>This is the contact section content.</p>
                </div>
            </div>
        )
    }
}

export default R036_ReactstrapBreadcrumbs;