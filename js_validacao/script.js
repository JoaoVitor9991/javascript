const inputs = document.querySelectorAll('.required');

function nameValidate(){
    if (inputs[0].value.length<3){
        console.log('Nome deve ter 3 caracteres');
    }
    else{
        console.log('Validado com sucesso!');
    }
}