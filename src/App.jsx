
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokes from "./components/Pokes";
import Yugioh from "./components/Yugioh"
import { Routes,Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import DragonBall from "./components/DragonBall";
import Juegos from "./components/Juegos";
import Disney from "./components/Disney";
function App() {
 


  return (
    <>
      <NavBar/>


    <Routes>

    <Route path="/pokemoncitos" element={<Pokes/>}/>
    <Route path="/yugioh" element={<Yugioh/>}/>
    <Route path="/dragonball" element={<DragonBall/>}/>
    <Route path="/juegos" element={<Juegos/>}/>
    <Route path="/disney" element={<Disney/>}/>






    </Routes>

       
       
      
    </>
  );
}

export default App;
