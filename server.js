const express = require("express");
const app = express();
const PORT = process. env.PORT || 5000;
const DbConnect = require("./backend/database/connect");
const getClient = require("./backend//routes/GET/getClient");
const saveClient = require("./backend/routes/POST/saveClient");
const deleteClient = require("./backend/routes/DELETE/deleteClient");
const cors = require("cors");

DbConnect.connect();


app.use(express.json({extended: false}));
app.use(express.text({extended: false}));

app.use("/", cors(), getClient);
app.use("/", cors(), saveClient);
app.use("/", cors(), deleteClient);



app.get("/", (req, res) => {
    res.send("Main page");
});

app.listen(PORT, (err) => {
    console.log(`Server runs on ${PORT}!`);
});

//Code-review