window.addEventListener('load', main);

function main() {
    let strGET = window.location.search.replace('?', '');
    b_Welcome.innerText = 'Hello ' + strGET + '!';

    submitButton.addEventListener('click', clickSave);
    exitLink.addEventListener('click', closeWindow);
}

function clickSave() {
    let firstname = firstNameText.value;
    let reg = new RegExp(/[^a-z]+/ig);
    let test = firstname.match(reg);
    firstname = firstname.replace(/ /g, '');
    if (test != null || firstname.length == 0)
        firstnameCheck.style.backgroundImage = "url('../src/icon_uncheck.png')";
    else
    {
        firstnameCheck.style.backgroundImage = "url('../src/icon_check.png')";
        localStorage.setItem("firstname",  `${firstNameText.value}`);
    }
       

    firstnameCheck.style.backgroundRepeat = 'no-repeat';
    firstnameCheck.style.backgroundSize = "20px 20px";

    let lastname = lastNameText.value;
    reg = new RegExp(/[^a-z]+/ig);
    test = lastname.match(reg);
    lastname = lastname.replace(/ /g, '');
    if (test != null || lastname.length == 0)
        lastnameCheck.style.backgroundImage = "url('../src/icon_uncheck.png')";
    else
    {
        lastnameCheck.style.backgroundImage = "url('../src/icon_check.png')";
        localStorage.setItem("lastname",  `${lastNameText.value}`);
    }
        

    lastnameCheck.style.backgroundRepeat = 'no-repeat';
    lastnameCheck.style.backgroundSize = "20px 20px";

    let yearBD = b_dayNumber.valueAsNumber;
    let currentdate = new Date(Date.now());
    let currentYear = currentdate.getYear() + 1900;

    if (currentYear > yearBD || yearBD > 1900){
        b_dayCheck.style.backgroundImage = "url('../src/icon_check.png')";
        localStorage.setItem("yearBD",  `${b_dayNumber.valueAsNumber}`);
    }        
    else
        b_dayCheck.style.backgroundImage = "url('../src/icon_uncheck.png')";

    b_dayCheck.style.backgroundRepeat = 'no-repeat';
    b_dayCheck.style.backgroundSize = "20px 20px";

    let numberPhone = numberText.value;

    reg = new RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
    test = numberPhone.match(reg);

    numberPhone = numberText.value;
    numberPhone = numberPhone.replace(/ /g, '');

    if (numberPhone != '') {
        if (test == null)
            numberCheck.style.backgroundImage = "url('../src/icon_uncheck.png')";
        else{
            numberCheck.style.backgroundImage = "url('../src/icon_check.png')";
            localStorage.setItem("numberPhone",  `${numberText.value}`);
        }
           

        numberCheck.style.backgroundRepeat = 'no-repeat';
        numberCheck.style.backgroundSize = "20px 20px";
    }
    

    let skypeLogin = skypeText.value;
    skypeLogin = skypeLogin.replace(/ /g, '');

    if (skypeLogin != '') {

        skypeLogin = skypeText.value;
        reg = new RegExp(/^[\w\.\-]+$/);
        test = skypeLogin.match(reg);
       // debugger;

        if (test == null)
            skypeCheck.style.backgroundImage = "url('../src/icon_uncheck.png')";
        else{
            skypeCheck.style.backgroundImage = "url('../src/icon_check.png')";
            localStorage.setItem("skypeLogin",  `${skypeText.value}`);
        }
            

        skypeCheck.style.backgroundRepeat = 'no-repeat';
        skypeCheck.style.backgroundSize = "20px 20px";
    }


}

function closeWindow(){
    window.close();
    return false;
}