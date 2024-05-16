const mongoose = require("mongoose");
function connectToDb() {
  mongoose
    .connect(process.env.LOCAL_DATABASE)
    .then(() => console.log("Connected to database"));
}
module.exports = { connectToDb };
