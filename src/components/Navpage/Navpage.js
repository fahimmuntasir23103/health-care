import React from 'react';
import { Container, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import logo from './../../images/logo.jpg'
import {Link,} from "react-router-dom"
import useAuth from '../../hooks/useAuth';



const Navpage = () => {
  const {user, logOut} = useAuth()
  const {displayName, photoURL, email, } =user;
          return (
           
                    <div>
                      
                      
                          <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"> <img width="70px" src={logo} alt="" />Dental Treatment </Navbar.Brand>
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="ms-auto align-items-center">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
       
        <Nav.Link as={Link} to="/services">Services</Nav.Link>
        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
      
       {!displayName ? ( 
       <>
        <Nav.Link href="/login">Log-In</Nav.Link>
        <Nav.Link href="/signup">Singn-Up</Nav.Link>
      </>): (
         <NavDropdown title={ <img 
          style={{ width: '45px',
         borderRadius: '50%',
         }} src={photoURL} alt="" /> }>

          <div className="text-center">
          <h5>{displayName}</h5>
          <p className="m-0">{email}</p>
          <button 
          onClick={logOut} className="btn btn-primary">Sign Out</button>
          </div>
         </NavDropdown>
        
      )}

      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>


                    </div>
                    
                    
                 
                    
                    
          );
};

export default Navpage;