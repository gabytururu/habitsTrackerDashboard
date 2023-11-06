const dialog = document.querySelector('dialog')
const openModal = document.querySelector('#openModal')
const closeModal = document.querySelector('#closeModal')
const habitSubmit = document.querySelector('#submit')

openModal.addEventListener('click',()=>{
    dialog.showModal()
})

closeModal.addEventListener('click',()=>{
    dialog.close()
})

const habits =[]
habitSubmit.addEventListener('submit',(e)=>{
    e.preventDefault()
    const habitName = document.querySelector('#habitName').value
    console.log(habitName)
    dialog.close()
})