// var obj = {
//   name: 'Guilherme'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

const fs = require('fs');

var originaNote = {
  title: 'Some title',
  body: 'Some body'
}

var originalNoteString = JSON.stringify(originaNote)
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof notes);
console.log(note.title);