let names = "john, janet, alesia, greg, katelyn, jeanette"; // [0 1 2 3 4 5]
let characters = "asdfghjkl"

console.log(names);
console.log(characters);

// split() accepts a delimitaor 
let charArray = characters.split(''); // to seperate array
console.log(charArray);

let namesArray = names.split(',');
console.log(namesArray);


/////////// generating random URLs /////////////

function generateURL() {

    let characterList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678990"
    console.log(characterList);

    let alphabetArray = characterList.split('');
    console.log(alphabetArray);

    let randomString = "";

    for (let i = 0; i < 5; i++) {
        let randomNum = Math.floor(Math.random() * alphabetArray.length);
        // console.log(randomNum);

        let randomChar = alphabetArray[randomNum];
        // console.log(randomChar);

        randomString += randomChar;
        // console.log();
    }
    // console.log(randomString);

    let randomURL = `https://i.imgur.com/${randomString}.jpg`;
    // console.log(randomURL);

    return randomURL;
}

///////// dom manipulation ////////////

let javaContainer = document.querySelector('#container');
let javaBoxes;

//creating twenty new div elements
for (let i = 0; i < 20; i++) {
    let newDiv = document.createElement('div');
    javaContainer.appendChild(newDiv);

    javaBoxes = container.querySelectorAll('div');
    javaBoxes[i].classList.add('box');
}

for (let i = 0; i < javaBoxes.length; i++) {
    let currentBox = javaBoxes[i];
    currentBox.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    currentBox.innerHTML = generateURL();
    // currentBox.style.backgroundImage = `url('${generateURL()}')`;
}
