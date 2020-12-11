const fs = require("fs");

const noteData = require("../db/db.json");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => res.json("../db/db.json"));

  app.post("/api/notes", (req, res) => {
    for (let i = 0; i < noteData.length; i++) {
      noteData[i].id = i + 1;
    }

    noteData.push(req.body);
    res.json(true);
  });
};
