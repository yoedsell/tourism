const signInButton = document.querySelector('.signInButton')
const registerButton = document.querySelector('.registerButton')
const formBox = document.querySelector('.formBox')
const body = document.querySelector('body')
const reRegister = document.querySelector('.reRegister')

registerButton.onclick = function(){
    formBox.classList.add('active')
    body.classList.add('active')
}

signInButton.onclick = function(){
    formBox.classList.remove('active')
    body.classList.remove('active')
}


