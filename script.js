// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Function to prompt the user for input and check palindrome
function palindromeChecker() {
    // Create prompt container
    const promptContainer = document.createElement('div');
    promptContainer.classList.add('prompt-container');

    // Create prompt box
    const promptBox = document.createElement('div');
    promptBox.classList.add('prompt-box');

    // Prompt message
    const promptMessage = document.createElement('div');
    promptMessage.classList.add('prompt-message');
    promptMessage.textContent = "Enter a word or phrase:";
    promptBox.appendChild(promptMessage);

    // Input field
    const userInput = document.createElement('input');
    userInput.classList.add('prompt-input');
    userInput.setAttribute('type', 'text');
    promptBox.appendChild(userInput);

    // Button container
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    // Check button
    const checkButton = document.createElement('button');
    checkButton.classList.add('prompt-button');
    checkButton.textContent = "Check";
    checkButton.onclick = function() {
        const input = userInput.value.trim();
        if (input === "") {
            alert("Please enter a word or phrase.");
        } else {
            if (isPalindrome(input)) {
                alert(`"${input}" is a palindrome!`);
            } else {
                alert(`"${input}" is not a palindrome.`);
            }
            // Clear the input field for next input
            userInput.value = "";
            // Focus on the input field for next input
            userInput.focus();
        }
    };
    buttonContainer.appendChild(checkButton);

    // Cancel button
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('prompt-button', 'cancel-button');
    cancelButton.textContent = "Cancel";
    cancelButton.onclick = function() {
        // Remove the prompt container
        document.body.removeChild(promptContainer);
    };
    buttonContainer.appendChild(cancelButton);

    // Append button container to prompt box
    promptBox.appendChild(buttonContainer);

    // Append prompt box to prompt container
    promptContainer.appendChild(promptBox);

    // Append prompt container to the body
    document.body.appendChild(promptContainer);

    // Focus on the input field
    userInput.focus();
}

// Event listener to the button
document.getElementById('startButton').addEventListener('click', palindromeChecker);
