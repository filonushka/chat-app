import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Sidebar } from "../components/Sidebar";
import { MessageForm } from "../components/MessageForm";

export const Chat = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Sidebar></Sidebar>
        </Col>
        <Col md={8}>
          <MessageForm></MessageForm>
        </Col>
      </Row>
    </Container>
  );
};
