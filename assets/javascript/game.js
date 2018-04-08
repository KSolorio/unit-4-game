$(document).ready(function() {

// define global variables   
    var wins = 0;
    var losses = 0;

        //generates random number between 19-120 at the start of the game
            // = (max-min+1)+min
    var randomNumber = (Math.floor(Math.random() * 102) + 19);
    var gemCount = 0;
    
    
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
    console.log('computer # = ' + randomNumber);

    //displaying the random number
    $('.random-number').text(randomNumber);

// player clicks on crystal
    $('#crystal-1').on('click', function(){
        gemCount = gemCount + gemOne;
        $('.crystal-count').text(gemCount);
        
        if (gemCount === randomNumber) {
            winner();
        }
        else if (gemCount > randomNumber) {
            loser();
        }            
    });
    $('#crystal-2').on('click', function(){
        gemCount = gemCount + gemTwo;
        $('.crystal-count').text(gemCount);
        
        if (gemCount === randomNumber) {
            winner();
        }
        else if (gemCount > randomNumber) {
            loser();
        }            
    });
    $('#crystal-3').on('click', function(){
        gemCount = gemCount + gemThree;
        $('.crystal-count').text(gemCount);
        
        if (gemCount === randomNumber) {
            winner();
        }
        else if (gemCount > randomNumber) {
            loser();
        }            
    });
    $('#crystal-4').on('click', function(){
        gemCount = gemCount + gemFour;
        $('.crystal-count').text(gemCount);
        
        if (gemCount === randomNumber) {
            winner();
        }
        else if (gemCount > randomNumber) {
            loser();
        }            
    });
    

// this will update the players total score

// player wins if their total matches the random number
function winner() {
    wins++;
    $('#wins').text('Wins ' + wins);
    reset();
};
// player loses if score goes above the random number
function loser () {
    losses ++;
    $('#losses').text('Losses ' + losses);
    reset();
};
// GAME RESET
function reset() {
    randomNumber = (Math.floor(Math.random() *101) + 19);
        console.log('new # = ' + randomNumber);
    $('.random-number').text(randomNumber);
    var gemOne = (Math.floor(Math.random() * 12) + 1);
        console.log('gemOne new # ' + gemOne);
    var gemTwo = (Math.floor(Math.random() * 12) + 1);
        console.log('gemTwo new # ' + gemTwo);
    var gemThree = (Math.floor(Math.random() * 12) + 1);
        console.log('gemThree new # ' + gemThree);
    var gemFour = (Math.floor(Math.random() * 12) + 1);
        console.log('gemFour new # ' + gemFour);
    gemCount = 0;
    $('.crystal-count').text(gemCount);

};

});

