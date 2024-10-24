alert(
    "\nHere are some rules for this crossword:-\n1.Click on any white box with a serial number to get the clue.\n2.Enter the answer in UPPERCASE letters\n3.Press 'Enter' to submit your answer.\n4.Press 'Hint' to reveal one letter in the selected word.\n\nPRESS OK TO CONTINUE"
    
)

// Crossword grid and solution
var G = []; // Grid that holds user answers
var L = [    // Correct answers in a 6x6 grid (adjusted for new values)
    ['T', 'R', 'U', 'S', 'T', 'S'],
    ['I', 'N', 'T', 'E', 'G', 'R'],
    ['T', 'R', 'A', 'N', 'S', 'P'],
    ['L', 'O', 'Y', 'A', 'L', 'T'],
    ['R', 'E', 'S', 'P', 'E', 'C'],
    ['E', 'P', 'U', 'T', 'A', 'T']
];

// Initialize the grid
function initializeGrid() {
    for (var i = 0; i < L.length; i++) {
        G[i] = [];
        for (var j = 0; j < L[i].length; j++) {
            G[i][j] = '';  // Initialize empty cells
        }
    }
}

// Function to check if the entered answer is correct
function verifyAnswer(Guess, startX, startY, across) {
    var correct = true;
    for (var i = 0; i < Guess.length; i++) {
        var x = startX;
        var y = startY;
        
        // Move across or down based on direction
        if (across) {
            y += i;
        } else {
            x += i;
        }

        // Check if guess matches the correct answer in the crossword
        if (Guess[i].toUpperCase() !== L[x][y].toUpperCase()) {
            correct = false;
            break;
        }
    }
    
    if (correct) {
        // If correct, insert the answer into the grid
        enterAnswer(Guess, startX, startY, across);
        alert("Correct Answer!");
    } else {
        alert("Incorrect Answer. Try again.");
    }
}

// Function to enter the user's guess into the crossword grid
function enterAnswer(Guess, startX, startY, across) {
    for (var i = 0; i < Guess.length; i++) {
        var x = startX;
        var y = startY;

        // Move across or down based on direction
        if (across) {
            y += i;
        } else {
            x += i;
        }

        // Update the grid with the user's correct guess
        G[x][y] = Guess[i].toUpperCase();
    }

    // You can also update the DOM or visual grid here, if necessary.
}

// Function to handle the Enter key press for input validation
function handleEnterKey(event, input, startX, startY, across) {
    if (event.key === "Enter") {
        var Guess = input.value.trim();  // Get the user's input and trim spaces
        if (Guess.length > 0) {
            verifyAnswer(Guess, startX, startY, across);  // Verify the answer
        }
        input.value = '';  // Clear the input field after submission
    }
}

// Example of initializing and using the functionality
initializeGrid();

// Assume we have an input field where the user types their guess
// Call this function on keypress or input event, e.g.:
// handleEnterKey(event, inputField, startX, startY, across);

function resizeInput() {
    const input = document.getElementById('myInput');
    // Set the width based on the scroll width of the input (content width)
    input.style.width = input.scrollWidth + 'px';
}

