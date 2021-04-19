window.addEventListener('load', main);

function main(){
    checkDate.addEventListener('click', checkDateFunc)
    
}

function checkDateFunc() {
    let strDate = dateText.value;
    let regDate = new RegExp(/\d{2}((\:)|(\-)|[ ])?\d{2}((\:)|(\-)|[ ])?\d{4}/g);
    let test = strDate.match(regDate);
    if (test!=null) {
        alert(`Date is correct: ${strDate}`);
    }
    else
        alert(`Date isn\'t correct: ${strDate}`);
}