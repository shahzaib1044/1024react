import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar"; // Import the Navbar component
import NewsList from "./NewsList";
import Home from "./Home"; // Example: Create a Home component for your home page
import Details from "./Details";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:newsID" element={<Details />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState("");

//   useEffect(() => {
//     axios
//       .get("/api/data")
//       .then((response) => {
//         setData(response.data.message);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>React App</h1>
//       <p>Data from Express: {data}</p>
//     </div>
//   );
// }

// export default App;

// -----

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
