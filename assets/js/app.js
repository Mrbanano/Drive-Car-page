const surface = document.querySelector('#surface');
const car = document.querySelector('#car');
const carimg = document.querySelector('#carimg');
var flag = false;

const cars =['./assets/img/Img_06.png','./assets/img/Img_05.png'];

EventListener();


function EventListener (){
    car.addEventListener('click',runCar);
} 

function runCar(){
    surface.classList.toggle('move');
    car.classList.toggle('moveCar');
    flag=!flag;

    if (flag){
        carimg.setAttribute('src',cars[0])
        console.log(true);
    }else{
        carimg.setAttribute('src',cars[1])
        console.log(false)
    }
}