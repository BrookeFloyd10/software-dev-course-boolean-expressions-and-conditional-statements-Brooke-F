/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

// const readline = require('readline-sync');

// const hasTorch = true;
// const hasMap = false;

// console.log("You see two paths: one leads to the mountains, the other to the village.");
// const choice = readline.question("Do you go to the 'mountains' or the 'village'?").trim().toLowerCase();

// if (choice === "mountains" && hasTorch) {
//   console.log("You safely navigate through the dark mountains.");
// } else if (choice === "mountains" && !hasTorch) {
//   console.log("It's too dark to proceed. You decide to turn back.");
// } else if (choice === "village" || hasMap) {
//   console.log("You find your way to the village.");
// } else {  
//   console.log("You get lost and wander aimlessly.");
// }

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasKnife = true;
const hasCharm = true;
let hasSilverKey = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");

const choice = readline.question("Do you go to the 'mountains' or the 'village'? ").trim().toLowerCase();

if (choice === "mountains" && hasTorch) {

    console.log(
        "You safely navigate your way into the eerie mountains. A sense of unease grows as you go deeper.\n" +
        "You feel like you're not alone. You stumble and fall down a slope.\n" +
        "As you recover, you notice an opening in the mountainside that leads to a cave."
    );

    const caveChoice = readline.question("Do you enter the 'cave' or do you 'leave'? ").trim().toLowerCase();

    if (caveChoice === "cave") {

        console.log(
            "Inside the cave you find an old locked chest.\n" +
            "It reads: 'If it's fortune you seek, go have a drink'.\n" +
            "You decide to continue your journey toward the village."
        );

        if (hasSilverKey) {
            console.log("You use the silver key and unlock the chest. YOU WIN.");
        } else {
            console.log("The chest remains locked. You leave it behind.");
        }

    } else {
        console.log("You decide to leave the cave and head toward the village.");
    }

} else if (choice === "village" || hasMap) {

    console.log("You arrive at the village.");

    console.log(
        "You walk down a dirt path and see a tavern.\n" +
        "An old woman gestures for you to enter."
    );

    const tavernChoice = readline.question("Do you enter or run? ").trim().toLowerCase();

    if (tavernChoice === "enter" && hasKnife) {

        console.log("You enter and sit at a table.");

        const answer = readline.question(
            "She asks: What is worth more than gold, but cannot be held? "
        ).trim().toLowerCase();

        if ((answer === "wisdom" || answer === "truth") && hasCharm) {

            console.log("She smiles and gives you a silver key.");

            hasSilverKey = true;

        } else {
            console.log("She looks disappointed and walks away.");
        }

    } else if (tavernChoice === "enter" && !hasKnife) {

        console.log(
            "You approach the tavern, but a chill stops you.\n" +
            "You realize your knife is missing and step back."
        );

    } else {
        console.log("You run away before anyone notices you.");
    }

} else {
    console.log("You hesitate and decide not to take either path.");
}