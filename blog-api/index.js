require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const autoresRoutes = require('./src/routes/api/autores');
const postsRoutes = require('./src/routes/api/posts');

app.use('/api/autores', autoresRoutes);
app.use('/api/posts', postsRoutes);

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});
