import conectarAoBanco from "../config/dbConfig.js";

// Conectar ao banco de dados MongoDB
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados
export default async function getTodosOsPosts() {
    // Obtém o banco de dados 'imersao-instabytes'
    const db = conexao.db("imersao-instabytes");
    // Obtém a coleção 'posts'
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
  }