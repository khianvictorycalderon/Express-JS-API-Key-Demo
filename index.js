const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

// Middlewares
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Running at http:localhost:${PORT}`);
})