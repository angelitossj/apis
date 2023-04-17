import React, { useState } from 'react'
import data from "../juegos.json"
import { Card, Button, Row, Col } from "react-bootstrap";
const Juegos = () => {
const [jueguitos, setJueguitoos] = useState([])

    const consultarApi = async()=>{

        
        const jueguititos = data.map((juego)=>(
            {
                id:juego.id,
                titulo:juego.title,
                desarrollador:juego.developer,
                imagen:juego.thumbnail
            }
        ))
                setJueguitoos(jueguititos)
                console.log(jueguitos)


    }



  return (
    <>
    <div>
            <button className='btn btn-dark' onClick={()=>{consultarApi()}}>Jueguitos</button>

    </div>
    <div className="">
        <Row>
          {jueguitos.map((datos, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={datos.imagen} />
                <Card.Body>
                  <Card.Title>{datos.titulo}</Card.Title>
                  <Card.Subtitle>{datos.desarrollador}</Card.Subtitle>
                 
                 
            
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    
    </>

    
  )
}

export default Juegos