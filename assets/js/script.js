// DOM variables
var questionContainer = document.getElementById("question");
var optionsContainer = document.getElementById("answers");
var timerContainer = document.getElementById("time-left");

// JS variables
var questionArray = [
    {
        text: "Inside which HTML element do we put the Javascript?",
        options: ["1. <javascript>", "2. <script>", "3. <scripting>", "4. <js>"],
        answerIndex: 1
    },
    {
        text: "What is the correct place to insert a JavaScript?",
        options: ["1. Both thea <head> and <body> sections are correct", "2. The <body> section", "3. The <head> section", "4. After the <body>"],
        answerIndex: 1
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
var timeInterval = 50;

// Function definitions

function startTimer() {
    // TODO: Start timer when start button is pressed
    timeInterval = setInterval(function(){
        // Create an element
        var timerElement = document.createElement("p");
        // Add content
        timerContainer.textContent = timeInterval;
        // Append content
        timerContainer.append(timerElement);
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
    // TODO: Compare clicked value to the solution value
    console.log(this.value);
    var solutionElement = questionArray[questionIndex].solution;
    console.log(solutionElement);
    if(questionIndex < questionArray.length -1 && this.value === questionArray[questionIndex].solution) {
        console.log("Correct answer!")
        questionIndex++;
    } else {
        alert("Wrong answer...please guess again.");
        // TODO: Subtract time from the clock
    
    }
    displayQuestion();
};


// Event listeners


// Function calls
displayQuestion();