//Variables for elements
const slot = document.querySelector('slotMachine')
const lever = document.getElementById('lever')
const square = document.querySelectorAll('.slot')
const item1 = document.getElementById('slot1')
const item2 = document.getElementById('slot2')
const item3 = document.getElementById('slot3')
const winningDiv = document.querySelector('.winner')
//images in the array
let cherryHTML = "<img src=\"https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/cherry-512.png\" width=\"150px\" height=\"150px\">"
let sevenHTML = "<img src=\"https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/7-512.png\" width=\"150px\" height=\"150px\">"
let barHTML = "<img src=\"https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/bar-512.png\" width=\"150px\" height=\"150px\">"
let bellHTML = "<img src=\"https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/bell-512.png\" width=\"150px\" height=\"150px\">"
let diamondHTML = "<img src=\"https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/diamond-512.png\" width=\"150px\" height=\"150px\">"
let cloveHTML = "<img src=\"https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/clover-512.png\" width=\"150px\" height=\"150px\">"
let shoeHTML = "<img src=\"https://cdn3.iconfinder.com/data/icons/slot-machine-symbols-filled-outline/256/horseshoe-512.png\" width=\"150px\" height=\"150px\">"



//array of images to be shuffled through
const slot1 = [cherryHTML, sevenHTML, barHTML, bellHTML, diamondHTML, cloveHTML, shoeHTML];

let j = 1;
//shuffle pictures 'how many' times
const delay = 10;
//50 miliseconds between each cycle
const speed = 50;
//stackoverflow- http://jsfiddle.net/Curt/rjve4whe/1/ 
function shufflePicture() {
    console.log('shuffle picture')
    setTimeout(function () {
        console.log('timeout function')
        square.forEach(square => {
            square.innerHTML = getRandomNumber()
        })
        j++;
        if (j < delay) {
            shufflePicture();
        }
    }, speed)
};

//array to call on for shuffle function
function getRandomNumber () {
    let i = Math.floor(Math.random() * 7);
    return slot1[i]
} ;

//Spin button 
lever.addEventListener('click', () => {
    j = 1;
    shufflePicture();
    setTimeout(function () {
        //win statement
        if(item1.innerHTML == item2.innerHTML && item2.innerHTML == item3.innerHTML){
            winningDiv.innerHTML = 'WINNER!'
            console.log('You win!')
            }else{
            console.log('You lose')
        }
    }, delay * (speed +100))
 
})
//display "winner"/Loser



