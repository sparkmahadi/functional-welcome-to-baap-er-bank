// login approval

document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const passwordField = document.getElementById('password-field');

    if(emailField.value === 'mh@engineer.com' && passwordField.value === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('You are not a valid user');
    }
})