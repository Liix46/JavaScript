const delay = 100;              // Задержка (в милисекундах)
const R_Mercury = 40;                  // Радиус окружности
const R_Venus = 80;
const R_Earth = 120;
const R_Mars = 160;
const R_Jupiter = 200;
const R_Saturn = 240;
const R_Uranus = 280;

const da = 3 * Math.PI / 180;  // Приращение угла

let A_Mercury = 0;            // Угол (в радианах)       
let A_Venus = 0;
let A_Earth = 0;
let A_Mars = 0;
let A_Jupiter = 0;
let A_Saturn = 0;
let A_Uranus = 0;   

let clientX = 0;
let clientY = 0;

// Функция движения элемента
function moveMercury() {
  // Изменение координат элемента
  Mercury.style.left = `${clientX + R_Mercury * Math.cos(A_Mercury)}px`;
  Mercury.style.top = `${clientY + R_Mercury * Math.sin(A_Mercury)}px`;

  // Увеличение расстояния до полюса
  A_Mercury += da;
}
function moveVenus() {
  Venus.style.left = `${clientX + R_Venus * Math.cos(A_Venus)}px`;
  Venus.style.top = `${clientY + R_Venus * Math.sin(A_Venus)}px`;

  A_Venus += da;
}
function moveEarth() {
  Earth.style.left = `${clientX + R_Earth * Math.cos(A_Earth)}px`;
  Earth.style.top = `${clientY + R_Earth * Math.sin(A_Earth)}px`;

  A_Earth += da;
}
function moveMars() {
  Mars.style.left = `${clientX + R_Mars * Math.cos(A_Mars)}px`;
  Mars.style.top = `${clientY + R_Mars * Math.sin(A_Mars)}px`;

  A_Mars += da;
}
function moveJupiter() {
  Jupiter.style.left = `${clientX + R_Jupiter * Math.cos(A_Jupiter)}px`;
  Jupiter.style.top = `${clientY + R_Jupiter * Math.sin(A_Jupiter)}px`;

  A_Jupiter += da;
}
function moveSaturn() {
  Saturn.style.left = `${clientX + R_Saturn * Math.cos(A_Saturn)}px`;
  Saturn.style.top = `${clientY + R_Saturn * Math.sin(A_Saturn)}px`;

  A_Saturn += da;
}
function moveUranus() {
  Uranus.style.left = `${clientX + R_Uranus * Math.cos(A_Uranus)}px`;
  Uranus.style.top = `${clientY + R_Uranus * Math.sin(A_Uranus)}px`;

  A_Uranus += da;
}

function MouseMove(event) {
  clientX = event.clientX;
  clientY = event.clientY;
}
// Периодический вызов функции движения
setInterval("moveMercury()", delay);
setInterval("moveVenus()", delay*2);
setInterval("moveEarth()", delay*3);
setInterval("moveMars()", delay*4);
setInterval("moveJupiter()", delay*5);
setInterval("moveSaturn()", delay*6);
setInterval("moveUranus()", delay*7);

document.body.addEventListener("mousemove", MouseMove);