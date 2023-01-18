import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Col, Row, Container, Form, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './EditCita.css'
import facebook from '../img/facebook.png'
import whatsapp from '../img/whatsapp.png'
import instagram from '../img/instagram.png'
import logo from '../img/logo.png'

const URL = 'http://localhost:9000/citas/'


const EditCita = () => {
    const[nombre, setNombre] = useState('')
    const[apellido, setApellido] = useState('')
    const[mascota, setMascota] = useState('')
    const[raza, setRaza] = useState('')
    const[edad, setEdad] = useState('')
    const[fecha, setFecha] = useState('')
    const[hora, setHora] = useState('')
    const[telefono, setTelefono] = useState('')
    const[correo, setCorreo] = useState('')
    const navigate = useNavigate()
    const {id}= useParams()
    

    //procedimiento para actualizar
    const actualizar = async (e) =>{
        e.preventDefault()
        await axios.put(URL+id,{
            nombre:nombre, apellido:apellido,
            mascota:mascota, raza:raza, edad:edad, fecha:fecha,
            hora:hora, telefono:telefono, correo:correo
        })
        navigate('/')        
    }
    useEffect(()=>{
        getDatosId()
    },)

    const getDatosId = async() =>{
        const res = await axios.get(URL+id)
        setNombre(res.data.nombre)
        setApellido(res.data.apellido)
        setMascota(res.data.mascota)
        setRaza(res.data.raza)
        setEdad(res.data.edad)
        setFecha(res.data.fecha)
        setHora(res.data.hora)
        setTelefono(res.data.telefono)
        setCorreo(res.data.correo)
    }
  return (
    <>
    <section id='titulo-citas'>
        <br/>
        <h2><b>Editar cita</b></h2>
      </section>
     <Container>
            <Form  onSubmit={actualizar}>
            <Row>
                <Col xs={12} md={4}>
                
                    <Form.Group className="mb-3" >              
                    <Form.Control type="text" placeholder="Nombre" size="lg" id='text-style' name="nombre" required
                    value={nombre} onChange={(e) => setNombre(e.target.value)}/>              
                    </Form.Group>

                </Col>
                <Col  xs={12} md={4}>
                
                <Form.Group className="mb-3" >             
                    <Form.Control type="text" placeholder="Apellido" size="lg" id='text-style' name="apellido" required
                    value={apellido} onChange={(e) => setApellido(e.target.value)}/>
                </Form.Group> 
            
            
                </Col>
                <Col  xs={12} md={4}>
                
                    <Form.Group className="mb-3" controlId="formBasicEmail">              
                    <Form.Control type="email" placeholder="name@example.com" size="lg" id='text-style' name="email" required
                    value={correo} onChange={(e) => setCorreo(e.target.value)}/>              
                    </Form.Group> 
                                
                </Col>
            </Row>      
                <Row>
                <Col xs={12} md={4}>
                
                    <Form.Group className="mb-3">             
                    <Form.Control type="text" placeholder="Telefono" size="lg" id='text-style' name="telefono" required
                    value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                    </Form.Group> 
                
                </Col>
                <Col xs={12} md={4}>
                
                    <Form.Group className="mb-3">             
                    <Form.Control type="text" placeholder="Raza" size="lg" id='text-style' name="raza" required
                    value={raza} onChange={(e) => setRaza(e.target.value)}/>
                    </Form.Group> 
            
                </Col>
                <Col xs={12} md={4}>
                
                    <Form.Group className="mb-3">             
                    <Form.Control type="text" placeholder="Mascota" size="lg" id='text-style' name="mascota" required
                    value={mascota} onChange={(e) => setMascota(e.target.value)}/>
                    </Form.Group> 
                
                </Col>
                </Row>        
                <Row>
                <Col xs={12} md={4}>
                <Form.Group className="mb-3">             
                    <Form.Control type="text" placeholder="Edad de la mascota" size="lg" id='text-style' name="edad" required
                    value={edad} onChange={(e) => setEdad(e.target.value)}/>
                    </Form.Group> 

                </Col>
                <Col xs={12} md={4}>
                <Form.Group className="mb-3">             
                    <Form.Control type="date" placeholder="Elige la fecha" size="lg" id='text-style' name="fecha" required
                    value={fecha} onChange={(e) => setFecha(e.target.value)}/>
                    </Form.Group> 
                    
                </Col>
                <Col xs={12} md={4}>
                <Form.Group className="mb-3">             
                    <Form.Control type="text" placeholder="Elige la hora" size="lg" id='text-style' name="hora" required
                    value={hora} onChange={(e) => setHora(e.target.value)}/>
                    </Form.Group> 
                    
                </Col>
                </Row>
                <Row>
                <Col xs={6} md={12}>
                    <Button type="submit" variant="secondary" size="lg" id='btn-agendar'>
                    Agendar cita
                    </Button>
                    <Button to="/" as={Link} variant="danger" size="lg" id='btn-cancelar'>
                    Cancelar
                    </Button>
                </Col>                          
                </Row>
            </Form>
        </Container>
        <footer>
          <Container >
          <Row >
           <Col xs={4} md={2}>
                <img src={logo} alt="" 
                width={200}
                height={200}/> 
            </Col> 
            <Col xs={5} md={6}  id='footer-container'>
              <p>Clinica Veterinaria y estetica de mascotas</p>
              <p>La casa de los peluditos</p>
              <p>Av. Vicente Guerrero, Jilotepec, Estado de Mexico</p>
              <p>Tel. 5540043659</p>
            </Col>
            <Col xs={1} md={1} id='redes'>
              <a href="https://es-la.facebook.com/">
                <img src={facebook} alt="" 
                width={40}
                height={40}/>                
              </a>
            </Col>
            <Col xs={1} md={1} id='redes'>
            <a href="https://web.whatsapp.com/">
                <img src={whatsapp} alt="" 
                width={40}
                height={40}/>                
              </a>
              
            </Col>
            <Col xs={1} md={1} id='redes'>
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="" 
                width={40}
                height={40}/>                
              </a>
            </Col>
           
          </Row> 
          </Container> 
        </footer> 
    </>

  )
}

export default EditCita