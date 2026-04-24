const express = require("express");
const router = express.Router();
const db = require("../database");

//POST
router.post("/", (req, res) => {
    const {cnpj, nome, website} = req.body;

    if (!cnpj || !nome || !website) {
        return res.status(400).json({erro: "Dados obrigatórios!"});
    }

    db.run(
        "INSERT INTO produtoras (cnpj, nome, website) VALUES (?, ?, ?)",
        [cnpj, nome, website],
        function(err){
            if (err) return res.status(500).json(err);
            res.json({id: this.lastID})
        }
    );
});

//GET
//revisar
router.get("/", (req, res) => {
    db.all("SELECT * FROM produtoras ORDER BY id DESC", [] (err, rows)); 
});

module.exports = router;