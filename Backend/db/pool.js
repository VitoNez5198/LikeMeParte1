const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "likeme",
  password: "technomax0374",
  port: 5432,
});

module.exports = pool;
