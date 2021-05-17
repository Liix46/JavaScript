window.addEventListener('load', main);

function main() {
    $("input[type='submit']").click(generate);
}
function generate() {
    // debugger;
    let checkboxes = $("input[type='checkbox']");
    let valueTextBox = $('#lengthTextBox').val();
    let test = valueTextBox.match(/[\D]/g);

    if (test != null) {
        $('#lengthTextBox').css('border', '2px solid red');
        alert('Error.\nIncorrect digit.\nНекорректное число')
        return;
    }
    $('#lengthTextBox').css('border', '2px solid green');
    let size = parseInt(`${valueTextBox}`);
    if(size > 100){
        size = 100;
    }
    
    let regStr = "";
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const Dig = '0123456789';
    let answer = "";

    for (const element of checkboxes) {
            if (element.checked) {
                if(element.value == '0-9'){
                    regStr += Dig; 
                }
                else if(element.value == 'A-Z'){
                    regStr += ABC; 
                }
                else if(element.value == 'a-z'){
                    regStr += abc;
                }
            }
        }
    
        if(regStr == ''){
            alert('Error.\nSpecify the desired string generation filter.\nУкажите нужный фильтр генерарции')
            return;
        }

    while (answer.length < size) {
        answer += regStr[Math.floor(Math.random() * regStr.length)];
    }
    console.log(answer);
    document.getElementById("resultText").value = answer;
}