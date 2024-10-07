import React, { Component } from 'react';
import Swal from 'sweetalert2'

class R058_Sweetalert2Confirm extends Component {
    deletAlert = (e) => {
        Swal.fire({
            title: '정말 삭제하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#4B088A',
            cancelButtonColor: '#01DF01',
            confirmButtonText: '예',
            cancelButtonText: '아니요'
            }).then((result) => {
                if (result.value) {
                    document.getElementById('deleteId').remove();
                    Swal.fire(
                        'Deleted',
                        'sweetalert2 삭제완료',
                        'success'
                    )
                }
            })
    }
// then 부터 '예'이면트루 '아니오'하면 펄스값들어오는문구 tnan 전은 화면구현로직
    render() {
        return (
            <>
                <h1 id='deleteId'>sweetalert2</h1>
                <button onClick={e => this.deletAlert()}>삭제</button>
            </>
    )
    }
}

export default R058_Sweetalert2Confirm;