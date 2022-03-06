import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Bootstrap components
import { Navbar, Nav, Container } from "react-bootstrap";

const StyledNavbar = styled.ul`
  justify-content: center;
  text-decoration: none;
  background-color: #f8f9fa;
  padding: 10px 0;
  margin: 0 auto;

  .styledLink {
    color: #9a9aa1;
    text-decoration: none;
    display: inline;
    list-style: none;
    line-height: 40px;
    margin-left: 15px;
  }

  .styledLink:hover {
    color: #546fff;
  }
`;

function NavBar() {
  return (
    <StyledNavbar>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="styledLink">
            GeneX
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="styledLink">
                Home
              </Link>
              <Link to="/products" className="styledLink">
                Products
              </Link>
              <Link to="/cart" className="styledLink">
                Cart
              </Link>
              <Link to="/checkout" className="styledLink">
                Checkout
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledNavbar>
  );
}
export default NavBar;
