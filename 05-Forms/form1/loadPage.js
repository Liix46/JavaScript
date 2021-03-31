let countSit = 28; //количество мест в вагоне;
//добавляем чекбоксы
function AddCheckbox(start, end) {
    document.writeln('<tr>');
    for (let i = start; i < end; i++) {
        document.writeln('<td>');
        document.writeln('<input type="checkbox" class="checkBox">');
        document.writeln(`<label>${i + 1}</label>`);
        document.writeln('</td>');
    }
    document.writeln('</tr>');
}

document.writeln('<table id="tablePlace">');
AddCheckbox(0,countSit/2);
AddCheckbox(countSit/2, countSit);
document.writeln('</table>');
//add button 'Book'
document.writeln('<hr></hr>');
document.writeln('<div>');
document.writeln('<label id="labelPrice">Total price: 0</label>');
document.writeln('<button id="book">Book</button>');
document.writeln('</div>');