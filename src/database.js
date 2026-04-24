const Database = require('better-sqlite3'); 
const db = new Database('database.db');

db.exec(`
        CREATE TABLE IF NOT EXISTS produtoras(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cnpj TEXTO NOT NULL,
            nome TEXT NOT NULL,
            website TEXT NOT NULL
        )
    `);

    //jogos
db.exec(`
        CREATE TABLE IF NOT EXISTS jogos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_produtora INTEGER,
            titulo TEXTO NOT NULL,
            preco INTEGER NOT NULL,
            FOREIGN KEY (id_produtora) REFERENCES produtoras(id)
        )
    `);

    //biblioteca
db.exec(`
        CREATE TABLE IF NOT EXISTS biblioteca(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_usuario INTEGER,
            id_jogo INTEGER,
            horas_jogadas INTEGER NOT NULL,
            FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
            FOREIGN KEY (id_jogo) REFERENCES jogos(id)
        )
    `);

    //usuarios
db.exec(`
        CREATE TABLE IF NOT EXISTS usuarios(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXTO NOT NULL,
            cpf INTEGER NOT NULL,
            email INTEGER NOT NULL
        )
    `);

module.exports = db;