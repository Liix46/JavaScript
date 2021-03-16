//////////////////////////////////////////////////
function Click(event) {
    //debugger;
    let currentTitle = event.target;
    let elements = document.getElementsByTagName("th");
    let columbIndex = 0;

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].innerText == currentTitle.innerText) {
            columbIndex = i;
        }
    }

    elements = document.getElementsByTagName('tr');
    let elemColumbs = new Array();
    let persons = new Map();

    for (let i = 1; i < elements.length; i++) {
        elemColumbs.push(elements[i].children[columbIndex]);
    }
//debugger;
    for (let i = 1; i < elements.length; i++) {
        let newPerson = new Person();
        newPerson.Firstname = elements[i].children[0].innerText;
        newPerson.Lastname = elements[i].children[1].innerText;
        newPerson.Age = parseInt(elements[i].children[2].innerText);
        newPerson.Company = elements[i].children[3].innerText;
        persons.set(newPerson[currentTitle.innerText], newPerson);
    }

    if (currentTitle.innerText == 'Age') {
        elemColumbs.sort(function (a, b) {
            return a - b;
        });
    }
    else {
        elemColumbs.sort(function (a, b) {
            if (a.innerText > b.innerText) {
                return 1;
            }
            if (a.innerText < b.innerText) {
                return -1;
            }
            // a должно быть равным b
            return 0;
        });
    }

    let keys = new Array();
    for(let i = 0; i < elemColumbs.length; i++){
        keys.push(elemColumbs[i].firstChild.data);
    }

    for (let i = 0; i < elemColumbs.length; i++) {
        console.log(elemColumbs[i].innerText);
    }
    debugger;

    for (let i = 1; i < elements[i].children.length; i++) {
        elements[i].children[0].innerText = persons.get(keys[i-1]).Firstname;
        elements[i].children[1].innerText = persons.get(keys[i-1]).Lastname;
        elements[i].children[2].innerText = persons.get(keys[i-1]).Age;
        elements[i].children[3].innerText = persons.get(keys[i-1]).Company;
    }
}


let titles = document.getElementsByTagName("th");

for (const title of titles) {
    title.addEventListener('click', Click);
}

class Person {
    get Firstname() {
        return this._firstname;
    }
    set Firstname(value) {
        this._firstname = value;
    }
    get Lastname() {
        return this._lastname;
    }
    set Lastname(value) {
        this._lastname = value;
    }
    get Age() {
        return this._age;
    }
    set Age(value) {
        if (value > 0) {
            this._age = value;
        }
    }
    get Company() {
        return this._company;
    }
    set Company(value) {
        this._company = value;
    }
}