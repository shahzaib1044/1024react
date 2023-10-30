


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NewsList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [showFirstData, setShowFirstData] = useState(true);

  useEffect(() => {
    // Make a GET request to your API endpoint
    fetch("http://localhost:5001/api/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Make a GET request to your API endpoint
    fetch("http://localhost:5001/api/data1")
      .then((response) => response.json())
      .then((datas) => {
        setDatas(datas);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleData = () => {
    setShowFirstData((prevShowFirstData) => !prevShowFirstData);
  };

  return (
    <div>
      <h1>News List</h1>
      <button onClick={toggleData}>Toggle Data</button>
      <ul>
        {showFirstData
          ? data.map((newsItem) => (
              <li key={newsItem.id}>
                <Link to={`/news/${newsItem.id}&english`} state={newsItem}>
                  {newsItem.title}
                </Link>
              </li>
            ))
          : datas.map((news) => (
              <li key={news.id}>
                <Link to={`/news/${news.id}&japanese`} state={news}>
                  {news.title}
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default NewsList;
