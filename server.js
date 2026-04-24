const express = require('express');
const app = express();


app.use(express.json());
app.get('/'
, (req, res) => {
res.json({ mensagem: 'Servidor funcionando!' });
});

app.use("/bibliotecas", require("./src/rotas/biblioteca"));
app.use("/jogos", require("./src/rotas/jogos"));
app.use("/produtoras", require("./src/rotas/produtoras"));
app.use("/usuarios", require("./src/rotas/usuarios"));

app.listen(3000, () => console.log('Rodando na porta 3000'));