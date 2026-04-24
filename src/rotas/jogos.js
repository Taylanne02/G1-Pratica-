const express = require("express");
const router = express.Router();
const db = require("../database");

//POST
router.post("/", (req, res) => {
    const {id_produtora, titulo, preco} = req.body;

    if (!id_produtora || !titulo || !preco) {
        return res.status(400).json({erro: "Dados obrigatórios!"});
    }

    db.run(
        "INSERT INTO jogos (id_produtora, titulo, preco) VALUES (?, ?, ?)",
        [id_produtora, titulo, preco],
        function(err){
            if (err) return res.status(500).json(err);
            res.json({id: this.lastID})
        }
    );
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