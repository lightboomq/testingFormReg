const linkRegistration = document.getElementById('linkReg')
const nameInput = document.getElementById('nameInput')
const surNameInput = document.getElementById('surNameInput')
const ageInput = document.getElementById('ageInput')
const mailInput = document.getElementById('mailInput')
const passwordInput = document.getElementById('passwordInput')


const regExpNameAndSurNameInput = /[^а-я a-z]/gi
const regExpAgeInput = /[^0-9]/g
const regExpPasswordInput = /[а-я]/i
const regExpMail = /\w+(\.|_|\d+|\w)\w+@(gmail|mail|yandex|yahoo)\.(com|ru)$/g

const user = {}

linkRegistration.addEventListener('click',()=>{
    if(!nameInput.value||!surNameInput.value||!mailInput.value||!passwordInput.value){
        console.log('Заполните все поля')
        return false
    }
    if(regExpNameAndSurNameInput.test(nameInput.value)){
        console.log('Недопустимый формат Имени');
        return false
    }
    if(regExpNameAndSurNameInput.test(surNameInput.value)){
        console.log('Недопустимый формат Фамилии');
        return false
    }
    if(regExpAgeInput.test(ageInput.value)){
        console.log('Недопустимый формат Возраста');
        return false
    }
    else if(ageInput.value<18){
        console.log('Возраст меньше 18');
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
        localStorage.setItem('userName',user.name = nameInput.value);
        localStorage.setItem('userSurName',user.surName = surNameInput.value)
        localStorage.setItem('userMail',user.mail = mailInput.value)
        localStorage.setItem('userPassword',user.password = passwordInput.value)
        linkRegistration.href = 'questions.html'
        return false
    }
})















