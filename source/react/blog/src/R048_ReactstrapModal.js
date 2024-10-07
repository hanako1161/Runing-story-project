import React, { Component } from 'react';
import { Button,Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap';

class R048_ReactstrapModal extends Component {
    constructor(props) {
        super(props);
        this.state = { modalFlag: false}
    }
    
    modalToggle = () => {
        this.setState({modalFlag: !this.state.modalFlag})
    }

    render() {
        return (
            <>
                <Button color="warning" onClick={this.modalToggle}>Modal 버튼</Button>
                <Modal isOpen={this.state.modalFlag} fade={true} toggle={this.modalToggle}>
                    <ModalHeader toggle={this.modalToggle}>Modal Header</ModalHeader>
                    <ModalBody>
                    The generated Lorem Ipsum is therefore always free from repetition.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.modalToggle}>확인</Button>
                        <Button color="secondary" onClick={this.modalToggle}>닫기</Button>
                    </ModalFooter>
                </Modal>

                </>
        )}
}

export default R048_ReactstrapModal;
