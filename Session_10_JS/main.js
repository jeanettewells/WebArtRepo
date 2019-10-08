
////////////// JAVASCRIPT READS FROM TOP TO BOTTOM /////////////////

///////// console messages /////////////////

console.log("hello world"); //print to console
console.warn("be careful"); //yellow warning in console
console.error("this is not good"); //error message in console


/////////// primitive data types (number, string, boolean, object, undefunded, null, symbols) /////////

console.log(typeof 1); //number
console.log(typeof "string"); //string
console.log(typeof true); //boolean (true or false)


////////////////// variables ///////////////////

let anotherNumber; //declaring a variable
let someNumber = 10; //initialiizing a variable
console.log(someNumber);

const thirdNumber = 8; //constant variable

let addedNumbers = someNumber + thirdNumber;
console.log(addedNumbers);

let modNumbers = someNumber % thirdNumber; //modulus - way to find the remainder of a number
console.log(modNumbers);


//////////////////// strings //////////////////

 console.log("string literal"); //a literal string

 let varString = "string as variable"; //string stored in a variable 
 console.log(varString);

 console.log("new \nline");

// concatenation: combine strings together

let name = "doog";
let nails = "orange";
console.log("His name is" + name + " and his nails are " + nails)

// or

console.log(`His name is ${name} and his nails are ${nails}`)


///////////////////// booleans //////////////////////

let cat = 1 == 2; //single = assigns one thing to another, double == checks if true
console.log(cat);


//////////////////////// null //////////////////////

//nothingness


//////////////////// undefined //////////////////////

let dog;
console.log (typeof dog)


//////////////////////// objects ////////////////////////

let tree = {
    genus: "oak",
    color: "green",
    branches: 7,
}

console.log(tree);
console.log(tree.genus) //parse object


/////////////////////// loops //////////////////////////

// for loops

for (let i = 0; i < 10; i++){ //create & initiallize variable, check for condition, add 1 each time through loop until condition is false
    console.log(`I had ${i} apples today`);
}

//while loop

let j = 0;

while(j < 5) { //manual for loop
    console.log(j);
    j++; 
}

/////////////////// conditional statements ///////////////

//if statements

let newNumber = 20;

if (newNumber < 20) {
    console.log("if");
}

else if (newNumber > 20) {
    console.log("else if");
}

else {
    console.log("else");
}


///////////////// working into HTML /////////////////////

const myText = document.getElementById("hey") 
let i = 0;

let x = setInterval(function() {
    myText.innerHTML = i;
    i++;

}, .1);
