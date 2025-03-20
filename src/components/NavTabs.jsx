import React from 'react';
// Bootstrap css
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Tabs for the NavTabs
// import Home from './pages/Home';
// import About from "./pages/About";
// import Contact from "./pages/Contact"
// import Projects from "./pages/Projects"

// https://react-bootstrap.netlify.app/docs/components/navbar/ 
export default function NavTabs() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#Home"><h1>Ivelis Becker</h1></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Projects">Projects</Nav.Link>
              <Nav.Link href="#Resume">Resume</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }

