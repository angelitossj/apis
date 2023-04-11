import React from "react";
import img from "../../public/goku.png";
import { Link } from "react-router-dom";

const NavBar2 = () => {
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
                  <img
                    src={img}
                    alt=""
                    className="logoNav"
                    width="230"
                    height="130"
                    role="img"
                    aria-label="imagen"
                  />
                </Link>

                <ul className="ulnav nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 rancio">
                  <li >
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/Yugioh" className=" nav-link">
                      Yugioh
                    </Link>
                  </li>
                  <li>
                    <Link to="/pokemoncitos" className=" nav-link ">
                     Pokemones
                    </Link>
                  </li>
                  <li>
                    <Link to="/dragonball" className=" nav-link ">
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
