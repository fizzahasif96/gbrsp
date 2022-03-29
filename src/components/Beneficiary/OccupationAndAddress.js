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
  const [occupations, setOccupations] = useState([]);
  const typeCatalog = [
    { value: 'Job', label: 'Job' },
    { value: 'Business', label: 'Business' }
  ];
  const GetOccupation = () => {
    const newOccupation = {
      id: new Date().getTime().toString(),
      name: occupationData.name,
      occupationType: occupationData.occupationType.label,
      nameOfOrg: occupationData.nameOfOrg,
      designation: occupationData.designation,
      nature: occupationData.nature,
      salary: occupationData.salary,
    };
    const newOccupations = [...occupations, newOccupation];
    setOccupations(newOccupations);
  }

  const handleDelete = (occupationId) => {
    const newOccupations = [...occupations];
    const index = occupations.findIndex(x => x.id === occupationId);
    newOccupations.splice(index, 1);
    setOccupations(newOccupations);
  }

  useEffect(() => {
    setFormData({ ...formData, occupations: occupations })
  }, [occupations])
  if(occupations.length > 0){
    console.log(formData);
  }
 
  return (
    <div className="sign-up-container">
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Occupation</Form.Label>
                <div className="card attachments-table-div">
                  <div className="table-responsive table-responsive-scrollbar-x" id="attachment-table">
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
                        {occupations.map(function (occupation, index) {
                          return (
                            <tr key={index}>
                              <td>{occupation.name}</td>
                              <td>{occupation.occupationType.label}</td>
                              <td>{occupation.nameOfOrg}</td>
                              <td>{occupation.designation}</td>
                              <td>{occupation.nature}</td>
                              <td>{occupation.salary}</td>
                              <td><MdDelete
                              onClick={() => handleDelete(occupation.id)}
                              /></td>
                            </tr>
                          )
                        })}
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
                <Address title="Permanent Address" addressType={formData.permanentAddress} formData={formData} setFormData={setFormData} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Address title="Residential Address" addressType={formData.residentialAddress} formData={formData} setFormData={setFormData} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Address title="Official Address" addressType={formData.officialAddress} formData={formData} setFormData={setFormData} />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default OccupationAndAddress