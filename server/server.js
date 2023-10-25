const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

const { Pool } = require("pg");

const cors = require("cors"); // Import the cors middleware


// Use the cors middleware
app.use(cors());

const pool = new Pool({
    user: "postgres", // Replace with your PostgreSQL username
    host: "localhost", // Replace with your PostgreSQL host
    database: "data.sql", // Replace with your PostgreSQL database name
    password: "2054", // Replace with your PostgreSQL password
    port: 5433,
});

app.get("/api/data", (req, res) => {
    const query = "SELECT * FROM news";

    pool.query(query, (error, results) => {
      if (error) {
        res.status(500).json({ error: "Error connecting to the database" });
        return;
      }
      
      res.json(results.rows);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
