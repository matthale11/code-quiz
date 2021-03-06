// DOM variables
var questionContainer = document.getElementById("question");
var optionsContainer = document.getElementById("answers");
var startButton = document.getElementById("start");
var timerContainer = document.getElementById("time-left");

// JS variables
var questionArray = [
    {
        text: "Inside which HTML element do we put the Javascript?",
        options: ["1. <javascript>", "2. <script>", "3. <scripting>", "4. <js>"],
        solution: "2. <script>"
    },
    {
        text: "What is the correct place to insert a JavaScript?",
        options: ["1. Both thea <head> and <body> sections are correct", "2. The <body> section", "3. The <head> section", "4. After the <body>"],
        solution: "2. The <body> section"
    },
    {
        text: "What is the correct syntax referring to a script called 'xxx.js'",
        options: ["1. <script src='xxx.js'>", "2. <script href='xxx.js'", "3. <script rel='xxx.s'", "4. <script link='xxx.js'"],
        solution: "1. <script src='xxx.js'>"
    },
    {
        text: "How do you write 'Hello World' in an alert box?",
        options: ["1. msg('Hello World');", "2. alert('Hello World');", "3. msgBox('Hello World');", "4. alertBox('Hello World');"],
        solution: "2. alert('Hello World');"
    },
    {
        text: "How do you write an IF statement in JavaScript?",
        options: ["1. if i==5 then", "2. if (i==5)", "3. if i=5", "4. if i=5 then"],
        solution: "2. if (i==5)"
    },
];

var questionIndex = 0;
var timeInterval = 40;
var interval;

// Function definitions

function startTimer() {
    interval = setInterval(function(){
        // Update the span to reflect the current time
        timerContainer.textContent = timeInterval;
        if(timeInterval === 0) {
            clearInterval(interval);
            alert("GAME OVER");
        }
        timeInterval--;
    }, 1000);
}

function displayQuestion () {
    questionContainer.innerHTML = "";
    // Pull the question text off the object
    // 1. Create an element
    var questionElement = document.createElement("p");
    // 2. Add content
    questionElement.textContent = questionArray[questionIndex].text;
    // 3. Append to an existing element
    questionContainer.append(questionElement);

    // Pull the options off the object and iterate over them
    optionsContainer.innerHTML = "";
    for (var i=0; i < questionArray[questionIndex].options.length; i++) {
        // 1. Create an element
        var optionsElement = document.createElement("button");
        // 2. Add content
        optionsElement.textContent = questionArray[questionIndex].options[i];
        optionsElement.onclick = checkAnswer;
        optionsElement.setAttribute("value", questionArray[questionIndex].options[i]);
        // 3. Append to an existing element
        optionsContainer.append(optionsElement);
    }
}

function checkAnswer () {
    // Compare clicked value to the solution value
    if(questionIndex < questionArray.length -1 && this.value === questionArray[questionIndex].solution) {
        questionIndex++;
    } else if(questionIndex < questionArray.length && this.value !== questionArray[questionIndex].solution) {
        alert("Wrong answer...please guess again.");
        timeInterval = timeInterval -5;
    } else {
        clearInterval(interval);
        var initials = prompt("Your score is " + timeInterval, "Please enter your initials");
        window.location.href = "scores.html";
        //  Save score and initials to local storage
        var highScores = JSON.parse(localStorage.getItem("scores")) || [];
        var newScore = {
            score: timeInterval,
            initials: initials,
        }
        highScores.push(newScore);
        localStorage.setItem("scores", JSON.stringify(newScore));
        // TODO: Append new scores and initials to the high score list

    }
    displayQuestion();
};

// Event listeners and function calls
startButton.onclick = function() {
    startTimer();
    displayQuestion();
}