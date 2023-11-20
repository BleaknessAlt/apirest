const express = require("express");
const app = express();
const PORT = 3000;

const personas = [
    {
        Pablo: "Gilipollas",
        Antonio: "Fantabuloso",
    },
];

app.get("/api", function (req, res) {
    res.json(personas);
});

app.listen(PORT);
1;
