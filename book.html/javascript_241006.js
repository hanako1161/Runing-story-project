document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const loginSuccess = urlParams.get('loginSuccess');
    const loginError = urlParams.get('loginError');

    if (loginSuccess === "true") {
        alert("로그인 성공! 현재 " + urlParams.get('id') + "님으로 로그인 되어 있습니다.");
    }

    if (loginError === "true") {
        alert("아이디 또는 비밀번호가 틀립니다. 다시 시도해주세요.");
    }
});