
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








//Solution
/*
let numberToBeGuessed = null;
let userName;
let currentGuess;
let numberOfGuesses = 5;
let minNum = 0;
let maxNum = 25;

while (userName === undefined || userName === null || userName.length === 0) {
  userName = prompt("Hoe heet je?");
}

alert("Welkom bij Guess the Number " + userName + "!!");

let selectedMinNum = parseInt(
  prompt("Vanaf welk nummer mag er geraden worden? (standaard: 0)")
);
if (!isNaN(selectedMinNum) && selectedMinNum >= 0) {
  minNum = selectedMinNum;
}

let selectedMaxNum = parseInt(
  prompt(
    "Tot welk nummer mag er geraden worden? (standaard: 25, hoger dan " +
      minNum +
      ")"
  )
);
if (!isNaN(selectedMaxNum)) {
  maxNum = selectedMaxNum;
}

while (maxNum <= minNum) {
  let selectedMaxNum = parseInt(
    prompt("Tot welk nummer mag er geraden worden? (hoger dan " + minNum + ")")
  );
  if (!isNaN(selectedMaxNum)) {
    maxNum = selectedMaxNum;
  }
}

alert(
  "Je hebt nu 5 pogingen om het getal te raden. Het getal ligt tussen " +
    minNum +
    " en " +
    maxNum +
    ". Heel veel succes!"
);

numberToBeGuessed = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
console.log("Pssst het nummer is: " + numberToBeGuessed);

while (currentGuess !== numberToBeGuessed) {
  if (numberOfGuesses < 1) {
    alert(
      "Helaas, je pogingen zijn op. Je hebt verloren. We beginnen weer opnieuw met een nieuw nummer! Het nummer ligt nog steeds tussen " +
        minNum +
        " en " +
        maxNum +
        "."
    );
    numberOfGuesses = 5;
    numberToBeGuessed = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  }
  currentGuess = parseInt(prompt("Voer een nummer in.."));

  while (isNaN(currentGuess)) {
    currentGuess = parseInt(
      prompt(
        "Je invoer was geen nummer. Voer alleen nummers in! Probeer het nogmaals"
      )
    );
  }

  alert("Je gok is: " + currentGuess);

  if (currentGuess > numberToBeGuessed) {
    numberOfGuesses--;
    if (numberOfGuesses < 1) {
      alert("Dit was je laatste poging.");
    } else {
      alert(
        "Helaas, je gok was te hoog. Je hebt nog: " +
          numberOfGuesses +
          " keuze(s) over. Probeer het opnieuw:"
      );
    }
  } else if (currentGuess < numberToBeGuessed) {
    numberOfGuesses--;
    if (numberOfGuesses < 1) {
      alert("Dit was je laatste poging.");
    } else {
      alert(
        "Helaaaas, je gok was te laag. Je hebt nog: " +
          numberOfGuesses +
          " keuze(s) over. Probeer het opnieuw:"
      );
    }
  } else {
    alert("Goed geraden, het nummer was inderdaad: " + currentGuess);
    alert(
      "We sluiten de game af. Bedankt voor het spelen " +
        userName +
        ", tot de volgende keer!"
    );
  };
}; */
