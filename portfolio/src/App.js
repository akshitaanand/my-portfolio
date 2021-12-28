import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//bg="light" expand="lg" 
import Home from './components/home';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar  bg="light" expand="lg" style = {{backgroundColor: "#d4d4fc"}}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" >
                <Nav.Link href="/" style = {{marginRight: "40px"}}>About Me</Nav.Link>
                <Nav.Link href="#link" style = {{marginRight: "40px"}}>Learning Blogs</Nav.Link>
                <Nav.Link href="/resume" style = {{marginRight: "40px"}}>Resume</Nav.Link>
                <Nav.Link href="#link" style = {{marginRight: "40px"}}>Projects</Nav.Link>
              </Nav>       
            </Navbar.Collapse>
          </Container>
        </Navbar>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/resume' element={<Resume/>} />
          </Routes>
      </BrowserRouter>


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
