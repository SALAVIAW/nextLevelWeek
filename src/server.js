const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db") //posso ou nao colocar o .js aqui nessa linha


// Configurar pasta publica
server.use(express.static("public"))


// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", { // primeiro argumento LOCAL DA PASTA DOS ARQUIVOS HTML, segunda argumente um eh um OBJETO - primeira propriedade qual eh o servidor EXPRESS, e a segunda propriedade NOCACHE
    express: server,
    noCache: true
})


// configurar caminhos da minha aplicacao
//pagina inicial
//req: Requisicao and res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {

    // pegar os dados do banco de dados
        db.all(`SELECT * FROM places`, function(err, rows) {
            if(err) {
                return console.log(err)
            }

            const total = rows.length


            //mostrar a pagina html com os dados do banco de dados
            return res.render("search-results.html", { places: rows, total: total})
        })
})



// ligar o servidor
server.listen(3000)

