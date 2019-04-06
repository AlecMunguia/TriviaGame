$(document).ready(function() {
    //count the seconds past
var counter = 0;
    //set total time
var timeLeft = 60;
    //set minutes and seconds
function convertSeconds(s) {
    var min = Math.floor(s / 60);
    var sec = s % 60;
    return min + ':' + sec;
}
    //display timer
var timer = $('#timer');
timer.html(convertSeconds('0'));
    //make timeLeft - seconds past
function timeIt() {
    counter++
    timer.html(convertSeconds(timeLeft - counter));  
}
setInterval(timeIt, 1000);

    // NEED TIMER TO STOP AT '0' AND DISPLAY SCORE ALERT //


$('#button').click(function () {
    alert ("You answered " + correct + " out of 4 correctly");
});

    // NEED TO COUNT NUMBER OF CORRECT / INCORRECT ANSWERS

var correct = 0;

var questions = [
    {   question:   "What macro does the keto diet restrict?",
        choiceA:    "Protein",
        choiceB:    "Carbohydrates",
        choiceC:    "Fiber",
        correct:    "B"
    },
    {   question:   "What is released by the liver during Ketosis?",
        choiceA:    "Ketones",
        choiceB:    "Exogenous Ketones",
        choiceC:    "Creatine",
        correct:    "A"
    },
    {   question:   "Which of these foods is permitted under the Ketogenic diet?",
        choiceA:    "Bananas",
        choiceB:    "Whole-Grain Bread",
        choiceC:    "Bacon",
        correct:    "C"
    },
    {   question:   "Which of these foods is NOT permitted under the Ketogenic diet?",
        choiceA:    "Rice",
        choiceB:    "Kimchi",
        choiceC:    "Cream Cheese",
        correct:    "A"        
}];

$("#first-question").text(questions[0].question);
$("#second-question").text(questions[1].question);
$("#third-question").text(questions[2].question);
$("#fourth-question").text(questions[3].question);


if(document.getElementById('radio1').checked) {
} else if(document.getElementById('radio2').checked) {
} else {
  return false;
}



        // TIMER NOTES
// start timer at 60 seconds
// have counter decrease by one every second
// when counter hits '0' have it stop and display 'score'

        // GAME NOTES
// display the 4 questions
// give 3 possible answers with buttons
// make only one button selectable at a time
// log correct and incorrect 
// create submit button that pushes the counter to '0'
// when counter hits '0' display results
});