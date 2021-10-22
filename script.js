console.log("Assignment 1");

for (let i = 25; i >= 0; i--) {
    if ((i % 5) == 0) {
        console.log(i);
    }
}


console.log("");
console.log("Assignment 2");
console.log("");

// Loop through the array called people below:
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE! // WRITE YOUR LOOP BELOW THIS LINE:
for (i = 0; i <= people.length - 1; i++) {
    console.log(people[i]);
}

console.log("");
console.log("Assignment 3");
console.log("");

let arry = ([
    "Remove the plastic wrapper",
    "Microwave 45 seconds",
    "Let cool",
    "Enjoy!",
]);

function printInstructions(steps) {
    let count = 0;
    for (let i = 0; i < steps.length; i++) {
        count = count + 1;
        steps[i] = "Step " + count + " - " + steps[i];
        console.log(steps[i]);
    }
}
console.log(printInstructions(arry));


console.log("");
console.log("Assignment 4");
console.log("");

let input = prompt('Guess a Number between 1 and 10')
while (true) {
    input = prompt(input);
    if (input == 7) break;
}
console.log("OK YOU GUESS RIGHT");