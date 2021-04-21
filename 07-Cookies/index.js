window.addEventListener('load', main);
let tasks = new Array();
let indexQuestion =1;
let userRightAnsver =0;
let RadioBtns = document.getElementsByName('RDBTN');
let attemp = localStorage.getItem("attemp");

function main(){
   
    let task = new Task();
    task._question = " let str = \"Hello\";\n str.something = 5;\n alert(str.something);";
    task._ansvers = ['5','undefined', 'Будет ошибка.'];
    task._indexRightAnsver = 2;
    
    let task2 = new Task();
    task2._question = " let arr = [1, 2, 3];\n arr.something = 5;\n alert(arr.something);";
    task2._ansvers = ['5','undefined', 'Будет ошибка.'];
    task2._indexRightAnsver = 0;

    let task3 = new Task();
    task3._question = " Что такое ECMAScript?";
    task3._ansvers = ['Новый язык программирования.', 'Переработанная реализация Javascript.', 'Спецификация языка Javascript.'];
    task3._indexRightAnsver = 2;

    tasks.push(task);
    tasks.push(task2);
    tasks.push(task3);

    buttonStartTest.addEventListener('click', testing);
    nextQuestion.addEventListener('click', next);
}

function testing() {
    //debugger;
    let attemp = localStorage.getItem("attemp");
    //localStorage.setItem("attemp", 5);
    if (attemp == null) {
        attemp = 5;
        localStorage.setItem("attemp", attemp);
    }
    if (attemp == '0') {
        alert("Количество попыток закончились");
        return;
    }

    question.innerText = tasks[0].question;
    ansver1.innerText = tasks[0]._ansvers[0];
    ansver2.innerText = tasks[0]._ansvers[1];
    ansver3.innerText = tasks[0]._ansvers[2];

    nextQuestion.disabled = false;
}

function next(){
    
    let index = tasks[indexQuestion-1]._indexRightAnsver;
        if(RadioBtns[index].checked == true){
            userRightAnsver++;
        }

    if (indexQuestion == tasks.length) {
        //alert(userRightAnsver);
        let name = prompt('Страна требует знать имя своего героя?', 'Имя');
        alert(`Поздравляем, ${name}! Тест сдан на ${userRightAnsver} из ${tasks.length}`);
        localStorage.setItem("name", `${name}`);
        localStorage.setItem("result", `${userRightAnsver}`);
        attemp--;
        localStorage.setItem("attemp", attemp);
        nextQuestion.disabled = true;
    }
    else{
        question.innerText = tasks[indexQuestion].question;
        ansver1.innerText = tasks[indexQuestion]._ansvers[0];
        ansver2.innerText = tasks[indexQuestion]._ansvers[1];
        ansver3.innerText = tasks[indexQuestion]._ansvers[2];
        indexQuestion++;       
    }
   
}