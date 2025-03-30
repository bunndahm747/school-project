// File: main.ts
// This file contains the main entry point for your application. You can add or modify code here.
// Example usage:
// import { app } from 'electron';
// app.listen(3000);

import * as fs from 'fs';

(async () => {
  const filePath = process.env['HOME'] || '/dev/null';
  try {
    await fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
      }
    });
  } catch (e) {
    console.error(e);
  }
})();
