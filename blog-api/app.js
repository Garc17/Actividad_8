const express = require('express');
const app = express();

const db = require('./db');
app.use(express.json());

const autoresRoutes = require('./routes/autores');

app.use('/api/autores', autoresRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
