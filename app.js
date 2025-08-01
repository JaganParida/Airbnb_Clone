const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

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

app.get("/testListing", async (req, res) => {
  const sampleListing = new Listing({
    title: "My New Villa",
    description: "By the beach",
    image: "",
    price: 1200,
    location: "Calangute, Goa",
    country: "India",
  });

  try {
    await sampleListing.save();
    console.log("Sample was saved");
    res.send("Successful testing");
  } catch (err) {
    console.error("Error saving sample:", err);
    res.status(500).send("Error occurred");
  }
});

//server listening
app.listen(8080, () => {
  console.log("server is listening to port 8080");
});
