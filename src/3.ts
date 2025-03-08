// Function to create a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to generate a random string of a given length
function getRandomString(length: number): string {
  let text = "";
  const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  for (let i = 0; i < length; i++) {
    text += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }
  
  return text;
}

// Function to check if a number is even or odd
function isEvenOdd(num: number): string {
  return num % 2 === 0 ? "even" : "odd";
}

// Function to calculate the sum of two numbers
function addNumbers(a: number, b: number): number {
  return a + b;
}
