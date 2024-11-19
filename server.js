import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Paisagem deslumbrante",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Cachorro fofo",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Receita deliciosa",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Gráfico de dados",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 6,
        descricao: "Meme engraçado",
        imagem: "https://placecats.com/millie/300/150"
    }
]

const app = express();
app.use(express.json());
//A porta 3000 é uma porta comum no uso de servidores locais
app.listen(3000, () => {
    console.log("Serivdor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});