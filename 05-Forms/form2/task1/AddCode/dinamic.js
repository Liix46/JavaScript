window.addEventListener('load', Main);

let properties;

function Main() {
    var urlParams = new URLSearchParams(window.location.search);
    let str = window.location.search;
    str = str.replace(/%2/g,' ');
    str = str.replace('?','');
    str = binarytoString(str);
    properties = str.split('/');

    //debugger;
    index =1;
    let tbodyForm = tableForm.firstElementChild;
    let trElements = tbodyForm.children;
    for (const tr of trElements) {
        tr.children[1].innerText = properties[index];
        index++;
    }
    
}

function binarytoString(str) {
    return str.split(/\s/).map(function (val){
      return String.fromCharCode(parseInt(val, 2));
    }).join("");
  }