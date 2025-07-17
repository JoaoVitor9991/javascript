const inputs = document.querySelectorAll('.required');


const spans = document.querySelectorAll('.span-required');



function nameValidate(){
    if (inputs[0].value.length<3){
        console.log('Nome deve ter 3 caracteres');
            SetError(0);
    }
    else{
        removeError(0);
    }

function SetError(index){
    spans[index].style.display = 'block';
} 
function removeError(index){
    spans[index].style.display = 'none'
}

}

