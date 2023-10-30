DROP TABLE IF EXISTS news;

CREATE TABLE news (
  id serial PRIMARY KEY,
  source jsonb,
  author text,
  title text,
  description text,
  url text,
  urlToImage text,
  publishedAt timestamp,
  content text
);

INSERT INTO news (source, author, title, description, url, urlToImage, publishedAt, content)
VALUES (
  '{"id": null, "name": "Biztoc.com"}',
  'tiktok.com',
  'Tradinginsight.io on TikTok',
  'Elon Musk says ''we dug our own grave'' with the Cybertruck as he warns Tesla faces enormous production challenges Elon Musk said that Tesla "dug its own grave" with the Cybertruck, as he warned that it would take years for the company to ramp up production of …',
  'https://biztoc.com/x/1e9f7ce661e7f39e',
  'https://c.biztoc.com/p/1e9f7ce661e7f39e/s.webp',
  '2023-10-24T16:29:06Z',
  'Elon Musk says ''we dug our own grave'' with the Cybertruck as he warns Tesla faces enormous production challenges Elon Musk said that Tesla "dug its own grave" with the Cybertruck, as he warned that i… [+233 chars]'
);
DROP TABLE IF EXISTS news1;

CREATE TABLE news1 (
  id serial PRIMARY KEY,
  source jsonb,
  author text,
  title text,
  description text,
  url text,
  urlToImage text,
  publishedAt timestamp,
  content text
);

INSERT INTO news1 (source, author, title, description, url, urlToImage, publishedAt, content)
VALUES (
  '{"id": null, "name": "Biztoc.com"}',
  'zigzag.com',
  'Tradinginsight.io on TikTok',
  'Elon Musk says ''we dug our own grave'' with the Cybertruck as he warns Tesla faces enormous production challenges Elon Musk said that Tesla "dug its own grave" with the Cybertruck, as he warned that it would take years for the company to ramp up production of …',
  'https://biztoc.com/x/1e9f7ce661e7f39e',
  'https://c.biztoc.com/p/1e9f7ce661e7f39e/s.webp',
  '2023-10-24T16:29:06Z',
  'Elon Musk says ''we dug our own grave'' with the Cybertruck as he warns Tesla faces enormous production challenges Elon Musk said that Tesla "dug its own grave" with the Cybertruck, as he warned that i… [+233 chars]'
);

