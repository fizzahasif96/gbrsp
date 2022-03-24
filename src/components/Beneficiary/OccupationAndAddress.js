import React, { useEffect, useState } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap'
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-date-picker/dist/DatePicker.css'
import Select from 'react-select';
import { MdDelete } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'
import { VscAdd } from 'react-icons/vsc'
import Address from "./Address";

const OccupationAndAddress = ({ formData, setFormData }) => {
  const [occupationData, setOccupationData] = useState({});
  const typeCatalog = [
    { value: 'Job', label: 'Job' },
    { value: 'Business', label: 'Business' }
  ];
  const [rowIndex, setRowIndex] = useState(0);
  const GetOccupation = () => {
    // debugger;
    // setFormData({ ...formData, occupations: occupationData })
    // debugger;
    formData.occupations.push(occupationData);
    setRowIndex(rowIndex + 1);
  }
  

  // useEffect(() => {
  //   console.log("here");
  // }, [rowIndex])

  const occupationRows = formData.occupations.map((occupation) =>
    <tr>
      <td>{occupation.name}</td>
      <td>{occupation.occupationType.label}</td>
      <td>{occupation.nameOfOrg}</td>
      <td>{occupation.designation}</td>
      <td>{occupation.nature}</td>
      <td>{occupation.salary}</td>
      <td><MdDelete
      //onClick={() => deleteItem(rowIndex)}
      /></td>
    </tr>
  );
  return (
    <div className="sign-up-container">
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Occupation</Form.Label>
                <div className="card attachments-table-div">
                  <div className="table-responsive" id="attachment-table">
                    <table className="table text-nowrap attachments-table">
                      <thead>
                        <tr>
                          <th>Occupation</th>
                          <th>Job/Business</th>
                          <th>Name of Organization/Business</th>
                          <th>Designation</th>
                          <th>Nature of Job/Business</th>
                          <th>Monthly Salary/Earnings</th>
                          <th>Actions</th>
                        </tr>
                        <tr>
                          <th>
                            <Form.Control
                              type="text"
                              placeholder="Add occupation"
                              onChange={(event) =>
                                setOccupationData({ ...occupationData, name: event.target.value })
                              }>
                            </Form.Control>
                          </th>
                          <th>
                            <Select
                              name="OccupationType"
                              placeholder="Type"
                              onChange={(e) =>
                                setOccupationData({ ...occupationData, occupationType: e })
                              }
                              options={typeCatalog}
                            />
                          </th>
                          <th>
                            <Form.Control
                              type="text"
                              placeholder="Add Name of Organization"
                              onChange={(event) =>
                                setOccupationData({ ...occupationData, nameOfOrg: event.target.value })
                              }>
                            </Form.Control>
                          </th>
                          <th>
                            <Form.Control
                              type="text"
                              placeholder="Add Designation"
                              onChange={(event) =>
                                setOccupationData({ ...occupationData, designation: event.target.value })
                              }>
                            </Form.Control>
                          </th>
                          <th>
                            <Form.Control
                              type="text"
                              placeholder="Add Nature of job"
                              onChange={(event) =>
                                setOccupationData({ ...occupationData, nature: event.target.value })
                              }>
                            </Form.Control>
                          </th>
                          <th>
                            <Form.Control
                              type="text"
                              placeholder="Add Monthly Salary"
                              onChange={(event) =>
                                setOccupationData({ ...occupationData, salary: event.target.value })
                              }>
                            </Form.Control>
                          </th>
                          <th>
                            <button type="button" className="add-occupation btn-circle btn-sm" onClick={GetOccupation}><VscAdd /></button>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="dependent-tbody">
                        { occupationRows }
                      </tbody>
                    </table>
                  </div>
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Address title="Permanent Address" addressType={formData.permanentAddress} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Address title="Residential Address" addressType={formData.residentialAddress} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Address title="Official Address" addressType={formData.officialAddress} />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default OccupationAndAddress