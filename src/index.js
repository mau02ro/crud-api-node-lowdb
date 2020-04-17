//require
const app = require("./app");
const { createConections } = require("./database");

//initialize db
createConections();
//initialize serer
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
