window.addEventListener('load', main);

function main(){
    checkButton.addEventListener('click',checkEmail);
}
function checkEmail(){
    let strEmail = email_.value;
    let regEmail = new RegExp(/[(a-z)(A-Z)]{1}[\w]{2,16}@[a-z]+\.{1}[a-z]+(\.[(a-z)]{2,3})?/i);
    let test = strEmail.match(regEmail);
    debugger;
    if (test != null && test[0] == strEmail) {
        alert(`correct email: ${test[0]}`);
    }
}