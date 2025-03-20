import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// https://react-bootstrap.netlify.app/docs/components/navbar/ 
export default function NavTabs() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#home">Ivelis Becker</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
  
        <br />
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }


//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <Link
//           to="/"
//           // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//           className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Home"
//           // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === '/Home' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/About"
//           // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
//         >
//           About
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Contact"
//           // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </Link>
//       </li>
//     </ul>
//   );
// }

