
const greeting = function () {
    person = prompt("Welcome! What is your name?", "Name");
    if (person != 0) {
        alert("Hey " + person);
        guessingGame();
    };
};


const guessingGame = function () {
    const smallestNumber = prompt("Please choose the SMALLEST number you want to play with:", "Number");
    const largestNumber = prompt("Please choose the LARGEST number you want to play with:", "Number");
    const randomNumber = Math.floor(Math.random() * (largestNumber - smallestNumber + 1) + smallestNumber);
    const guessedNumber = prompt("Enter a number between " + smallestNumber + " - " + largestNumber + " to start guessing..", "Number");

    for (i = 4; i > 0; i--) {
        if (randomNumber == guessedNumber) {
            alert("Congratulations! You have won the game!");
            alert("Bye " + person + ", see you!");
            break
        } else if (randomNumber != guessedNumber && i > 0) {
            alert("Unfortunately, that is not correct. You have " + i + " tries left");
            prompt("Enter a number between " + smallestNumber + " - " + largestNumber + " to start guessing..", "Number");

            if (randomNumber != guessedNumber && i == 1) {
                alert("Unfortunately, that is not correct. You have no more tries left, your game is over now.");
                alert("Bye " + person + ", see you!");
                break
            };
        };
    };
};

