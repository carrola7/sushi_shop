var path = require("path"),
    fs = require("fs"),
    filePath = path.resolve(path.dirname(__dirname), "data/dishes.json");

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(filePath, "utf8"))
  },

  get: function() {
    return this.__readFile();
  }
}
