const express = require("express");
const router = express.Router();
const pool = require("../db/pool");

// Ruta GET para obtener los registros de la tabla "posts"
router.get("/", async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM posts");
        const posts = result.rows;
        client.release();
        res.json(posts);
    } catch (error) {
        console.error("Error al obtener los posts:", error);
        res.status(500).json({ error: "Error al obtener los posts" });
    }
});

// Ruta POST para almacenar un nuevo registro en la tabla "posts"
router.post("/", async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;
    const query = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)";
    const values = [titulo, img, descripcion, likes];

    try {
        const client = await pool.connect();
        await client.query(query, values);
        client.release();
        res.sendStatus(201);
    } catch (error) {
        console.error("Error al guardar el post:", error);
        res.status(500).json({ error: "Error al guardar el post" });
    }
});

module.exports = router;
