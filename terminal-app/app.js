const yargs = require('yargs');
const notesUtils = require('./utils.js');

// Yargs version
yargs.version('1.1.0');

// add, remove, read, list

// add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notesUtils.addNote(argv.title, argv.body);
  },
});

// remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notesUtils.removeNote(argv.title);
  },
});

// list command
yargs.command({
  command: 'list',
  describe: 'List of notes',
  handler() {
    notesUtils.listNotes();
  },
});

// read command
yargs.command({
  command: 'read',
  describe: 'Reading a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notesUtils.readNote(argv.title);
  },
});

yargs.parse();

// console.log(yargs.argv);
