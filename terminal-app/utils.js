const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
  const notes = loadNotes();

  const hasDuplicates = !!notes.find((n) => n.title === title);

  if (hasDuplicates) {
    console.log(chalk.bgRed('Note exists!'));

    return;
  }

  notes.push({ title, body });
  saveNotes(notes);

  console.log(chalk.bgGreen('Note added!'));
};

const removeNote = (title) => {
  const notes = loadNotes();

  const updatedNotes = notes.filter((n) => n.title !== title);

  if (updatedNotes.length === notes.length) {
    console.log(chalk.bgRed('No Note found!'));

    return;
  }

  console.log(chalk.bgGreen('Note removed!'));

  saveNotes(updatedNotes);
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.bgWhite('List of notes:'));

  notes.forEach((n, i) => console.log(`${++i}. ${n.title}`));
  1``;
};

const readNote = (title) => {
  const note = loadNotes().find((n) => n.title === title);

  if (!note) {
    console.log(chalk.bgRed('Note does not exist!'));

    return;
  }

  console.log(chalk.bgMagenta(`${note.title}`));
  console.log(`${note.body}`);
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(Notes));
};

const loadNotes = () => {
  try {
    const data = fs.readFileSync('notes.json').toString();

    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote,
};
