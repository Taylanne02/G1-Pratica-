const express = require("express");
const router = express.Router();
const db = require("../database");

//POST
router.post("/", (req, res) => {
    const {cnpj, nome, website} = req.body;

    if (!cnpj || !nome || !website) {
        return res.status(400).json({erro: "Dados obrigatórios!"});
    }

    const stmt = db.prepare(
        "INSERT INTO produtoras (cnpj, nome, website) VALUES (?, ?, ?)",
    );
    const resultado = stmt.run(cnpj, nome, website);
});

//GET
//revisar
router.get("/", (req, res) => {
    db.all("SELECT * FROM produtoras ORDER BY id DESC", [] (err, rows)); 
});

module.exports = router;