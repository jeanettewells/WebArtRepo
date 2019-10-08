console.log("hey!")

////// switch statements //////

////// functions //////

// function to add numbers together
function addNumbers(num1, num2){ // function name(argument1, argument2)
    return num1 + num2;
}

addNumbers(1, 2);

let addedNumbers = addNumbers(1, 2);
console.log(addedNumbers);

function addStrings(num){
    return "the added number = " + num;
}

let newNumber = 10;

console.log(newNumber);

newNumber = addStrings(newNumber);
console.log (newNumber);

////// classes //////

////// scope //////
for(let i = 0; i < 7; i++){
    console.log("first loop: " + i)

}

for(let i = 0; i < 10; i ++){
    console.log("second loop: " + i)
}

////// arrays //////

let number = 2;
let numberArray = [1, 2, 3, 4, 5, 6];

console.log(numberArray);

let stringArray = ['fish', 'cat', 'dog', 'horse']; // engineers start count at 0
                                                   // [0, 1, 2, 3] but length is 4
for(let i = 0; i < stringArray.length; i++){
    console.log(stringArray[i]);
}

////// manipulating the DOM (document object model) //////

let javaContainer = document.querySelector('.container') // look inside document for container

for(let i = 0; i < 10; i++){
    let div = document.createElement('div');
    javaContainer.appendChild(div);
}

console.log(javaContainer);

let multiDivs = javaContainer.querySelectorAll('div'); // put all divs in array
console.log (multiDivs.length);

setInterval(function() {

    for(let i = 0; i < multiDivs.length; i++){
        multiDivs[i].classList.add('box');
        multiDivs[i].style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        multiDivs[i].style.width = `${Math.random()*255}px`;
    }

}, 100);


// let innerDiv = javaContainer.querySelector('div'); // look inside javaContainer for div

// innerDiv.classList.add('box');

