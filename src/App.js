import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" >
              <Nav.Link href="#home" style = {{marginRight: "40px"}}>About Me</Nav.Link>
              <Nav.Link href="#link" style = {{marginRight: "40px"}}>Learning Blogs</Nav.Link>
              <Nav.Link href="#link" style = {{marginRight: "40px"}}>Resume</Nav.Link>
              <Nav.Link href="#link" style = {{marginRight: "40px"}}>Projects</Nav.Link>
            </Nav>       
          </Navbar.Collapse>
        </Container>
      </Navbar>

{/* <Nav className="justify-content-end" style = {{backgroundColor: "pink", height: "60px"}} activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav> */}


    </div>
  );
}

export default App;
