import React from "react";
import Home from "./components/home";
import Greeting from "./components/greeting";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home name="Base Dfinity + ReactJs: "/>}/>
        <Route path="/greeting" element={<Greeting/>}/>
      </Routes>
    </Router>
    );
}

export default App;