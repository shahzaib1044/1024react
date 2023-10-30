const pgp = require("pg-promise")();

// Replace the following with your own PostgreSQL connection string
const connectionString = "postgres://postgres:shahzaib2054@localhost:5001/data.sql";

const db = pgp(connectionString);

module.exports = { db };
