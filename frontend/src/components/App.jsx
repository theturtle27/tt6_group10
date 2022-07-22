import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import ExchangePage from "../components/ExchangePage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/' exact element = {<Home />}/>
          <Route path = '/exchange' exact element = {<ExchangePage />}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
