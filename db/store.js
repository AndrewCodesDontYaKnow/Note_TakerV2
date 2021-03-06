const orm = require("../config/orm.js");

// const util = require("util");
// const fs = require("fs");

// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
// const uuidv1 = require("uuid/v1");

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  getNotes() {
    console.log(`reading a note...`)
    return orm.showNotes("notes");
  }

  addNote(note) {
    console.log("writing new note...")
    console.log(note);
    return orm.create("notes", ["title", "text"], note)
  }

  removeNote(id) {
    // Get all notes, remove the note with the given id, write the filtered notes
    return orm.delete("notes", 'id', id)
  }
}

module.exports = new Store();