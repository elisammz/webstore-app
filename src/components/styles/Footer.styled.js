import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//Bootstrap components
import { Nav } from "react-bootstrap";
//Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const StyledFooter = styled.section`
  background-color: #2d323d;
  padding: 80px 20px;
  color: #98a2a8;
  display: block;
  font-size: 15px;

  h3,
  p {
    font-family: "Poppins";
  }

  li,
  .styledLink {
    text-decoration: none;
    color: #98a2a8;
    display: inline;
    list-style: none;
    line-height: 40px;
    margin-right: 15px;
    transition: 0.3s;
    font-size: 15px;
  }

  .styledLink:hover {
    color: white;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className="d-sm-flex flex-row ">
        <div className="col">
          <h3>Contact us</h3>
          <p>help@genex.com</p>
          <br />
          <p>
            190-0000 Meguro-ku 2-12-89
            <p>Tokyo, Japan</p>
          </p>
          <br />
          <p>+81 90 0000 0000</p>
        </div>
        <div className="col">
          <h3>Follow us</h3>
          <Link to="/" className="styledLink">
            <LinkedInIcon />
          </Link>
          <Link to="/" className="styledLink">
            <FacebookIcon />
          </Link>
          <Link to="/" className="styledLink">
            <InstagramIcon />
          </Link>
        </div>
      </div>
      <hr />

      <Nav className="pb-3">
        <Link to="/" className="styledLink">
          Home
        </Link>
        <Link to="/" className="styledLink">
          News
        </Link>
        <Link to="/" className="styledLink">
          Publications
        </Link>
        <Link to="/" className="styledLink">
          Our Services
        </Link>
        <Link to="/" className="styledLink">
          Contact us
        </Link>
      </Nav>

      <div>©2022 GeneX Inc. - All Right Reserved</div>
    </StyledFooter>
  );
}

export default Footer;
