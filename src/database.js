//require
const lowdb = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync"); //tipo de db

//global variable
let db;

async function createConections() {
  const adapter = new FileAsync("db.json");
  db = await lowdb(adapter);
  db.defaults({ tasks: [] }).write(); //initial and format data
}

const getConnection = () => db;

module.exports = {
  createConections,
  getConnection,
};
