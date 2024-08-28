import express from "express";

const app = express();

// convertendo o body da requisição para JSON
app.use(express.json());

// array de livros
const livros = [
    {
        id: 1,
        título: "O Senhor dos Anéis"
    },
    {
        id: 2,
        título: "O Hobbit"
    }
];

// rotas
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
})

//funcao busca livros
function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
})

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);    
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].título = req.body.título;
    res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso")
})

export default app;