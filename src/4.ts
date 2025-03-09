export function getRandomTsCode(): string {
  const lines = [];
  for (let i = 0; i < 10; i++) {
    let line = '';
    for (let j = 0; j < 20; j++) {
      line += Math.random().toString(36).charAt(2);
    }
    lines.push(line);
  }
  return lines.join('\n');
}
