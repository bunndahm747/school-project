 
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const getRandomColor = () => {
    const colors = ["blue", "green", "red", "yellow"];
    return colors[getRandomInt(colors.length)];
}

const getRandomFruit = () => {
    const fruits = ["apple", "banana", "orange", "mango"];
    return fruits[getRandomInt(fruits.length)];
}

function generateTsCode() {
    let code = `import { getRandomInt, getRandomColor, getRandomFruit } from './utils';\n\n`;
    code += `const randomNumber = getRandomInt(10); // returns a random integer between 0 and 9 inclusive\n\n`;
    code += `const randomColor = getRandomColor(); // returns a random color string (e.g. "blue", "green", "red", or "yellow")\n\n`;
    code += `const randomFruit = getRandomFruit(); // returns a random fruit string (e.g. "apple", "banana", "orange", or "mango")\n\n`;
    code += `console.log(randomNumber, randomColor, randomFruit);`;
    return code;
}