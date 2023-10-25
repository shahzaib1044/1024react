import React, { useState, useEffect } from "react";
import axios from "axios";

function NewsEdit(props) {
  const [newsItem, setNewsItem] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    // Fetch the specific news item for editing
    const { id } = props.match.params; // Access the id from the URL
    axios
      .get(`/api/news/${id}/edit`)
      .then((response) => {
        setNewsItem(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [props.match.params]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewsItem({
      ...newsItem,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Submit the edited news item to the server
    const { id } = props.match.params; // Access the id from the URL
    axios
      .put(`/api/news/${id}`, newsItem)
      .then((response) => {
        // Handle success (e.g., navigate to another page)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Edit News</h1>
      <div>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={newsItem.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Content: </label>
        <textarea
          name="content"
          value={newsItem.content}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default NewsEdit;
