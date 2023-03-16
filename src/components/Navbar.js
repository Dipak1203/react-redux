import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container,Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const NavbarComponent = () => {
    const item = useSelector((state) => state.cart)
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DIPAK Shopping Cart</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="" >
                <NavLink to="/" className="text-light text-decoration-none">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
                <NavLink to="/cart" className="text-light text-decoration-none">Cart <span style={{padding:'8px 15px',border:"none",background:'yellow',borderRadius:'50%',color:'black'}}> {item.length}</span></NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
