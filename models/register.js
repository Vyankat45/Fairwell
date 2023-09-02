const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var registerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('Register', registerSchema);