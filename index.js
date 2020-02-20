const fs = require('fs');
// const letters = ['a', 'b', 'c', 'd', 'e', 'f']
const letters = ['a'];

letters.forEach(letter => {
  fs.readFile(`input/${letter}.txt`, (err, data) => {
    const lines = data.toString().split('\n');
    const numberOfLibraries = lines[0].split(' ')[1];
    const daysForScanning = lines[0].split(' ')[2];
    const books = lines[1].split(' ').map((score, index) => ({ id: index, score}))
    let libraries = [];
    for(let i = 0; i < numberOfLibraries; i++) {
      const totalBooks = lines[i+2].split(' ')[0];
      const signupDuration = lines[i+2].split(' ')[1];
      const shipCapacity = lines[i+2].split(' ')[2];
      const bookIds = lines[i+3].split(' ');
      libraries.push({ id: i, totalBooks, signupDuration, shipCapacity, bookIds });
    }

    console.log('books: ');
    console.log(books);
    console.log('libraries: ');
    console.log(libraries);
  });
});

