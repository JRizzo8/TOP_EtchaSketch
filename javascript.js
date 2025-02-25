// setup
const container = document.getElementById("sketchContainer");
let userInput = 16;
let gridCount = userInput * userInput;
let flexBas = 100/userInput;
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

function randomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}


function removeDiv(){
    // removes grid and replaces with an empty one
    container.replaceChildren();
}


function createDivs(){
    // creates grid
    for (let i = 0; i < gridCount; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newDiv.style.flexBasis = flexBas + "%";
        container.append(newDiv);

        newDiv.addEventListener ("mouseover", (event) => {
            event.target.style.backgroundColor = "#" + randomColor();
        });
    }

    document.body.appendChild(container);
}

// event listeners

resetBtn.addEventListener("click", function(){
    removeDiv();
    createDivs();
});

promptBtn.addEventListener("click", function() {
    userInput = prompt("enter a number between 1 and 100 please. (default is 16)");
    if (userInput <= 100 && userInput > 0){
        gridCount = userInput * userInput;
        flexBas = 100/userInput;
        removeDiv();
        createDivs();
    } else {
        alert("please choose a number between 1-100.");
    }
});



//main program

createDivs();