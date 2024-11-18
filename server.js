import express from "express";

const app = express();
//A porta 3000 é uma porta comum no uso de servidores locais
app.listen(3000, () => {
    console.log("Serivdor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à Imersão!");
});