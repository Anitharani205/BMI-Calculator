/* import React from 'react';
import College from './Frontend/College';
import butterfly from './assets/image.png';
import Car from './Frontend/Car';
import Student from './Student';
import Card from './Frontend/Card';
import Welcome from './Welcome';
import User from './Frontend/User';
import Increment from './Frontend/Increment';
import Toggle from'./Frontend/Toggle';
import FetchData from './Frontend/FetchData';
import EmployeeInfo from './EmployeeInfo';
import BookStore from './Frontend/BookStore';
import Bike from './Travel/Bike';
import Track from './Travel/Track';
import './App.css';

function App(){
  return(
    <div>
    <h1 className="student">Hello</h1>
    <h1 className="student">Welcome to our college</h1>
    <College/>
    <Car/>
    <Card/>
    <Welcome/>
    <img src={butterfly} height="300px" width="300px"/>
    <User/>
    <Increment/>
    <Toggle/>
    <FetchData/>
    <EmployeeInfo/>
    <BookStore/>
    </div>
  )
}
export default App;


import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './Travel/NavBar';
import Bike from './Travel/Bike';
import Track from './Travel/Track';
import Home from './Travel/Home';
function App()
{
  return(
    <Router>
      <NavBar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bike" element={<Bike/>}/>
        <Route path="/track" element={<Track/>}/>

        </Routes>
    </Router>
  )

}
export default App;
*/

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

/*
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './ProductCard/Navbar';
import Home from './ProductCard/Home';
import Products from './ProductCard/Products';
import ProductDisplay from './ProductCard/ProductDisplay';

function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/productdisplay" element={<ProductDisplay/>}></Route>
      </Routes>
    </Router>
  )
}
export default App;
*/