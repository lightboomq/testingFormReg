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
    if(mailInput.value!==localStorage.getItem('userMail')){
        console.log('Не правильная почта');
        return false
    }
    if(passwordInput.value!==localStorage.getItem('userPassword')){
        console.log('Не правильный пароль');
        return false
    }
    else{
        console.log('Успешно');
        linkRegistration.href = 'questions.html'
        return false
    }
})
