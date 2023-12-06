const nameSurName = document.getElementById('nameSurName');
const linkSend = document.getElementById('linkSend');
const nodeListBananas = document.querySelectorAll('.radio1')
const nodeListLetter = document.querySelectorAll('.radio2')
const nodeListCheckbox = document.querySelectorAll('.checkbox')

nameSurName.textContent = localStorage.getItem('userName') + ' ' + localStorage.getItem('userSurName')


nodeListBananas.forEach(item=>{
    item.addEventListener('click',()=>{
        localStorage.setItem('indexBanana',item.id)
    })
})

nodeListLetter.forEach(item=>{
    item.addEventListener('click',()=>{
        localStorage.setItem('indexLetter',item.id)
    })
})

nodeListCheckbox.forEach(item=>{
    item.addEventListener('click',()=>{
        localStorage.setItem(+item.id+1,item.checked)
    })
})

linkSend.addEventListener('click',()=>{
    linkSend.href='result.html'
})

//localStorage.clear()

