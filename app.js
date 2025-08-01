const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

//database connection
const dbUrl = "mongodb://127.0.0.1:27017/WanderLodge";

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

//ejs and express setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

//server listening
app.listen(8080, () => {
  console.log("server is listening to port 8080");
});
