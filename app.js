//Variables for elements
const slot = document.querySelector('slotMachine')
const lever = document.getElementById('lever')
const square = document.querySelectorAll('.slot')
const slot1 = [1, 2, 3];
// const shuffleArray = array.sort((a,b) => 0.5 - Math.random());
console.log(square) 
//array to call on for shuffle function
function getRandomNumber (slot1) {
    return Math.floor(Math.random() * 2) + 1;
} 

//Spin button 

lever.addEventListener('click', () => {
square.forEach(square => {
    square.innerHTML = '';
})
})


// function shuffle(array) {
//     let currentIndex = array.length;
//     let randomIndex = undefined
//     while (currentIndex !=0) {
//         randomIndex = Math.floor(Math.random() *
//         currentIndex);
//         currentIndex--;
//         [array[currentIndex], array[randomIndex]] = [
//             array[randomIndex], array[currentIndex]];
        
//     }
//     return array;
// }

// function shuffleArray (slot1) {
    //     for (let i = slot1.length - 1; i > 0; i++) {
    //         const num = Math.floor(Math.random() * (i + 1));
    //         // const temp = array[i];
    //         // array[i] = array[num]
    //         // array[num] = temp;
    //     }
    //     console.log()
    //     })