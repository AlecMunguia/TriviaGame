$(document).ready(function() {
   //create quiz data
    var questions = [
        {   question:   "What macro does the keto diet restrict?",
            answers:    ["Protein", "Carbohydrates", "Fiber"],
            correct:    "Carbohydrates"
        },
       {    question:   "What is released by the liver during Ketosis?",
            answers:    ["Ketones", "Exogenous Ketones", "Creatine"],
            correct:    "Ketones"
        },
        {   question:   "Which of these foods is permitted under the Ketogenic diet?",
            answers:    ["Bananas", "Whole-Grain Bread", "Bacon"],
            correct:    "Bacon"
        },
        {   question:   "Which of these foods is NOT permitted under the Ketogenic diet?",
            answers:    ["Rice", "Kimchi", "Cream Cheese"],
            correct:    "Rice" 
        }
    ];
    //display questions and answers
   for (var i = 0; i < questions.length; i++) {
       $("#questionBox").append("<div>"+questions[i].question + "</div>");
        for (var j = 0; j < questions[i].answers.length; j++ ) {
            $("#questionBox").append('<input type = "radio" name = "option'+i+'" value = "'+questions[i].answers[j]+'">'+questions[i].answers[j])
        }
} 
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
    //stop timer at 0 then check answers and display results
    if (counter === 60) {
        clearInterval (intervalID);
        checkAnswers();
        alert ("You answered " + correct + " out of 4 correctly");
        correct = 0;
    } 
}
var intervalID = setInterval(timeIt, 1000);
    //when the button is clicked stop counter check answers and display results
$('#button').click(function () {
    clearInterval (intervalID);
    checkAnswers();
    alert ("You answered " + correct + " out of 4 correctly");
    correct = 0;
});
    //count correct answers
var correct = 0;

    //check answers
function checkAnswers () {
    if ($("input[name=option1]:checked").val() == questions[1].correct) {
        correct++;
        }
    if ($("input[name=option2]:checked").val() == questions[2].correct) {
        correct++;
        }
    if ($("input[name=option3]:checked").val() == questions[3].correct) {
        correct++;
        } 
    if ($("input[name=option0]:checked").val() == questions[0].correct) {
        correct++;
        }
    }
});