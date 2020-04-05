import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [projects, setProjects] = useState([]);

useEffect(() => {
  axios
  .get('http://localhost:4002/projects/')
  .then(res => {
      setProjects(res.data);
      console.log('project', res.data)
    })
    .catch(err => {
      console.log("invalid", err);
    });
},[])

if (projects.length) {
  return (
    <div className="App">
    <header className="App-header">

          {projects.map(item => (
          <div>
          <p>{item.name}</p>
          <p>{item.description}</p>
          </div>
          ))}
          </header>
          </div>
    )
  } else {
    return (
    <div className="App">
      <header className="App-header">
        <div><h1>Loading...</h1></div>
      </header>
    </div>
    )
  }
}

export default App;
