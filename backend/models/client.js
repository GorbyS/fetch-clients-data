const mongoose = require("mongoose");
const client = new mongoose.Schema({
    firstName: {
        type: String, 
        require: true
    },
    lastName: {
        type: String, 
        require: true
    },
    birthDate: {
        type: String, 
        require: true
    },
    sex: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Client", client);