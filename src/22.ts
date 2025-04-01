// 导入必要的库
import { readFileSync } from 'fs';

// 读取文件内容并显示给用户
const content = readFileSync('./example.txt', 'utf8');
console.log(content);
