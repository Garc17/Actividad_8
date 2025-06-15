const db = require('../config/db');

exports.getPosts = (req, res) => {
    const sql = `SELECT * FROM posts`;

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

    const sql = 'INSERT INTO posts (titulo, descripcion, categoria, id_autor) VALUES (?, ?, ?, ?)';
    db.query(sql, [titulo, descripcion, categoria, autor_id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({
        id: result.insertId,
        titulo,
        descripcion,
        categoria,
        id_autor
        });
    });
};

exports.getPostsByAutor = (req, res) => {
    const autorId = req.params.id;

    const sql = `
        SELECT posts.*
        FROM posts
        WHERE id_autor = ?
    `;
    db.query(sql, [autorId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
