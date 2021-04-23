const body = document.querySelector('body');
const button = document.querySelector('.btn');
const hexValue = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'] 
const value = document.querySelector('#hex-value');

body.style.backgroundColor ='red';
button.addEventListener('click', changeText);

function changeText(){
    let hex = '#';

    for (let i = 0; i < 6; i++){
        const indexColor = parseInt(Math.random()*hexValue.length);
        hex += hexValue[indexColor]
    }
    body.style.backgroundColor = hex;
    value.textContent = hex;
}
 
