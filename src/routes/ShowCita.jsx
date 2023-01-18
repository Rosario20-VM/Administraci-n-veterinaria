import React from 'react'
import axios from'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Table, Container, Col, Row, Button }  from 'react-bootstrap'
import './ShowCita.css'
import facebook from '../img/facebook.png'
import whatsapp from '../img/whatsapp.png'
import instagram from '../img/instagram.png'
import logo from '../img/logo.png'

const URL = 'http://localhost:9000/citas/'

const ShowCita = () => {
    const[citas, setCitas] = useState([])
    useEffect(() =>{
        getCitas()
    },[])

    //procedimiento para mostrar las citas
    const getCitas = async () =>{
        const res = await axios.get(URL)
        setCitas(res.data)
    }

    //procedimiento para eliminar una cita
    const deleteCita = async (id) =>{
        await axios.delete(`${URL}${id}`)
        getCitas()
    }
  return (
    <>
    <section id='titulo-citas'>
        <br/>
        <h2><b>Citas agendadas</b></h2>
      </section> 
   
    <Container>           
        <Row>
            <Col xs={6} md={12}>                         
                <Button to="/create" as={Link} className='btn btn-secondary mt-3 mb-3' id='btnCita' size="lg"><i className="fa-solid fa-user-plus"></i>   Crear Cita</Button>                                                                   
                <Table striped>
                    <thead>
                        <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Mascota</th>
                        <th>Raza</th>
                        <th>Edad</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                        <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {citas.map((cita)=>(
                             <tr key={cita.id}>
                                 <td>{cita.nombre}</td>
                                 <td>{cita.apellido}</td>
                                 <td>{cita.mascota}</td>
                                 <td>{cita.raza}</td>
                                 <td>{cita.edad}</td>
                                 <td>{cita.fecha}</td>
                                 <td>{cita.hora}</td>
                                 <td>{cita.telefono}</td>
                                 <td>{cita.correo}</td>
                                 <td>
                                     <Link to={`/edit/${cita.id}`} className='btn btn-warning' id='editar'><i className="fa-solid fa-user-pen"></i>   Editar</Link>
                                     <button onClick={()=> deleteCita(cita.id)} className='btn btn-danger'><i className="fa-solid fa-user-xmark"></i>    Eliminar</button>
                                 </td>                        
                             </tr>
                        ))}
                       
                    </tbody>
                </Table>


            </Col>
        </Row>

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

export default ShowCita