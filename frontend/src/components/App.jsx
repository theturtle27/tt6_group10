import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";

import ExchangePage from "../components/ExchangePage";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { check } from "../login";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={check() ? <ExchangePage /> : <Home />}
          />
          <Route path="/exchange" exact element={<ExchangePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
