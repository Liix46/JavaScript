function displayCanvas() {
    let canvasHTML = document.getElementById('myCanvas');
    let contextHTML = canvasHTML.getContext('2d');
    contextHTML.strokeRect(0, 0, canvasHTML.width, canvasHTML.height);

    let radiusClock = canvasHTML.width / 2 - 10;
    let xCenterClock = canvasHTML.width / 2;
    let yCenterClock = canvasHTML.height / 2;

    //Очистка экрана. 
    contextHTML.fillStyle = "#ffffff";
    contextHTML.fillRect(0, 0, canvasHTML.width, canvasHTML.height);

    //Рисуем контур часов
    contextHTML.strokeStyle = "#000000";
    contextHTML.lineWidth = 4;
    contextHTML.beginPath();
    contextHTML.arc(xCenterClock, yCenterClock, radiusClock, 0, 2 * Math.PI, true);
    contextHTML.stroke();
    contextHTML.closePath();

    contextHTML.strokeStyle = "#000000";
    contextHTML.lineWidth = 5;
    contextHTML.beginPath();
    contextHTML.arc(xCenterClock, yCenterClock, 10, 0, 2 * Math.PI, true);
    contextHTML.stroke();
    contextHTML.closePath();

    contextHTML.lineWidth = 2;
    //Рисуем рисочки часов
    let radiusNum = radiusClock - 10; //Радиус расположения рисочек	
    let widthSquare = 0;
    let heightSquare = 0;
    for (let tm = 0; tm < 60; tm++) {
        contextHTML.beginPath();
        if (tm % 5 == 0) {
            widthSquare = 10;
            heightSquare = 10;
            contextHTML.fillStyle = "orange";
        }
        else {
            widthSquare = 5;
            heightSquare = 5;
            contextHTML.fillStyle = "green";
        } //для выделения часовых рисочек

        let xPointM = xCenterClock + radiusNum * Math.cos(-6 * tm * (Math.PI / 180) + Math.PI / 2);
        let yPointM = yCenterClock - radiusNum * Math.sin(-6 * tm * (Math.PI / 180) + Math.PI / 2);

        contextHTML.fillRect(xPointM - 5, yPointM - 5, widthSquare, heightSquare);
        contextHTML.closePath();

        for (let th = 1; th <= 12; th++) {
            contextHTML.beginPath();
            contextHTML.font = '30px Snell Roundhand';
            let xText = xCenterClock + (radiusNum - 30) * Math.cos(-30 * th * (Math.PI / 180) + Math.PI / 2);
            let yText = yCenterClock - (radiusNum - 30) * Math.sin(-30 * th * (Math.PI / 180) + Math.PI / 2);
            if (th <= 9) {
                contextHTML.strokeText(th, xText - 5, yText + 10);
            } else {
                contextHTML.strokeText(th, xText - 15, yText + 10);
            }
            contextHTML.strokeStyle = "#3b3b3b";
            contextHTML.stroke();
            contextHTML.closePath();
        }
    }

    let lengthSeconds = radiusNum - 10;
    let lengthMinutes = radiusNum - 15;
    let lengthHour = lengthMinutes / 1.5;
    let d = new Date();                //Получаем экземпляр даты
    let t_sec = 6 * d.getSeconds();                           //Определяем угол для секунд
    let t_min = 6 * (d.getMinutes() + (1 / 60) * d.getSeconds()); //Определяем угол для минут
    let t_hour = 30 * (d.getHours() + (1 / 60) * d.getMinutes()); //Определяем угол для часов

    //Рисуем секунды
    contextHTML.beginPath();
    contextHTML.lineWidth = 4;
    contextHTML.strokeStyle = "cadetblue";
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthSeconds * Math.cos(Math.PI / 2 - t_sec * (Math.PI / 180)),
        yCenterClock - lengthSeconds * Math.sin(Math.PI / 2 - t_sec * (Math.PI / 180)));
    contextHTML.stroke();
    contextHTML.closePath();

    //Рисуем минуты
    contextHTML.beginPath();
    contextHTML.strokeStyle = "#cadetblue";
    contextHTML.lineWidth = 8;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthMinutes * Math.cos(Math.PI / 2 - t_min * (Math.PI / 180)),
        yCenterClock - lengthMinutes * Math.sin(Math.PI / 2 - t_min * (Math.PI / 180)));
    contextHTML.stroke();
    contextHTML.closePath();

    //Рисуем часы
    contextHTML.beginPath();
    contextHTML.lineWidth = 12;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthHour * Math.cos(Math.PI / 2 - t_hour * (Math.PI / 180)),
        yCenterClock - lengthHour * Math.sin(Math.PI / 2 - t_hour * (Math.PI / 180)));
    contextHTML.stroke();
    contextHTML.closePath();

       //Рисуем центр часов
       contextHTML.beginPath();
       contextHTML.strokeStyle = "#000000";
       contextHTML.fillStyle = "#ffffff";
       contextHTML.lineWidth = 3;
       contextHTML.arc(xCenterClock, yCenterClock, 5, 0, 2 * Math.PI, true);
       contextHTML.stroke();
       contextHTML.fill();
       contextHTML.closePath();
}

window.setInterval(
    function () {
        displayCanvas();
    }
    , 1000);