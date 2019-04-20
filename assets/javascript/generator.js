


//defining variables 
var wins = 0;
var losses = 0;
var score = 0;
var randomSmall;
var randomNumber; 

//function to intiate start of game
function intiate() {

    //random number generator for target
     randomNumber = Math.floor(Math.random() * 101) + 20;
    //console.log(randomNumber);
    $("#target").text(randomNumber);

    //random number generator for score, then random# is applied to button class


    $(".crystal").each(function () {

        randomSmall = Math.floor(Math.random() * 11) + 1;
        //console.log(randomSmall);
        $(this).attr("value", randomSmall);


    });

    //restarting variables
    score = 0;
    $("#score").text(score); 

}
intiate (); 


//click that makes game function
$(".crystal").on("click", function () {

    //making value strings into usable numbers
    var newScore = parseInt($(this).val());

    //adding up score everytime button is clicked
    score += newScore
    //console.log(score); 
    $("#score").text(score);

    //win and loss statments
    if (score === randomNumber) {
        wins++;
        $("#wins").text(wins);
        intiate (); 
    }
    else if (score > randomNumber) {
        losses++;
        $("#losses").text(losses);
        intiate (); 
    }

});








