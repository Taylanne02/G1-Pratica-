const express = require("express");
const router = express.Router();
const db = require("../database");

//POST
router.post("/", (req, res) => {
    const {nome, cpf, eamil} = req.body;

    if (!nome || !cpf || !eamil) {
        return res.status(400).json({erro: "Dados obrigatórios!"});
    }

    const stmt = db.prepare(
        "INSERT INTO usuarios (nome, cpf, email) VALUES (?, ?, ?)",
    );
    const resultado = stmt.run(nome, cpf, email);
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