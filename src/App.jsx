
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokes from "./components/Pokes";
import Yugioh from "./components/Yugioh"
import { Routes,Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import DragonBall from "./components/DragonBall";
function App() {
 


  return (
    <>
      <NavBar/>


    <Routes>

    <Route path="/pokemoncitos" element={<Pokes/>}/>
    <Route path="/yugioh" element={<Yugioh/>}/>
    <Route path="/dragonball" element={<DragonBall/>}/>




    </Routes>

       
       
      
    </>
  );
}

export default App;
