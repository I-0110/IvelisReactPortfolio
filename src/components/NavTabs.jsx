import React from 'react';
import { Link } from 'react-router-dom';
// Bootstrap css
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


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

