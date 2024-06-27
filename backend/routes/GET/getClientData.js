const getClientData = require("express").Router();
const clientModel= require("../../models/client");

getClientData.get("/get-client", async (req, res) => {
    try {
        const docs = await clientModel.find({});

        if(!docs || docs.length == 0) {
            return res.json({
                msg: "No clients found",
                documents: []
            });
        };

        return res.json({
            msg: "Successfully get a clients data",
            documents: docs
        });

    } catch (err) {
        return res.json({
            msg: "An error occurred while fetching client data",
            documents: [],
            error: err.message
        });
    }
});
module.exports = getClientData;

