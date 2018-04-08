$(document).ready(function() {

// define global variables   
    var wins = 0;
    var losses = 0;
    var totalScore = [];   
        //generates random number between 19-120 at the start of the game
            // = (max-min+1)+min
    var randomNumber = (Math.floor(Math.random() * 102) + 19);
    var gemCount = [];
    
    
    // each crystal should have random number btw 1-12
    var gemOne = (Math.floor(Math.random() * 12) + 1);
        console.log(gemOne);
    var gemTwo = (Math.floor(Math.random() * 12) + 1);
        console.log(gemTwo);
    var gemThree = (Math.floor(Math.random() * 12) + 1);
        console.log(gemThree);
    var gemFour = (Math.floor(Math.random() * 12) + 1);
        console.log(gemFour);


    //console log what the random number is
    console.log(randomNumber);

    //displaying the random number
    $('.random-number').text(randomNumber);

// player clicks on crystal
    $("#crystal-1", "#crystal-2", "#crystal-3", "#crystal-4").on("click", function (count){
        gemOne ;
        gemTwo;
        gemThree;
        gemFour;
        console.log(gemOne, gemTwo, gemThree, gemFour)
    })

    count;

// this will update the players total score

// player wins if their total matches the random number

// player loses if score goes above the random number

// GAME RESET
function reset() {
    randomNumber = (Math.floor(Math.random() *101) + 19);
    console.log(randomNumber);
    $('.random-number').text(randomNumber);
    var gemOne = (Math.floor(Math.random() * 12) + 1);
    var gemTwo = (Math.floor(Math.random() * 12) + 1);
    var gemThree = (Math.floor(Math.random() * 12) + 1);
    var gemFour = (Math.floor(Math.random() * 12) + 1);
    $('.random-number').text(randomNumber);
    totalScore = 0;

}

});

