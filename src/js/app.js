/* eslint-disable no-unused-vars */
let goblinControl = 0;
let points = 0;
let lostsGoblin = -1;
let timer;

const image = document.createElement('img');
image.src = './goblin.png';
image.style.width = '50%';
image.style.height = 'auto';
image.id = 'goblin';
image.style.cursor = 'url(./hummer.png) 2 2, pointer';

function randomPointX(arr) {
    return arr[Math.floor(Math.random() * (arr.length))];
}

function randomPointY(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function getPoint() {
    const arr = [0, 1, 2, 3];
    const i = randomPointX(arr);
    const j = randomPointY(0, 3);
    return (document.getElementById('table').childNodes[0].childNodes[i].cells[j]);
}

function setPicture() {
    const point = getPoint();
    point.appendChild(image);
    goblinControl += 1;
    const total = document.getElementById('total');
    total.textContent = `Hit: ${points}; missed: ${lostsGoblin}`;
}

function timeCounter() {
    if (lostsGoblin === 5) {
        alert('Game over');
        document.getElementById('goblin').style.display = 'none';
        clearInterval(timer);
    } else if (goblinControl >= points) {
        lostsGoblin += 1;
        setPicture();
    }
}

timer = setInterval(timeCounter, 1000);

image.addEventListener('click', () => {
    points += 1;
    clearInterval(timer);
    setPicture();
    timer = setInterval(timeCounter, 1000);
});