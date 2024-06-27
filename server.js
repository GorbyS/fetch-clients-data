const express = require("express");
const app = express();
const PORT = process. env.PORT || 5000;
const DbConnect = require("./backend/database/connect");
const getClientData = require("./backend//routes/GET/getClientData");
const saveClientData = require("./backend/routes/POST/saveClientData");
const cors = require("cors");

DbConnect.connect();


app.use(express.json({extended: false}));
app.use(express.text({extended: false}));

app.use("/", cors(), getClientData);

app.use("/", cors(),saveClientData);


app.get("/", (req, res) => {
    res.send("Main page");
});

app.listen(PORT, (err) => {
    console.log(`Server runs on ${PORT}!`);
});