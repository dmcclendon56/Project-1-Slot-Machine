//Variables for elements
const slot = document.querySelector('slotMachine')
const lever = document.getElementById('lever')
const square = document.querySelectorAll('.slot')
const slot1 = [1, 2, 3];
// const shuffleArray = array.sort((a,b) => 0.5 - Math.random());

//array to call on for shuffle function
function getRandomNumber (slot1) {
    return Math.floor(Math.random() * 3) + 1;
} ;

//Spin button 
lever.addEventListener('click', () => {
    square.forEach(square => {
        square.innerHTML = getRandomNumber()
        
        // console.log(square) 
    })
    

})


