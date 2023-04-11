import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const Yugioh = () => {
  const [datos, setDatos] = useState([]);

  const obtenerCartas = async () => {
    const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster");
    const data = await response.json();
    console.log(data.data)
    const cartas = data.data.map((carta) => ({
      id: carta.id,
      nombre: carta.name,
      imagen: carta.card_images[0].image_url,
      tipo :carta.type
    }));
    setDatos(cartas);
  };

 
  const eliminarCarta = (id) => {
    const nuevasCartas = datos.filter((carta) => carta.id !== id);
    setDatos(nuevasCartas);
  };

  return (
    <>
      <Button onClick={()=>{obtenerCartas()}}>Yugioh</Button>

      <div className="">
        <Row>
          {datos.map((carta, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={carta.imagen} />
                <Card.Body>
                  <Card.Title>{carta.nombre}</Card.Title>
                  <Card.Title>{carta.tipo}</Card.Title>
                  <Button variant="danger" onClick={() => eliminarCarta(carta.id)}>Eliminar</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Yugioh;
