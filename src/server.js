const express = require("express")
const server = express()


// configurar caminhos da minha aplicacao
//pagina inicial
//req: Requisicao and res: Resposta
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/nlw/src/views/index.html")
})



// ligar o servidor
server.listen(3000)

