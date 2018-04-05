$(document).ready(function() {

// define global variables
    
    var wins = 0;
    var losses = 0;
    var totalScore = [];
    var randomNumber = [];
    var gemCount = [];

    var gemOne = [];
    var gemTwo = [];
    var gemThree = [];
    var gemFour = [];

// random number between 19-120 at start of game
    // randomNumber = (max-min+1)+min;
    function randomNumber () {
    return Math.floor(Math.random() * 102) + 19;
        console.log("random number = " + randomNumber());
}
    randomNumber();
    
    
// each crystal should have random number btw 1-12


// player clicks on crystal

// this will update the players total score

// player wins if their total matches the random number

// player loses if score goes above the random number

// the game should restart as soon as the player loses

});

