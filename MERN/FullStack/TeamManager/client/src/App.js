import './App.css';
import {Route, Routes, Navigate, BrowserRouter, } from "react-router-dom";
import Roster from './views/Roster'
import AddPlayer from "./views/AddPlayer";
import NoPlayer from './views/NoPlayer';
import UpdatePlayer from './views/UpdatePlayer';
import ViewPlayer from './views/ViewPlayer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Roster/>}/>
          <Route path="/new" element= {<AddPlayer/>} />
          <Route path="/error" element= {<NoPlayer/>}/>
          <Route path="/:id" element= {<ViewPlayer/>}/>
          <Route path="/edit/:id" element= {<UpdatePlayer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
