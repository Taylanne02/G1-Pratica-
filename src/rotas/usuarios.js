const express = require("express");
const router = express.Router();
const db = require("../database");

//POST
router.post("/", (req, res) => {
    const {nome, cpf, eamil} = req.body;

    if (!nome || !cpf || !eamil) {
        return res.status(400).json({erro: "Dados obrigatórios!"});
    }

    db.run(
        "INSERT INTO usuarios (nome, cpf, email) VALUES (?, ?, ?)",
        [nome, cpf, eamil],
        function(err){
            if (err) return res.status(500).json(err);
            res.json({id: this.lastID})
        }
    );
});

//GET CPF
router.get("/:cpf", (req, res) => {
    db.all("SELECT * FROM usuarios WHERE id=?", [req.params.cpf], (err, row) => {
        if (err) return res.status(500).json(err);
        res.json(row);
    });
});


//DELETE 
router.delete("/:id", (req, res) => {
    db.run("DELETE FROM usuarios WHERE id=?", [req.params.id], function(err){
        if (err) return res.status(500).json(err);
        res.json({deletado})
    })
})

module.exports = router;