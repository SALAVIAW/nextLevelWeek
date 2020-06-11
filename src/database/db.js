// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que ira fazer operacoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db

// utilizar o objeto de banco de dados, para nossas operacoes
db.serialize(() => {
   // com comandos SQL eu vou:
   
   
    // // 1 criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         Address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // // 2 inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1567093321629-c23611f44d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "PaperSider",
    //     "Guilherme Gembala, Jardim America",
    //     "Numero 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Residuos Eletronicos, Lampadas"
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Castrado com sucesso")
    //     console.log(this)
    // }


    // db.run(query, values, afterInsertData)


    // 3 Consultar os dados da tabela
    // db.all(`SELECT name FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estao seus registros: ")
    //     console.log(rows)
    // })

    // 4 Deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso.")
    // })

})
