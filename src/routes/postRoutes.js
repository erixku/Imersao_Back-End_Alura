import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Middleware para permitir que o servidor entenda requisições JSON
    app.use(express.json());
    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
}

export default routes;