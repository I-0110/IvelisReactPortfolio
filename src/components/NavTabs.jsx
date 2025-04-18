import React from 'react';
import { Link } from 'react-router-dom';
// Bootstrap css
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavTabs() {
    return (
        <Navbar>
            <Nav>
              <Link to='/'>
                <h1>Ivelis Becker</h1>
              </Link>
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
        </Navbar>
    );
  }

