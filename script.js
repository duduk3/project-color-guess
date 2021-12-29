/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable sonarjs/no-duplicated-branches */
/* eslint-disable brace-style */
/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
/* eslint-disable keyword-spacing */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable editorconfig/editorconfig */
/* eslint-disable space-before-blocks */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
let titleRGB = document.querySelector('#rgb-color');
let sortRGB = Math.floor(Math.random() * 6) + 1;
let scoreText = document.querySelector('#score');
let score = 0;

let ball1 = document.querySelector('#ball-1');
let ball2 = document.querySelector('#ball-2');
let ball3 = document.querySelector('#ball-3');
let ball4 = document.querySelector('#ball-4');
let ball5 = document.querySelector('#ball-5');
let ball6 = document.querySelector('#ball-6');
let rgb1 = 0;
let rgb2 = 0;
let rgb3 = 0;


function sortBalls(){
    rgb1 = Math.floor(Math.random() * 256);
    rgb2 = Math.floor(Math.random() * 256);
    rgb3 = Math.floor(Math.random() * 256);
}

function insertColor(){
    ball1.style.backgroundColor = 'rgb(' + rgb1 + ',' + rgb2 + ',' + rgb3 + ')';
    ball2.style.backgroundColor = 'rgb(' + rgb1 + ',' + rgb3 + ',' + rgb2 + ')';
    ball3.style.backgroundColor = 'rgb(' + rgb3 + ',' + rgb2 + ',' + rgb1 + ')';
    ball4.style.backgroundColor = 'rgb(' + rgb2 + ',' + rgb1 + ',' + rgb3 + ')';
    ball5.style.backgroundColor = 'rgb(' + rgb2 + ',' + rgb3 + ',' + rgb1 + ')';
    ball6.style.backgroundColor = 'rgb(' + rgb3 + ',' + rgb1 + ',' + rgb2 + ')';
}
function insertColorText(){
    if(sortRGB === 1){
        titleRGB.innerText = '(' + rgb1 + ', ' + rgb2 + ', ' + rgb3 + ')';
    }
    if(sortRGB === 2){
        titleRGB.innerText = '(' + rgb1 + ', ' + rgb3 + ', ' + rgb2 + ')';
    }
    if(sortRGB === 3){
        titleRGB.innerText = '(' + rgb3 + ', ' + rgb2 + ', ' + rgb1 + ')';
    }
    if(sortRGB === 4){
        titleRGB.innerText = '(' + rgb2 + ', ' + rgb1 + ', ' + rgb3 + ')';
    }
    if(sortRGB === 5){
        titleRGB.innerText = '(' + rgb2 + ', ' + rgb3 + ', ' + rgb1 + ')';
    }
    if(sortRGB === 6){
        titleRGB.innerText = '(' + rgb3 + ', ' + rgb1 + ', ' + rgb2 + ')';
    }
}

sortBalls();
insertColor();
insertColorText();

ball1.addEventListener('click', chooseColor);
ball2.addEventListener('click', chooseColor);
ball3.addEventListener('click', chooseColor);
ball4.addEventListener('click', chooseColor);
ball5.addEventListener('click', chooseColor);
ball6.addEventListener('click', chooseColor);

function chooseColor(event){
    let answer = document.querySelector('#answer');
    if (event.target === ball1 && sortRGB === 1) {
        answer.innerText = 'Acertou!';
        score += 3;
        scoreText.innerText = 'Placar: ' + score;
    }
    else if (event.target === ball2 && sortRGB === 2) {
        answer.innerText = 'Acertou!';
        score += 3;
        scoreText.innerText = 'Placar: ' + score;
    }
    else if (event.target === ball3 && sortRGB === 3) {
        answer.innerText = 'Acertou!';
        score += 3;
        scoreText.innerText = 'Placar: ' + score;
    }
    else if (event.target === ball4 && sortRGB === 4) {
        answer.innerText = 'Acertou!';
        score += 3;
        scoreText.innerText = 'Placar: ' + score;
    }
    else if (event.target === ball5 && sortRGB === 5) {
        answer.innerText = 'Acertou!';
        score += 3;
        scoreText.innerText = 'Placar: ' + score;
    }
    else if (event.target === ball6 && sortRGB === 6) {
        answer.innerText = 'Acertou!';
        score += 3;
        scoreText.innerText = 'Placar: ' + score;
    }
    else {
        answer.innerText = "Errou! Tente novamente!";
    }
}

let resetBtn = document.querySelector("#reset-game");

resetBtn.addEventListener('click', function(){
    sortBalls();
    insertColor();
    insertColorText();
    });


