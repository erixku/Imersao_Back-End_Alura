import express from "express";
import routes from "./src/routes/postRoutes.js";

// Cria uma instância do aplicativo Express
const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicializa o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor escutando...");
});
