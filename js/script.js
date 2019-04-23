/*import {
    compileFunction
} from "vm";

printMessage('Zagrałem ' + 'kamień' + '! Jeśli Twój ruch to ' + 'papier' + ', to wygrywasz!');

var computerMove;
computerMove = 'kamień';
var playerMove = 'papier';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ', to wygrywasz!');

var randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber) * /



var interestingNumber = Math.floor(Math.random() * 6 + 2);
printMessage('wylosowana liczba to: ' + interestingNumber)*/

/*var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
    computerMove = 'kamień';
} else if (randomNumber == '2') {
    computerMove = 'papier';
} else if (randomNumber == '3') {
    computerMove = 'nożyce'
} else {
    computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce. ');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
} else {
    playerMove = 'nieznany ruch';
    printMessage('Twój ruch błędny');
}
printMessage('Twój ruch: ' + playerMove);*/




var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput, resultPlayer = 0,
    resultComputer = 0;

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId);
        return 'błąd';
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
        resultPlayer = resultPlayer + 1;
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('wygrywasz!');
        resultPlayer = resultPlayer + 1;
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
        resultPlayer = resultPlayer + 1;
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis');
    } else {
        printMessage('Przegrywasz :(');
        resultComputer = resultComputer + 1;
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

}

function displayWinCounters() {
    var ss = document.getElementById('result');
    ss.textContent = resultPlayer + ' - ' + resultComputer;

    if (resultComputer - resultPlayer >= 10) {
        ss.className = 'red';
    } else {
        ss.className = 'green';
    }


}

// playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
// console.log('wybór ruchu gracza to: ' + playerInput);
// playerMove = getMoveName(playerInput);
// console.log('ruch gracza to: ' + playerMove);


var buttonRock, buttonPaper, buttonScissors;

function buttonClicked(playerMove) {
    clearMessages();
    console.log(playerMove + ' został kliknięty');
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
    displayWinCounters()
}

buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () {
    buttonClicked('kamień');
})

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () {
    buttonClicked('papier');
})

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () {
    buttonClicked('nożyce');
});