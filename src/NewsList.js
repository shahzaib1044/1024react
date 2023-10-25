
import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";


function NewsList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <h1>News List</h1>
      <ul>
        {data.map((newsItem) => (
          <li key={newsItem.id}>
            <Link 
            to={`/news/${newsItem.id}`}
            state= { newsItem }
            >{newsItem.title}</Link>
          </li>
        ))}
      </ul>
     
    </div>
  );
}

export default NewsList;
