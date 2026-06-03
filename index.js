const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hola Docker y GitHub Actions");
});

app.listen(3000, () => {
    console.log("Servidor iniciado en puerto 3000");
});