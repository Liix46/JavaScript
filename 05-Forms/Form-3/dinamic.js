window.addEventListener('load', main);

function main(){
    submitButton.addEventListener('click', clickSubmit);
}


function clickSubmit(){
    
    let strlogin = login.value;
    strlogin = strlogin.replace(/ /g, '');
    if (strlogin.lenght = 0) {
        alert('Login incorrect');
        return
    }

    let reg = new RegExp(/[\w\d]/ig);
    let test =  strlogin.match(reg);
   if(test == null){
       alert('Login incorrect');
       return;
   }
    

   if(text_password1.value != text_password2.value){
    alert('passwords different');
    return;
   } 

   
   let fullName = fullname.value;
   reg = new RegExp(/[a-z]+\s[a-z]+/ig);
   test =  fullName.match(reg);
   if(test = null){
    alert('FullName incorrect');
       return;
   }   

  let str_email = emailInput.value;
  reg = new RegExp(/[\w\d]+@[a-z]+\.[a-z]+/ig);
  test = str_email.match(reg); 
  if(test == null){
    alert('Email incorrect');
      return;
  }
  debugger;

  document.cookie = `login: ${login.value};`;
  document.cookie += `fullname: ${fullname.value};`;
  document.cookie += `email: ${emailInput.value};`;
}