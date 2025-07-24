const express = require("express");
const router = express.Router();

const validKeys = [
    "X-12B",
    "M-22B",
    "A-1MC",
    "B-77T",
    "X-Y4V"
];

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

    if (!validKeys.includes(apiKey)) {
        return res
            .status(401)
            .json({
                error: "Invalid API_KEY"
            })
    }
    
    res.json({
        message: "Validator"
    })
});

module.exports = router;