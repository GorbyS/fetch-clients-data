const saveClientData = require("express").Router();
const clientModel= require("../../models/client");

saveClientData.post("/save-client", async (req, res) => {
    try {
        const {firstName, lastName, birthDate, sex} = req.body
        const client = new clientModel({
            firstName: firstName,
            lastName: lastName,
            birthDate: birthDate,
            sex: sex
        });
        const document = await client.save();
        return res.json({ 
            msg: `Client data has been saved successfully ${JSON.stringify(document)}`
        });
    } catch (err) {
        return res.json({
            msg: "Client data was not saved",
            error: err.message
        });
    }
});

saveClientData.get("/save-client", (req, res) => {
    res.send("Yes, you are on /save-client GETEM")
});

module.exports = saveClientData;