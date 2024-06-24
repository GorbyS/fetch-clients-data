const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

class DbConnect {
    connect() {
        mongoose.connect(dbUrl)
            .then((res) => {
                console.log("Successfully connected to the database");
            })
            .catch(err => {
                console.error("Database connection error:", err);
            });
    }
}

module.exports = new DbConnect();