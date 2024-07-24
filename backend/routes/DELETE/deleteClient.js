const deleteClient = require("express").Router();
const clientModel = require("../../models/client");

deleteClient.delete("/delete-client/:id", async (req, res) => {
    try {
        const clientId = req.params.id;
        const deletedClient = await clientModel.findByIdAndDelete(clientId);

        if (!deletedClient) {
            return res.status(404).json({
                msg: "Client not found",
                deleted: false
            });
        }

        return res.json({
            msg: "Client successfully deleted",
            deleted: true,
            clientInfo: deletedClient
        });
    } catch (err) {
        return res.status(500).json({
            msg: "An error occurred while deleting the client",
            deleted: false,
            error: err.message
        });
    }
});

module.exports = deleteClient;

//Code-review