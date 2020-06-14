const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db") //posso ou nao colocar o .js aqui nessa linha


// Configurar pasta publica
server.use(express.static("public"))

//Habilitar o uso do req.body na nossa aplicacao
server.use(express.urlencoded({ extended: true}))


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

    //req.query: Query strings da nossa url
    // console.log(req.query)


    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) =>{

    //req.body: O corpo do nosso formulario
    // console.log(req.body)

    //inserir dados no banco de dados
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
       req.body.image,
       req.body.name,
       req.body.address,
       req.body.address2,
       req.body.state,
       req.body.city,
       req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Castrado com sucesso")
        console.log(this)

        return res.render("create-point.html", { saved: true})
    }


    db.run(query, values, afterInsertData)


    
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

