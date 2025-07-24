const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.json({
        message: "Index"
    })
})

app.use("/api", require("./routes/validator"));

app.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`);
})