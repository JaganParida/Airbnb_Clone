const express = require("express");
const app = express();
const mongoose = require("mongoose");

//database connection
const dbUrl = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

//server listening
app.listen(8080, () => {
  console.log("server is listening to port 8080");
});
