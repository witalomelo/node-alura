import http from "http";

const PORT = 3000;

const rotas = {
  "/": "curso de express api",
  "/livros": "Entrei na rota livros",
  "/autores": "Entrei na rota autores"
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000");
});