const db = require('../config/db');

exports.getPosts = (req, res) => {
    const sql = `
        SELECT posts.*, autores.nombre, autores.email, autores.imagen
        FROM posts
    `;
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.createPost = (req, res) => {
    const { titulo, descripcion, categoria, autor_id } = req.body;

    if (!titulo || !descripcion || !autor_id) {
        return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const sql = 'INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?, ?, ?, ?)';
    db.query(sql, [titulo, descripcion, categoria, autor_id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({
        id: result.insertId,
        titulo,
        descripcion,
        categoria,
        autor_id
        });
    });
};

exports.getPostsByAutor = (req, res) => {
    const autorId = req.params.id;

    const sql = `
        SELECT posts.*, autores.nombre AS autor_nombre, autores.email AS autor_email, autores.imagen AS autor_imagen
        FROM posts
        JOIN autores ON posts.autor_id = autores.id
        WHERE autor_id = ?
    `;
    db.query(sql, [autorId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
