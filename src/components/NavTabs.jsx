import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to='/'>
              <Navbar.Brand><h1>Ivelis Becker</h1></Navbar.Brand>
            </Link>
            <Nav className="me-auto">
              <Link to='/'>
                Home
              </Link>
              <Link to='/About'>
                About
              </Link>
              <Link to='/Projects'>
                Projects
              </Link>
              <Link to='/Resume'>
                Resume
              </Link>
              <Link to='/Contact'>
                Contact
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }

