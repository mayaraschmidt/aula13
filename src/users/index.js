require("dotenv").config();
const express = require("express");
const cors = require("cors");
// CÓDIGO NOVO
const connectDatabase = require("database/database");
// CÓDIGO NOVO

const port = process.env.PORT || 3001;
const app = express()

// CÓDIGO NOVO
connectDatabase();
// CÓDIGO NOVO
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});