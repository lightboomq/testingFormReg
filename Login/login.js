const linkRegistration = document.getElementById('link')
const mailInput = document.getElementById('mailInput')
const passwordInput = document.getElementById('passwordInput')
const regExpMail = /\w+(\.|_|\d+)\w+@(gmail|mail|yandex|yahoo)\.(com|ru)$/g
const regExpPasswordInput = /[а-я]/i



linkRegistration.addEventListener('click',()=>{
    if(!mailInput.value||!passwordInput.value){
        console.log('Заполните все поля')
        return false
    }
    if(regExpMail.test(mailInput.value)!==true){
        console.log('Недопустимый формат почты');
        return false
    }
    if(regExpPasswordInput.test(passwordInput.value)){
        console.log('Недопустиый формат Пароля');
        return false
    }
    else{
        console.log('Успешно');
        linkRegistration.href = 'questions.html'
        return false
    }
})