const express = require("express");
const router = express.Router();
const db = require("../database");

//POST
router.post("/", (req, res) => {
    const {id_produtora, titulo, preco} = req.body;

    if (!id_produtora || !titulo || !preco) {
        return res.status(400).json({erro: "Dados obrigatórios!"});
    }

    const stmt = db.prepare(
        "INSERT INTO jogos (id_produtora, titulo, preco) VALUES (?, ?, ?)",
    );
    const resultado = stmt.run(id_produtora, titulo, preco);
});

//GET TODOS
router.get("/", (req, res) => {
    db.all("SELECT * FROM jogos ORDER BY id DESC", [] (err, rows)); 
});

//PATCH PREÇO

//GET PREÇO
router.get("/:preco", (req, res) => {
    db.all("SELECT * FROM jogos WHERE id=?", [req.params.preco], (err, row) => {
        if (err) return res.status(500).json(err);
        res.json(row);
    });
});

module.exports = router;