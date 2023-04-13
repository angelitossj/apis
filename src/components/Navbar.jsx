import React,{useState} from "react";
import dragonball from "../../public/goku.png";
import yugi from "../../public/yugi.jpg"
import poke from "../../public/picachu.jpeg"
import juancho from "../../public/juancho.jpeg"
import { Link } from "react-router-dom";

const NavBar2 = () => {
  const [imagenes, setImagenes] = useState(juancho)

const cambiarImagen= (imagen)=>{

  setImagenes(imagen)

}


  return (
    <div>
      <div>
        <main>
          <header className="styleNav p-3 bg-while text-white">
            <div className="container-liss">
              <div className=" d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start mx-auto ">
                <Link
                  to="/home"
                  className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                >
                {
                    imagenes !== "" && 
                    <img
                    src={imagenes}
                    alt="..."
                    className="logoNav"
                    width="270"
                    height="230"
                    role="img"
                    aria-label="imagen"
                  />
                }
                </Link>

                <ul className="ulnav nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 rancio">
                  <li >
                    <Link to="/" onClick={()=>{cambiarImagen(juancho)}} className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/Yugioh" onClick={()=>{cambiarImagen(yugi)}} className=" nav-link">
                      Yugioh
                    </Link>
                  </li>
                  <li>
                    <Link to="/pokemoncitos" onClick={()=>{cambiarImagen(poke)}} className=" nav-link ">
                     Pokemones
                    </Link>
                  </li>
                  <li>
                    <Link to="/dragonball" onClick={()=>{cambiarImagen(dragonball)}} className=" nav-link ">
                      Dragonball
                    </Link>
                  </li>
                </ul>

            
              </div>
            </div>
          </header>
          <div className="c-example-divider"></div>
        </main>
      </div>
    </div>
  );
};

export default NavBar2;
