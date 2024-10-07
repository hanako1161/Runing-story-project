import React, { Component } from 'react';
import Swal from 'sweetalert2'

class R057_Sweetalert2Position extends Component {
    saveAlert = (flag, positionflag, e) => {
        if (flag === 'cancel') {
            Swal.fire({
                position: positionflag,
                icon: 'error',
                title: '취소 되었습니다.',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                position: positionflag,
                icon: 'success',
                title: (flag=='save' ? '저장': '수정')+'되었습니다.',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    render() {
        return (
            <>
                <h1>sweetalert2</h1>
                <button onClick={e => this.saveAlert('save', 'center')}>저장</button>
                <button onClick={e => this.saveAlert('update', 'bottom-end')}>수정</button>
                <button onClick={e => this.saveAlert('cancel', 'top-start')}>취소</button>
            </>
        )
    }
}

export default R057_Sweetalert2Position;