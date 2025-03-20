function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomWord(words: string[]): string {
  const randomIndex = getRandomNumber(0, words.length - 1);
  return words[randomIndex];
}

const words = ["hello", "world", "typescript", "project"];
console.log(getRandomWord(words));
