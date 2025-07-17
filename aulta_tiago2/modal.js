let BtnOpenModal = document.getElementById('BtnOpenModal')

let BtnCloseModal = document.getElementById('BtnCloseModal')


let Modal = document.getElementById('Modal')






BtnOpenModal.addEventListener('click', () =>{
    Modal.classList.toggle('ModalOpen')
})