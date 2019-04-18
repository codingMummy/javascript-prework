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

var computerMove, randomNumber;
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