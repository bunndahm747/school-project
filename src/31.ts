// Example: This is a simple code to demonstrate how to use GitHub features with TypeScript

// Import necessary packages if any
import { writeFileSync } from 'fs';

// Function to print a message in uppercase and remove the first letter
function capitalizeAndRemoveFirstLetter(message: string): string {
    return message.charAt(0).toUpperCase() + message.slice(1);
}

// Example usage of the function
const originalMessage = "This is an example code demonstrating how to use GitHub features.";
const formattedMessage = capitalizeAndRemoveFirstLetter(originalMessage);
console.log(formattedMessage);

// Save the formatted message to a file
writeFileSync('formattedMessage.txt', formattedMessage, 'utf8');
