function startProcess() {
    const BASE_NUMBER = 10; // Constants
    let name = prompt("What is your name?");
    let userNumber = parseFloat(prompt("Enter a number:"));

    const sum = BASE_NUMBER + userNumber;
    const difference = BASE_NUMBER - userNumber;
    const product = BASE_NUMBER * userNumber;
    const quotient = BASE_NUMBER / userNumber;

    let sentence = prompt("Enter a short sentence:");
    sentence = sentence.toUpperCase() + " | " + sentence.toLowerCase();

    const message = userNumber >= 0 ? "Positive or Zero" : "Negative";

    let output = `<p>Hello, ${name}!</p>`;
    output += `<p>Arithmetic Results: Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}</p>`;
    output += `<p>Processed Sentence: ${sentence}</p>`;
    output += `<p>Number Check: ${message}</p>`;
    
    output += "<p>Counting from 1 to your number:</p>";
    for (let i = 1; i <= userNumber; i++) {
        output += `<p>${i}</p>`;
    }
    
    output += "<p>Counting down from 5:</p>";
    let count = 5;
    while (count > 0) {
        output += `<p>${count}</p>`;
        count--;
    }
    
    const fruits = [];
    for (let i = 0; i < 3; i++) {
        fruits[i] = prompt(`Enter your favorite fruit #${i + 1}:`);
    }
    output += `<p>Your favorite fruits are: ${fruits.join(", ")}</p>`;
    
    document.getElementById("output").innerHTML = output;
}
