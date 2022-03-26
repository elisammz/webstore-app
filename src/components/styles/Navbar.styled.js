import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Animated } from "react-animated-css";
//Bootstrap components
import { Navbar, Nav, Container } from "react-bootstrap";

const StyledNavbar = styled.div`
  text-decoration: none;
  background-color: #060a0e;
  padding: 0 auto;
  margin: 0 auto;
  font-family: sans-serif;
  font-weight: 300;
  font-size: 17px;
  justify-content: center;

  .styledLink {
    color: #9a9aa1;
    text-decoration: none;
    display: inline;
    list-style: none;
    line-height: 40px;
    margin-right: 60px;
  }

  ul {
    padding-left: 0 !important;
  }

  .bolder {
    font-weight: bolder;
    font-size: 24px;
  }

  .styledLink:hover {
    color: #546fff;
  }

  @media (max-width: 820px) {
    .navbar {
      background-color: white !important;
    }
    .navbar-toggler {
      border-color: #e9799e;
    }
  }
`;

function NavBar() {
  return (
    <StyledNavbar>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Animated
            animationIn="fadeIn"
            animationInDelay={2000}
            isVisible={true}
          >
            <Link to="/" className="styledLink bolder">
              GENEX
            </Link>
          </Animated>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" me-auto justify-content-center flex-grow-1">
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
