const express = require("express");
const router = express.Router();
const db = require("../database");

//POST
router.post("/", (req, res) => {
    const {id_usuario, id_jogo, horas_jogadas} = req.body;

    if (!id_usuario || !id_jogo || !horas_jogadas) {
        return res.status(400).json({erro: "Dados obrigatórios!"});
    }

    db.run(
        "INSERT INTO jogos (id_produtora, titulo, preco) VALUES (?, ?, ?)",
        [id_usuario, id_jogo, horas_jogadas],
        function(err){
            if (err) return res.status(500).json(err);
            res.json({id: this.lastID})
        }
    );
});



module.exports = router;