window.addEventListener('load', main);

function main(){
    $('#burgerDiv').on('click',burgerHide);
    $('#scrollLeft').on('mousemove', mouseMoveDiv);

}
function mouseMoveDiv(event) {
    //debugger;
    if (event.which == 1) {
        console.log(event.clientY);
        debugger;
    }
}
function burgerHide() {
    
    $('#firstMainDiv').toggle();
    //debugger;
    if ($(firstMainDiv).css('display') === 'none') {
        $('#burgerDiv').css({"background-image": "url(./src/icon_more.png)"});
        $('#lastMainDiv').css({"flex-grow": "70"}); 
    }
	else{
        $('#burgerDiv').css({"background-image": "url(./src/icon_less.png)"});
        $('#lastMainDiv').css({"flex-grow": "50"});
    }
}