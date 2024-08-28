import app from "./src/app.js";

const PORT = 3001;

const rotas = {
  "/": "curso de express api",
  "/livros": "Entrei na rota livros",
  "/autores": "Entrei na rota autores"
};

app.listen(PORT, () => {
    console.log("Servidor rodando");
});