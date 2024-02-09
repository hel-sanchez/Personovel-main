import React, { useState } from "react";
import { Navbar, Nav, Container, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  const navLinkStyle = {
    color: "#BC1823",
    transition: "color 0.3s",
  };

  const customNavbarToggleStyle = {
    marginLeft: "32%",
    border: "2px solid #002960",
    backgroundColor: "transparent",
    borderRadius: "10px",
    borderColor: "#002960",
    boxShadow: 'none'
  };


  return (
    <Navbar expand="lg" style={{ backgroundColor: "#F9DCC4" }}>
      <Container fluid>
        <Link to="/" className="link-no-underline">
          <Navbar.Brand>
            <Link to="/landing">
              <Image
                src="/PERSONOVEL.png"
                className="logo img-fluid"
                style={{ width: "200px", height: "50px", marginLeft: "70px" }}
                alt="Brand Logo"
              />
            </Link>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" style={customNavbarToggleStyle} />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mb-2 mb-lg-0"
            style={{
              maxHeight: "100px",
              marginLeft: "50px",
              fontFamily: "Fira Mono",
              display: "flex",
              alignItems: "center",
            }}
            navbarScroll
          >
            <Link to="/" className="link-no-underline">
              <Nav.Link
                style={navLinkStyle}
                href="#action2"
                onMouseEnter={(e) => (e.target.style.color = "#002960")}
                onMouseLeave={(e) => (e.target.style.color = "#BC1823")}
              >
                HOME
              </Nav.Link>
            </Link>

            <span style={{ color: "#BC1823", margin: "0 10px" }}>|</span>

            <Link to="/browse" className="link-no-underline">
              <Nav.Link
                style={navLinkStyle}
                href="#action2"
                onMouseEnter={(e) => (e.target.style.color = "#002960")}
                onMouseLeave={(e) => (e.target.style.color = "#BC1823")}
              >
                BROWSE
              </Nav.Link>
            </Link>

            <span style={{ color: "#BC1823", margin: "0 10px" }}>|</span>

            <Link to="/popular" className="link-no-underline">
              <Nav.Link
                style={navLinkStyle}
                href="#action2"
                onMouseEnter={(e) => (e.target.style.color = "#002960")}
                onMouseLeave={(e) => (e.target.style.color = "#BC1823")}
              >
                POPULAR
              </Nav.Link>
            </Link>

            <span style={{ color: "#BC1823", margin: "0 10px" }}>|</span>

            <Link to="/latest" className="link-no-underline">
              <Nav.Link
                style={navLinkStyle}
                href="#action2"
                onMouseEnter={(e) => (e.target.style.color = "#002960")}
                onMouseLeave={(e) => (e.target.style.color = "#BC1823")}
              >
                LATEST
              </Nav.Link>
            </Link>

            <span style={{ color: "#BC1823", margin: "0 10px" }}>|</span>

            <Link to="/" className="link-no-underline">
              <Nav.Link
                style={navLinkStyle}
                href="#action2"
                onMouseEnter={(e) => (e.target.style.color = "#002960")}
                onMouseLeave={(e) => (e.target.style.color = "#BC1823")}
              >
                LOGOUT
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>

        <Form className="d-flex ms-auto">
          {isSearchExpanded ? (
            <Form.Control
              type="search"
              placeholder="Search titles, authors, language, genres..."
              className="me-2"
              aria-label="Search"
            />
          ) : null}
          <Button
            class="btn btn-lg btn-info"
            onClick={handleSearchToggle}
            style={{
              backgroundColor: "#002960",
              border: "none",
              borderRadius: "50px",
            }}
          >
            <i className="fa-solid fa-magnifying-glass" />
          </Button>

          <Link to="/Profile/:UserId" className="link-no-underline">
            <Nav.Link
              style={{ color: "#002960", marginLeft: "10px" }}
              href="#action2"
            >
              <Image
                src="/Icon.png"
                className="me-1"
                alt="User Icon"
                style={{ width: "45px", height: "45px" }}
              />
            </Nav.Link>
          </Link>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header;
