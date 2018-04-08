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
        console.log('1 = ' + gemOne);
    var gemTwo = (Math.floor(Math.random() * 12) + 1);
        console.log('2 = ' + gemTwo);
    var gemThree = (Math.floor(Math.random() * 12) + 1);
        console.log('3 = ' + gemThree);
    var gemFour = (Math.floor(Math.random() * 12) + 1);
        console.log('4 = ' + gemFour);


    //console log what the random number is
    console.log('computer# = ' + randomNumber);

    //displaying the random number
    $('.random-number').text(randomNumber);

// player clicks on crystal
    $('#crystal-1').on('click', function(){
        result = gemCount + gemOne;
        $('.crystal-count').text(gemCount);
        
                 
    
    
         
             

    })
    

// this will update the players total score

// player wins if their total matches the random number
function winner() {
    wins++;
    $('#wins').text(wins);
    reset();
}
// player loses if score goes above the random number
function loser () {
    losses ++;
    $('#losses').text(losses);
    reset();
}
// GAME RESET
function reset() {
    randomNumber = (Math.floor(Math.random() *101) + 19);
    console.log('new # = ' + randomNumber);
    $('.random-number').text(randomNumber);
    var gemOne = (Math.floor(Math.random() * 12) + 1);
    var gemTwo = (Math.floor(Math.random() * 12) + 1);
    var gemThree = (Math.floor(Math.random() * 12) + 1);
    var gemFour = (Math.floor(Math.random() * 12) + 1);
    totalScore = 0;
    gemCount = 0;
}

});

