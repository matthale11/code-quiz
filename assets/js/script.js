// DOM variables
var questionContainer = document.getElementById("question");
var optionsContainer = document.getElementById("answers");

// JS variables
var questionArray = [
    {
        text: "Inside which HTML element do we put the Javascript?",
        options: ["<javascript", "<script>", "<scripting>", "<js>"]
    },
    {
        text: "What is the correct place to insert a JavaScript?",
        options: ["Both thea <head> and <body> sections are correct", "The <body> section", "The <head> section", "After the <body>"]
    },
    {
        text: "What is the correct syntax referring to a script callled 'xxx.js'",
        options: ["<script src='xxx.js'>", "<script href='xxx.js'", "<script rel='xxx.s'", "<script link='xxx.js'"]
    },
    {
        text: "How do you write 'Hello World' in an alert box?",
        options: ["msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');", "alertBox('Hello World');"]
    },
    {
        text: "How do you write an IF statement in JavaScript?",
        options: ["if i==5 then", "if (i==5)", "if i=5", "if i=5 then"]
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
        var optionsElement = document.createElement("li");
        // 2. Add content
        optionsElement.textContent = questionArray[currentIndex].options[i];
        // 3. Append to an existing element
        optionsContainer.append(optionsElement);
    }
}

// Event listeners


// Function calls
displayQuestion();