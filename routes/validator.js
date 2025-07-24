const express = require("express");
const router = express.Router();

router.get("/", (_req, res) => {
    res.json({
        message: "API Index"
    })
});

router.get("/validator", (req, res) => {
    const apiKey = req.header("API_KEY");
    const { id } = req.body;

    if (!apiKey) {
        return res
            .status(400)
            .json({
                error: "Missing API_KEY in headers."
            });
    }
    
    res.json({
        message: "Validator"
    })
});

module.exports = router;