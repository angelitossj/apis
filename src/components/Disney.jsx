import React, { useState } from 'react'
import data from "../disney.json"
import { Card, Button, Row, Col } from "react-bootstrap";

const Disney = () => {
const [disney, setDisney] = useState([])

    const consultarApi=()=>{

        const personajes = data.data.map((personaje)=>(
            {   
                id:personaje.id,
                nombre:personaje.name,
                imagen:personaje.imageUrl

            }
            ))
            setDisney(personajes)
            console.log(disney)



    }



  return (
   <>
    <div>
        <button className='btn btn-warning' onClick={()=>{consultarApi()}}>Personajes De Disney</button>

    </div>

    <div className="">
        <Row>
          {disney.map((datos, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={datos.imagen} />
                <Card.Body>
                  <Card.Title>{datos.nombre}</Card.Title>
                 
                 
            
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
   
   
   </>
  )
}

export default Disney