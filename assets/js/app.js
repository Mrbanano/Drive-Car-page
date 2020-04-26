const surface = document.querySelector('#surface');
const car = document.querySelector('#car');

EventListener();


function EventListener (){
    car.addEventListener('click',runCar);
} 

function runCar(){
    surface.classList.toggle('move');
    car.classList.toggle('moveCar');

}