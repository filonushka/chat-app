import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import context from "react-bootstrap/esm/AccordionContext";

export const Navigation = () => {
  const user = useSelector((state) => state.user);

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <img src={logo} style={{ width: 100, height: 100 }} alt="logo" />
          <span className="fw-bold fs-4">Chit Chat</span>
        </Navbar.Brand>
        <Nav className="ms-auto">
          {user && (
            <>
              <LinkContainer to={"/"}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/chat"}>
                <Nav.Link title="{<p>USER</p>}">Chat</Nav.Link>
              </LinkContainer>
              <Nav.Item>{user.name}</Nav.Item>
            </>
          )}
          {!user && (
            <>
              <LinkContainer to={"/"}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/login"}>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
