const {Schema} = require("mongoose");



const UserSchema = new Schema({
    name: {type : String, required: false, unique: false},
    age: {type : Number, required: false, unique: false},
    
},
{ timestamps: true }
);



module.exports = mongoose.model('User', UserSchema);


// Please comment out all your code when you are finished.