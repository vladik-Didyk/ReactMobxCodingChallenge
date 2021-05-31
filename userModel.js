const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: Number,
    name: String,
    age: Number,
    timestamps: Date.now()
});


module.exports = mongoose.model('User', UserSchema);


// Please comment out all your code when you are finished.