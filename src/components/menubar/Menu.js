import React from "react";

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
                  <Nav.Link href="/srclink" className="text-white">
                    Topic
                  </Nav.Link>
                  <Nav.Link href="/link" className="text-white">
                    Static
                  </Nav.Link>
                  <Nav.Link href="/srclink" className="text-white">
                    Blog
                  </Nav.Link>
                  <Nav.Link href="/link" className="text-white">
                    ABout us
                  </Nav.Link>
                  <Nav.Link href="/link" className="text-white">
                    FAQ
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
            {/* banner part start */}
          </Container>
        </Navbar>
      </section>
      <Banner></Banner>
    </div>
  );
};

export default Menu;
