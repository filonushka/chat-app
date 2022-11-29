import React, { useState } from "react";
import { Container, Col, Form, Row } from "react-bootstrap";
import { useLoginUserMutation } from "../services/appApi";
import { MDBInput } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

import "./LoginPage.css";

export const Login = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [loginUser, { isLoading, error }] = useLoginUserMutation();

  function handleLogin(e) {
    e.preventDefault();
    loginUser({ name }).then(({ data }) => {
      if (data) {
        console.log(data);

        //socket work
        //navigate to the chat
        navigate("/chat");
      }
    });
  }

  return (
    <Container>
      <Row>
        <Col md={6} className="login__bg"></Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form style={{ width: "70%", maxWidth: 500 }} onSubmit={handleLogin}>
            <MDBInput
              onChange={(e) => setName(e.target.value)}
              id="form4Example1"
              wrapperClass="mb-4"
              placeholder="Name"
              required
            />
            {name ? (
              <LinkContainer to={"/chat"}>
                <Button type="submit" className="bg-dark border border-dark">
                  Enter
                </Button>
              </LinkContainer>
            ) : (
              <Button
                type="submit"
                className="bg-dark border border-dark button"
              >
                Enter
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
