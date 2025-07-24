const express = require("express");
const router = express.Router();
const validKeys = require("./api_keys");
const userList = require("./user_list");

router.get("/", (_req, res) => {
    res.json({
        message: "API Index"
    })
});

router.get("/validator", (_req, res) => {
    res.json({
        message: "Validator"
    });
})

router.post("/validator", (req, res) => {

    // Retrieve valid API keys
    const apiKey = req.header("API_KEY");

    // Retrieve all existing user ids
    const ids = userList.map(item => item.id);
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

    if (!ids.includes(id)) {
        return res
            .status(404)
            .json({
                error: "User ID not found."
            })
    }

    const user_data = userList.find(user => user.id === id);
    return res
        .status(200)
        .json({
            disclaimer: "All user data in this file is entirely fictional and created for educational or testing purposes only. Any resemblance to real persons, living or dead, is purely coincidental.",
            message: "User found",
            user_data
        })

});

module.exports = router;