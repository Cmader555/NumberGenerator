

//defining variables 
var wins = 0;
var losses = 0;
var score = 0;
var randomSmall;





//random number generator for target
var randomNumber = Math.floor(Math.random() * 101) + 20;
console.log(randomNumber);
$("#target").text(randomNumber);


//random number generator for score, then random# is applied to button class
$(".crystal").each (function(){

    randomSmall = Math.floor(Math.random() * 11) + 1;
    console.log(randomSmall);
    $(this).attr("value", randomSmall);


}); 








