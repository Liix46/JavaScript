window.addEventListener('load', main);

function main(){
    //debugger;
    
    submitButton.addEventListener('click', clickSubmit);

    let email = localStorage.getItem("email");
}

function clickSubmit(){
   let str_email = email.value;    
    let reg = new RegExp(/[\w\d]{3,}@[a-z]+\.[a-z]+/ig);
    let test = str_email.match(reg); 
    if(test == null){
        emailSpan.style.backgroundImage = "url('../src/icon_uncheck.png')";
    }
    else{
        emailSpan.style.backgroundImage = "url('../src/icon_check.png')";
    }
    emailSpan.style.backgroundRepeat = 'no-repeat';
    emailSpan.style.backgroundSize = "20px 20px";

    let password = password1.value;
    let length = password1.value.length;
    password = password.replace(/ /g, '');
    passwordSpan.style.backgroundRepeat = 'no-repeat';
    passwordSpan.style.backgroundSize = "20px 20px";
    if (password == '' || length < 6) {
        passwordSpan.style.backgroundImage = "url('../src/icon_uncheck.png')";
        return;
    }

    password = password1.value;
    reg = new RegExp(/[A-Z]+[a-z]+\d+/g); 
    
    test = password.match(reg); 
    if (test == null) {
        passwordSpan.style.backgroundImage = "url('../src/icon_uncheck.png')";
        return;
    }
    
    passwordSpan.style.backgroundImage = "url('../src/icon_check.png')";
        
    password2Span.style.backgroundRepeat = 'no-repeat';
    password2Span.style.backgroundSize = "20px 20px";
    if(password1.value != password2.value){
        password2Span.style.backgroundImage = "url('../src/icon_uncheck.png')";
        return;
    }
    else{
        password2Span.style.backgroundImage = "url('../src/icon_check.png')";
    }

    saveCookie(email.value);
    openUserWindow(email.value);
   // window.close();
   // window.opener.close()
}

function saveCookie(email){
    localStorage.setItem("email", email);
}
function openUserWindow(email){
    window.open(`../UserInfo/main.html?${email}`, 'User Info',"width=600,height=500");
}