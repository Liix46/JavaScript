window.addEventListener('load', main);

function main(){
    checkButton.addEventListener('click', checkForm);
}

function checkForm(){
    let fullname = fullName.value;
    let reg = new RegExp(/[a-zа-я]+\s{1}[a-zа-я]{1}\.?\s?[a-zа-я]{1}\.?/i);
    let test = fullname.match(reg);
    if (test == null) 
        alert("Incorrect");    
    else
        alert("Correct");
}