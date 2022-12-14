import './App.css';
import React, {useState} from 'react';
import Search from './components/Search.js';
import Result from './components/Result.js';
import {Router} from '@reach/router';

function App() {

    const [searchInfo, setSearchInfo] = useState({
      category: "people",
      id: "",
    });


  return (
    <div className="container">
      <Search searchInfo={searchInfo} setSearchInfo={setSearchInfo} />

      <Router>
        <Result path="/:category/:id" searchInfo={searchInfo}/>
      </Router>
    </div>
  );
}

export default App;

