///////////
function Click() {
    let mark = 0;
    let arrRightAnswer = [true,true,true,true];
    //let checks = testForm.children;
    let checks = new Array();
    for (const item of testForm) {
        checks.push(item);
    }
    //debugger;
    for (let i = 0; i < checks.length; i++) {
        if(checks[i].checked == arrRightAnswer[i]){
            mark+=33;
            if(mark == 99){
                mark = 100;
            }
        }             
    }    
    if(checks[checks.length-1].checked){
        mark = 100;
    }
    alert(`Поздравляем с прохождением теста ${nameUser}.\nТест здан на ${mark}`);
}

function timeLess(event){
    //debugger;
    time.innerText = `Осталось: ${timer} секунд`;
   
    if(timer <= 0){
        clearInterval(timerId); 
        Click();
    }
    timer--;
}

answer.addEventListener('click', Click)
let timer = 10;
let nameUser = '';
do {
    nameUser = prompt('Твоё имя?', 'Саша');
} while (nameUser == null);


let timerId = setInterval(timeLess, 1000);

