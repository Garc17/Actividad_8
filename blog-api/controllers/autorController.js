const db = require('../db');

exports.getAutores = (req, res) => {
    db.query('SELECT * FROM autores', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.createAutor = (req, res) => {
    const { nombre, email, imagen } = req.body;

    if (!nombre || !email) {
        return res.status(400).json({ error: 'Nombre y email son obligatorios' });
    }

    db.query(
        'INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)',
        [nombre, email, imagen],
        (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({
            id: result.insertId,
            nombre,
            email,
            imagen,
        });
        }
    );
};
