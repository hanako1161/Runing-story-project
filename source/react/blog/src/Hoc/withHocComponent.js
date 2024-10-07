
import React, { Component } from "react";
// 익스포트 란 아이는 승인 받고 써야함 아 쓰지말아야겠다

export default function witHocComponent(InComponent, InComponentName) {
    return class OutComponent extends React.Component {
        componentDidMount () {
            console.log('3 OutComponentName : ${InComponentName}')
        }
        render () {
            console.log('1. OutComponent InComponent render')
            // const cProps = this.props;
            // return (<InComponent props={cProps}/>)
            return (<InComponent {...this.props}/>)
        }
    }
}