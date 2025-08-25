const Listing = require("./models/listing");
const { listingSchema, reviewSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");
const Review = require("./models/review.js");

//check if the user is logged in
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // store the url they are requesting
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in to to use this function");
    return res.redirect("/login");
  }
  next();
};
