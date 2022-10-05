import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function ContactUs() {
  return (
    <div className="pt-5 pb-3">
      <h3>Contact Us</h3>
      <div>
        <Container>
          <Row className="justify-content-center text-start">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="4"></Form.Control>
              </Form.Group>
              <Button className="w-100">Submit</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ContactUs;
