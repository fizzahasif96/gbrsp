import React, { useState, useRef } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap'
import DatePicker from 'react-date-picker';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-date-picker/dist/DatePicker.css'
import { MdDelete } from 'react-icons/md'
import Attachments from "./Attachments";

const MeansOfVerifications = ({ formData, setFormData }) => {

  const onStartDateChange = (e) => {
    console.log("Date");
    setFormData({ ...formData, month: e })
  }
  return (
    <div className="sign-up-container">
      <Container>
        <Form>
          <Row className="row">
            <Col>
              <Form.Group>
                <Form.Label className="form-label">Month</Form.Label>
                <DatePicker className="date" onChange={onStartDateChange} value={formData.month} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label className="form-label">Amount</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add Amount"
                  value={formData.amount}
                  onChange={(event) =>
                    setFormData({ ...formData, amount: event.target.value })
                  }></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="col-width">
              <Form.Group>
                <Attachments title="Attendance Sheet / Meeting Mins / Training Reports" attachmentsType={formData.attendanceSheets} formData={formData} setFormData={setFormData} />
              </Form.Group>
            </Col>
            <Col className="col-width">
              <Form.Group>
                <Attachments title="TORs" attachmentsType={formData.tors} formData={formData} setFormData={setFormData} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="col-width">
              <Form.Group>
                <Attachments title="Pictures" attachmentsType={formData.pictures} formData={formData} setFormData={setFormData} />
              </Form.Group>
            </Col>
            <Col className="col-width">
              <Form.Group>
                <Attachments title="Action Plan" attachmentsType={formData.actionPlans} formData={formData} setFormData={setFormData} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="col-width">
              <Form.Group>
                <Attachments title="Other Attachments" attachmentsType={formData.otherAttachments} formData={formData} setFormData={setFormData} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Comments</Form.Label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea2"
                  rows="6"
                  placeholder="Add Comments"
                  value={formData.comments}
                  onChange={(event) =>
                    setFormData({ ...formData, comments: event.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default MeansOfVerifications