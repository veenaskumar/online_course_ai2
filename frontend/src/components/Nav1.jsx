import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ALogo from '../assets/kec-logo2-transformed.png'

function Nav1() {
  return (
    <div>
          <Navbar>
    <Container>
    <img src={ALogo} alt="" id="lo"/>    
      <Nav className="ms-auto">
        <Nav.Link href="./home">Home</Nav.Link>
        <Nav.Link href="./video">All Courses</Nav.Link>
        <Nav.Link href="/">logout</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Nav1