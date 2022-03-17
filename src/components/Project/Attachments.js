import React, { useState } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Select from "react-dropdown-select";
import Select from 'react-select';
function Attachments({ formData, setFormData }) {
  const options = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Completed', label: 'Completed' },
    { value: 'Deffered', label: 'Deffered' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  function OpenFile() {
    
  }

  return (
    <div className="personal-info-container">
      <Container>
        <Form>
          <Row className="row">
            <Col>
              <Form.Group>
                <Form.Label className="form-label">Status</Form.Label>
                <Select
                  defaultValue={selectedOption}
                  placeholder="Select Project Status"
                  onChange={setSelectedOption}
                  options={options}
                />
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Remarks</Form.Label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  placeholder="Add Remarks"
                  value={formData.remarks}
                  onChange={(event) =>
                    setFormData({ ...formData, remarks: event.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Attachments</Form.Label>
                <div className="card attachments-table-div">
                    <div className="table-responsive" id="attachment-table">
                        <table className="table text-nowrap attachments-table">
                            <thead>
                                <tr>
                                    <th>File</th>
                                    <th>Type</th>
                                    <th>Upload Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="attachment-tbody">
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="4">
                                        <div className="row">
                                            <div className="col text-center">
                                                <button onClick={OpenFile} type="button" id="add-attachment" className="btn btn-link">Upload Document</button>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                  </div>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Attachments;
