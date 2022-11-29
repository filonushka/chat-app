import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import "./MessageForm.css";

export const MessageForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  const user = useSelector((state) => state.user);

  return (
    <div>
      <div className="messages-output">
        {!user && <div className="alert alert-danger">Please login</div>}
      </div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Your message"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={1}>
            <Button
              variant="primary"
              type="submit"
              className="bg-dark border border-dark"
              style={{ width: "100%" }}
              disabled={!user}
            >
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
