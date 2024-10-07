import React, { Component } from 'react';
import { Table } from 'reactstrap';

class R054_ReactstrapTable extends Component {
    render() {
        return (
            // <Table>
            // <Table>
            // <Table dark borderd>
            // <Table striped hover>
            // <Table borderless size="sm">
        <Table>
            <thead>
                <tr>
                    <th>책 번호</th>
                    <th>책 이름</th>
                    <th>가격</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>React 100</td>
                    <td>\10000</td> 
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>React 200</td>
                    <td>\20000</td> 
                </tr>
            </tbody>
        </Table>
        )
    }
}

export default R054_ReactstrapTable;
