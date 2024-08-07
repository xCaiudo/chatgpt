require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();

console.log('OpenAI API Key:', process.env.OPENAI_API_KEY); // Adicione este log para verificar a chave da API

// Middleware para CORS
app.use(cors());

// Middleware para JSON
app.use(express.json());

// Definição das rotas
app.use(routes);

module.exports = app;