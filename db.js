const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./ws.db");

//db.serialize(function () {
//Criar a tabela
//db.run(`
//CREATE TABLE IF NOT EXISTS ideas(
//    id INTEGER PRIMARY KEY AUTOINCREMENT,
//    image TEXT,
//    title TEXT,
//    category TEXT,
//    description TEXT,
//    link TEXT
//    );
//`)
//
//// Inserir dados na tabela
//const query = `
//INSERT INTO ideas(
//    image,
//    title,
//    category,
//    description,
//    link
//) VALUES (?, ?, ?, ?, ?);
//`
//
//const values = [
//    "https://www.flaticon.com/svg/static/icons/svg/3787/3787779.svg",
//    "Cursos de Programação",
//    "Estudo",
//    "Imagem utilizada para descrever o tipo de curso",
//    "http://rocketseat.com.br"
//]
//
//db.run(query, values, function(err) { // <<< CALLBACK
//  if(err) return console.log(err)
//
//  console.log(this)
//})
/* Deletar um dado da tabela
   db.run(`DELETE FROM ideas WHERE id = ?`, [2], function(err){
       if(err) return console.log(err)

       console.log("DELETEI", this)
   }) */
// Consultar dados na tabela
//db.all('SELECT * FROM ideas', function(err, rows) {
//    if(err) return console.log(err)
//
//    console.log(rows)
//})
//});

module.exports = db;
