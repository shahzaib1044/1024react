const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const { Pool } = require("pg");
const cors = require("cors");


app.use(cors());

const pool = new Pool({
  user: "postgres", // Replace with your PostgreSQL username
  host: "localhost", // Replace with your PostgreSQL host
  database: "data.sql", // Replace with your PostgreSQL database name
  password: "shahzaib2054", // Replace with your PostgreSQL password
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

app.get("/api/data1", (req, res) => {
  const query = "SELECT * FROM news1";

  pool.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: "Error connecting to the database" });
      return;
    }

    res.json(results.rows);
  });
});
import('node-fetch').then((nodeFetch) => {
  const fetch = nodeFetch.default;

  // Your code that uses fetch should go here
  // For example, the code to fetch and insert data into your database.


app.get("/api/fetch-and-insert", async (req, res) => {
  // Replace 'YOUR_API_KEY' with your actual News API key
  const apiKey = 'c5358c4c970144a986521ab08d2b996e';
  const apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Assuming you have a 'news' table with appropriate columns (e.g., title, description, url) in your PostgreSQL database.
    // You can insert the data into your PostgreSQL database here.

    // Example code to insert data into your PostgreSQL database
    data.articles.forEach(async (article) => {
      const insertQuery = "INSERT INTO news (source, author, title, description, url, urlToImage, publishedAt, content) VALUES ($1, $2, $3,$4,$5,$6,$7,$8)";
      const values = [article.source, article.author, article.title, article.description, article.url, article.urlToImage, article.publishedAt, article.content];

      try {
        await pool.query(insertQuery, values);
      } catch (error) {
        console.error("Error inserting data into the database:", error);
      }
    });

    res.json({ message: "Data fetched and inserted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from the News API" });
  }
});
});
import('node-fetch').then((nodeFetch) => {
  const fetch = nodeFetch.default;

  // Your code that uses fetch should go here
  // For example, the code to fetch and insert data into your database.


app.get("/api/fetch-translate-insert", async (req, res) => {
  // Replace 'YOUR_API_KEY' with your actual News API key
  const apiKey = 'c5358c4c970144a986521ab08d2b996e';
  const apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;

  try {
        // Fetch news data from the News API
        const apiKey = 'c5358c4c970144a986521ab08d2b996e'; // Replace with your News API key
        const newsApiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;
        const newsResponse = await fetch(newsApiUrl);
        const newsData = await newsResponse.json();
    
        // Translate the news titles to Japanese using DeepL
        const authKey = 'cdeb0c29-6f76-9a2b-e9ae-78819394b404:fx'; // Replace with your DeepL API key
        const deepLUrl = 'https://api-free.deepl.com/v2/translate';
        const translatedData = [];
    
        for (const article of newsData.articles.slice(0, 2)) {
          const translationData = {
            text: [article.title,article.description,article.author],
              // ,article.content,article.author,article.url, article.urlToImage,],
            target_lang: 'JA',
          };
    
          const translationResponse = await fetch(deepLUrl, {
            method: 'POST',
            headers: {
              'Authorization': `DeepL-Auth-Key ${authKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(translationData),
          });
    
          if (translationResponse.ok) {
            const translationResult = await translationResponse.json();
            article.title_ja = translationResult.translations[0].text;
            article.description_ja = translationResult.translations[1].text;
           
            article.content_ja= translationResult.translations[2].text;
            article.author_ja= translationResult.translations[3].text;
            // article.url_ja= translationResult.translations[4].text;
            //  article.urlToImage_ja= translationResult.translations[5].text;
          } else {
            console.error('Error translating text:', translationResponse.status, translationResponse.statusText);
          }
    
          translatedData.push(article);
        }
    
        // Insert translated data into the news1 table
        for (const article of translatedData) {
          const insertQuery = "INSERT INTO news1 (source, author, title, description, url, urlToImage, publishedAt, content) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
          const values = [article.source, article.author_ja, article.title_ja, article.description_ja, article.url ,article.urlToImage, article.publishedAt, article.content_ja];
    
          await pool.query(insertQuery, values);
        }
    
        res.json({ message: "Data fetched, translated, and inserted successfully" });
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "An error occurred" });
      }
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
