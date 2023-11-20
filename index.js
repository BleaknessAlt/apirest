const express = require("express");
const app = express();
const PORT = false || 8080;

const personas = [
    {
        Pablo: "Gilipollas",
        Antonio: "Fantabuloso",
    },
];

app.get("/api", (req, res) => {
    res.json(personas);
});

app.post("/api:id", (req, res) => {
    const id = req.params.id;
    console.log(personas[id]);
});

app.listen(PORT);
