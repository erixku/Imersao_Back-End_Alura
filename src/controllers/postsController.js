import getTodosOsPosts from "../models/postsModel.js";

export async function listarPosts (req, res) {
    // Chama a função para buscar os posts
    const posts = await getTodosOsPosts();
    // Envia os posts como resposta em formato JSON com status 200 (sucesso)
    res.status(200).json(posts);
  } 
