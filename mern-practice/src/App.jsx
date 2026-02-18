import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import BmiCalculator from "./BmiCalculator";
import Result from "./Result";
import './BmiCalculator.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BmiCalculator />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;