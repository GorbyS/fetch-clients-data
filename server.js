const express = require("express");
const app = express();
const PORT = process. env.PORT || 5000;
const DbConnect = require("./backend/database/connect");
// const getMaterials = require("./routes/GET/getMaterial");
// const saveMaterial = require("./routes/POST/saveMaterial");
// const cors = require("cors");

DbConnect.connect();


// app.use(express.json({extended: false}));
// app.use(express.text({extended: false}));

// app.use("/", cors(), getMaterials);

// app.use("/", saveMaterial);


app.get("/", (req, res) => {
    res.send("Main page");
});

app.listen(PORT, (err) => {
    console.log(`Server runs on ${PORT}!`)
});