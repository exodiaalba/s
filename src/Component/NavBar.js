import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap";

function NavBar() {
    return (
        <div>
              <Navbar bg="dark" variant="dark">
              <Container>
              <Navbar.Brand href="/home">Home</Navbar.Brand>
              <Nav className="me-auto">
              <Nav.Link href="/Movies">Movie</Nav.Link>
              <Nav.Link href="/Serie">Serie</Nav.Link>
             <Nav.Link href="/Anime">Anime</Nav.Link>
             </Nav>
             </Container>
             </Navbar>
        </div>
    )
}

export default NavBar
