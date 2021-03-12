//////////////////////////////////////////////////

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

function Click(event) {

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

    for (let i = 1; i < elements.length; i++) {
        elemColumbs.push(elements[i].children[columbIndex]);
    }

    elemColumbs.sort();

    for (let i = 0; i < elemColumbs.length; i++) {
        console.log(elemColumbs[i].innerText);
    }
    debugger;
}


let titles = document.getElementsByTagName("th");

for (const title of titles) {
    title.addEventListener('click', Click);
}