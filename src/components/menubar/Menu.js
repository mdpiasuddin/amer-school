import React from "react";
import "./menubar.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import Banner from "../Bannar/Banner";

const Menu = () => {
  return (
    <div>
      <section>
        <Navbar bg="primary" expand="lg">
          <Container className="d-flex justify-content-between">
            <Navbar.Brand href="/home" className="text-white logo-text">
              Amer School
            </Navbar.Brand>
            <div className="menul">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto menu-text">
                  <Nav.Link href="/home" className="text-white">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/topic" className="text-white">
                    Topic
                  </Nav.Link>
                  <Nav.Link href="/static" className="text-white">
                    Static
                  </Nav.Link>
                  <Nav.Link href="/blog" className="text-white">
                    Blog
                  </Nav.Link>
                  <Nav.Link href="/aboutus" className="text-white">
                    ABout us
                  </Nav.Link>
                  <Nav.Link href="/faq" className="text-white">
                    FAQ
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
            {/* banner part start */}
          </Container>
        </Navbar>
      </section>
    </div>
  );
};

export default Menu;
