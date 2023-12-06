const nameSurName = document.getElementById('nameSurName');
const nodeListBananas = document.querySelectorAll('.radio1');
const nodeListLetter = document.querySelectorAll('.radio2')
const nodeListCheckbox = document.querySelectorAll('.checkbox')

nameSurName.textContent = localStorage.getItem('userName') + ' ' + localStorage.getItem('userSurName');

if(+localStorage.getItem('indexBanana')!==2){
    nodeListBananas[localStorage.getItem('indexBanana')].style.color="red"
}
else{
    nodeListBananas[localStorage.getItem('indexBanana')].style.color="green"
    nodeListLetter[localStorage.getItem('indexLetter')].style.color="green"
}

if(+localStorage.getItem('indexLetter')!==0){
    nodeListLetter[localStorage.getItem('indexLetter')].style.color="red"
}
else{
    nodeListLetter[localStorage.getItem('indexLetter')].style.color="green"
}


Boolean(localStorage.getItem('1'))?nodeListCheckbox[0].style.color = 'green':'';
Boolean(localStorage.getItem('2'))?nodeListCheckbox[1].style.color = 'green':'';
Boolean(localStorage.getItem('3'))?nodeListCheckbox[2].style.color = 'red':'';
Boolean(localStorage.getItem('4'))?nodeListCheckbox[3].style.color = 'red':'';
Boolean(localStorage.getItem('5'))?nodeListCheckbox[4].style.color = 'green':'';