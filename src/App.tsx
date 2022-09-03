import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [newsList,setNewsList] = useState([]);
  useEffect(()=> {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
    .then((response) => response.json())
    .then((data) => setNewsList(data))
  },[])// putting [] so that it doesn't render after the first time
  return (
    <div className="App">
      <div className='title'>
      <h1>Space News</h1>
      </div>
      <div className='newsContainer'>
        {newsList.map((val,key) => {
          return <div key={key} className="article" onClick={()=> {window.location.href = val["url"]}}>
            <h1>{val["title"]}</h1>
            <img src={val["imageUrl"]} alt="Image" />
            <p>{val["summary"]}</p>
            <h3>{val["publishedAt"]}</h3>

          </div>
        })}
      </div>
    </div>
  );
}

export default App;
