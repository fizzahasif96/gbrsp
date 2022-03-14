import React from "react";
import { Form, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Attachments({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <Container>
        <Form>
          <Row className="row">
            <Col>
              <Form.Group>
                <Form.Label className="form-label">Status</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add Status"
                  value={formData.status}
                  onChange={(event) =>
                    setFormData({ ...formData, status: event.target.value })
                  }></Form.Control>
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Remarks</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Add Remarks"
                  value={formData.remarks}
                  onChange={(event) =>
                    setFormData({ ...formData, remarks: event.target.value })
                  }></Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Attachments;
