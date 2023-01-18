import React from 'react'
import { Nav, Navbar, Container} from 'react-bootstrap'
import {Link, Outlet } from 'react-router-dom'
import './Inicio.css'

const Inicio = () => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
      <Container>  
      <Navbar.Brand as={Link} to="/">
            <img
              src="./logo.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>       
        <Navbar.Brand as={Link} to="/"> 
        <img
              src="./titulo.png"
              width="150"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id='etiquetas'>
            <Nav.Link as={Link} to="/">Citas</Nav.Link>            
            <Nav.Link as={Link} to="/create"> Agendar Cita</Nav.Link>                       
          </Nav>
   
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
      <Outlet></Outlet>
    </section>
    
    </>
  )
}

export default Inicio