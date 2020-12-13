const fs = require("fs");
const uniqid = require("uniqid");

module.exports = (app) => {
  let noteData = require(__dirname + "/../db/db.json");

  app.get("/api/notes", (req, res) => {
    res.json(noteData);
  });

  app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    newNote.id = uniqid();

    noteData.push(newNote);

    const rawData = JSON.stringify(noteData);

    fs.writeFile(__dirname + "/../db/db.json", rawData, (err) => {
      if (err) throw err;
    });
    res.end();
  });

  

};
