//Variables for elements
const slot = document.querySelector('slotMachine')
const lever = document.getElementById('lever')
const square = document.querySelectorAll('.slot')
const item1 = document.getElementById('slot1')
const item2 = document.getElementById('slot2')
const item3 = document.getElementById('slot3')
let imgHTML = "<img src=\"https://media.istockphoto.com/vectors/slot-machine-icons-set-vector-vector-id637107568?k=20&m=637107568&s=612x612&w=0&h=EAPBtI5cq82hQjAzG99IbZjBaN58KC5CrEKsN40cUuE=\" width=\"400px\" height=\"150px\">"
// img.src = "https://media.istockphoto.com/vectors/slot-machine-icons-set-vector-vector-id637107568?k=20&m=637107568&s=612x612&w=0&h=EAPBtI5cq82hQjAzG99IbZjBaN58KC5CrEKsN40cUuE=";

const slot1 = [1, 2, 3];
// const shuffleArray = array.sort((a,b) => 0.5 - Math.random());

//array to call on for shuffle function
function getRandomNumber () {
    let i = Math.floor(Math.random() * 3);
    return slot1[i]
} ;

//Spin button 
lever.addEventListener('click', () => {
    square.forEach(square => {
        square.innerHTML = getRandomNumber()
        // square.innerHTML = imgHTML
    })

        if(item1.innerHTML == item2.innerHTML && item2.innerHTML == item3.innerHTML){
            console.log('You win!')
    }else{
        console.log('You lose')
    }
    

})


