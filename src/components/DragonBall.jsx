import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const DragonBall = () => {
  const [cartas, setCartas] = useState([]);

 

  const obtenerCartas = async () => {
    const response = await fetch("https://dragon-ballz-super-api.site/api");
    const data = await response.json();
    console.log(data)
    
    const cartas = data.characters.map((personaje) => ({
      nombre: personaje.name,
      imagen: personaje.img,
      tipo: personaje.race,
    
      rareza: "",
      poder: personaje.attack
    }));
    setCartas(cartas);
  };

  const eliminarCarta = (nombre) => {
    const cartasRestantes = cartas.filter((carta) => carta.nombre !== nombre);
    setCartas(cartasRestantes);
  };
 
  return (
    <>
    <Button onClick={()=>{obtenerCartas()}}> Dragon ball </Button>
      <div className="">
        <Row>
          {cartas.map((carta, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={carta.imagen} />
                <Card.Body>
                  <Card.Title>{carta.nombre}</Card.Title>
                  <Card.Subtitle>{carta.tipo}</Card.Subtitle>
                 
                  <Card.Text>Rareza: {carta.rareza}</Card.Text>
                  <Card.Text>Poder: {carta.poder}</Card.Text>
                  <Button variant="danger" onClick={() => eliminarCarta(carta.nombre)}>
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

export default DragonBall;
