import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Estilos.css";

const Pokes = () => {
  const [pokemones, setPokemones] = useState({});
  const [busqueda, setBusqueda] = useState("");

  const obtenerPokemon = async (id) => {
    const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const respuesta = await peticion.json();

    const info = {
      nombre: respuesta.name,
      imagen: respuesta.sprites.front_default,
    };

    setPokemones((prevState) => ({ ...prevState, [id]: info }));
  };

  const obtenerListaPokemon = async (numero) => {
    const solicitudes = [];

    for (let i = 1; i <= numero; i++) {
      solicitudes.push(obtenerPokemon(i));
    }

    await Promise.all(solicitudes);
  };

  const eliminarPokemon = (id) => {
    const { [id]: omitido, ...resto } = pokemones;
    setPokemones(resto);
  };

  const filtrarPokemon = (pokemon) => {
    return pokemon.nombre.toLowerCase().includes(busqueda.toLowerCase());
  };

  const listaFiltrada = Object.values(pokemones).filter(filtrarPokemon);

  return (
    <>
      <div className="">
        <Button
          onClick={() => {
            obtenerListaPokemon(200);
          }}
        >
          Pokemoncitos
        </Button>
        <input
          type="text"
          placeholder="Buscar Pokemon"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <Row>
          {listaFiltrada.map(({ nombre, imagen }, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "10px",
                }}
              >
                <Card.Img variant="top" src={imagen} />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title>{nombre}</Card.Title>
                  <Button
                    variant="primary"
                    onClick={() => {
                      eliminarPokemon(nombre);
                    }}
                  >
                    Eliminar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Pokes;
