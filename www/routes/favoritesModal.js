// Dependency
var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

// Instantiate a userSchema object with the Schema class we just made
var UserSchema = new Schema({

});

// Create the "User" model with our UserSchema schema
var Favorites = mongoose.model("Favorites", UserSchema);

// Export the User model, so it can be used in server.js with a require
module.exports = Favorites;