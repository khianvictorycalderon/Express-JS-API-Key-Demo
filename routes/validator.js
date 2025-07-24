const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "API Index"
    })
});

router.get("/validator", (req, res) => {
    res.json({
        message: "Validator"
    })
});

module.exports = router;