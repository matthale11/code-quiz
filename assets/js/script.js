// DOM variables
var questionContainer = document.getElementById("question");
var optionsContainer = document.getElementById("answers");

// JS variables
var questionArray = [
    {
        text: "Inside which HTML element do we put the Javascript?",
        options: ["1. <javascript", "2. <script>", "3. <scripting>", "4. <js>"],
        answerIndex: 1
    },
    {
        text: "What is the correct place to insert a JavaScript?",
        options: ["1. Both thea <head> and <body> sections are correct", "2. The <body> section", "3. The <head> section", "4. After the <body>"],
        answerIndex: 1
    },
    {
        text: "What is the correct syntax referring to a script callled 'xxx.js'",
        options: ["1. <script src='xxx.js'>", "2. <script href='xxx.js'", "3. <script rel='xxx.s'", "4. <script link='xxx.js'"],
        answerIndex: 0
    },
    {
        text: "How do you write 'Hello World' in an alert box?",
        options: ["1. msg('Hello World');", "2. alert('Hello World');", "3. msgBox('Hello World');", "4. alertBox('Hello World');"],
        answerIndex: 1
    },
    {
        text: "How do you write an IF statement in JavaScript?",
        options: ["1. if i==5 then", "2. if (i==5)", "3. if i=5", "4. if i=5 then"],
        answerIndex: 1
    },
];

var currentIndex = 0;

// Function definitions
function displayQuestion () {
    questionContainer.innerHTML = "";
    // Pull the question text off the object
    // 1. Create an element
    var questionElement = document.createElement("p");
    // 2. Add content
    questionElement.textContent = questionArray[currentIndex].text;
    // 3. Append to an existing element
    questionContainer.append(questionElement);

    // Pull the options off the object and iterate over them
    for (var i=0; i < questionArray[currentIndex].options.length; i++) {
        // 1. Create an element
        var optionsElement = document.createElement("button");
        // 2. Add content
        optionsElement.textContent = questionArray[currentIndex].options[i];
        // 3. Append to an existing element
        optionsContainer.append(optionsElement);
    }
}

// Event listeners
optionsContainer.addEventListener("click", function() {
    
    // TODO: Need to capture the button guessed and compare to correct answer from the array in order to advance
    console.log(optionsContainer.event.target);
    
    if(currentIndex < questionArray.length -1) {
        currentIndex++;
    } else {
        alert("Wrong answer...please guess again.");
        // TODO: Subtract time from the clock

    }
    displayQuestion();
});

// Function calls
displayQuestion();