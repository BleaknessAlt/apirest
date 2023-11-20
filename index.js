const express = require("express");
const app = express();
const PORT = false || 8080;

//Endpoints para /concesionarios
app.get("/concesionarios", (req, res) => {});

app.post("/concesionarios", (req, res) => {});

//Endpoints para concesionarios con una id especifica
app.get("/concesionarios/:id", (req, res) => {});

app.put("/concesionarios/:id", (req, res) => {});

app.delete("/concesionarios/:id", (req, res) => {});

//End points para concesionarios
app.put("/concesionarios/:id/coches", (req, res) => {});

app.put("/concesionarios/:id/coches", (req, res) => {});

app.put("/concesionarios/:", (req, res) => {});


app.get("/concesionarios/:id/coches", (req, res) => {});

app.get("/concesioanrios/:id/coches/:cocheId", (req, res) => {});
