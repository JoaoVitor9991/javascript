// document.write(/[abc]/.test('abc'))

//document.write(/^\d{2}\/\d{2}\/\d{4}$/.test('33/33/3333'))

//let dia = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;

//document.write(dia.test("32"))

//document.write(dia.test("31"))


//let ano = /^\d{4}$/;

//document.write(ano.test("24"))

//document.write(ano.test("2024"))


//let data = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/d{4}$/;

//document.write(data.test("22/04/2120"))

//let cpf = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2})$/;

//document.write(cpf.test("957;488.555-52"))//

//let email = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/;

//document.write(email.test("joaodevestagio@gmail.com"));


const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


function setError(index) {
    spans[index].style.display = 'block';
}


function removeError(index) {
    spans[index].style.display = 'none';
}


function emailValidate() {
    
    if (emailRegex.test(inputs[0].value)) {
        console.log("Email Válido");
        removeError(0);
    } else {
        console.log("Email Inválido");
        setError(0);
    }
}