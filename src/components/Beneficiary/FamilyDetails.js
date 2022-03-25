import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap'
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-date-picker/dist/DatePicker.css'
import Select from 'react-select';
import { MdDelete } from 'react-icons/md'

const FamilyDetails = ({ formData, setFormData }) => {
    const relationshipsCatalog = [
        { value: 'Father', label: 'Father' },
        { value: 'Mother', label: 'Mother' },
        { value: 'Sister', label: 'Sister' },
        { value: 'Brother', label: 'Brother' },
        { value: 'Son', label: 'Son' },
        { value: 'Daughter', label: 'Daughter' },
        { value: 'Wife', label: 'Wife' },
        { value: 'Husband', label: 'Husband' },
    ];
    const genderCatalog = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Other', label: 'Other' },
    ];
    const targetGroupCatalog = [
        { value: 'Undeveloped Areas in sindh', label: 'Undeveloped Areas in sindh' },
        { value: 'Uneducated people', label: 'Uneducated people' },
        { value: 'Patients', label: 'Patients' },
    ];
    const [IsShowModal, setIsShowModal] = useState(false);
    const ShowModal = () => {
        setIsShowModal(true);
    }
    const hideModal = () => {
        setIsShowModal(false);
    }

    const [dependentData, setDependentData] = useState({});
    const [dependents, setDependents] = useState([]);
    const getModalData = () => {
        hideModal();
        const newDependent = {
            id: new Date().getTime().toString(),
            name: dependentData.name,
            gender: dependentData.gender.label,
            age: dependentData.age,
            relationshipWithBeneficiary: dependentData.relationshipWithBeneficiary.label,
            cnic: dependentData.cnic,
            education: dependentData.education,
            targetGroup: dependentData.targetGroup.label,
            remarks: dependentData.remarks
        };
        const newDependents = [...dependents, newDependent];
        setDependents(newDependents);
    }

    useEffect(() => {
        setFormData({ ...formData, dependents: dependents })
      }, [dependents])
      if(dependents.length > 0){
        console.log(formData);
      }

    const handleDelete = (dependentId) => {
        const newDependents = [...dependents];
        const index = dependents.findIndex(x => x.id === dependentId);
        newDependents.splice(index, 1);
        setDependents(newDependents);
    }

    return (
        <div className="sign-up-container">
            <Container>
                <Form>
                    <Row className="row">
                        <Col>
                            <Form.Group>
                                <Form.Label className="form-label">Father Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Add Father Name"
                                    value={formData.fatherName}
                                    onChange={(event) =>
                                        setFormData({ ...formData, fatherName: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Father CNIC</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Add Father CNIC"
                                    value={formData.fatherCnic}
                                    onChange={(event) =>
                                        setFormData({ ...formData, fatherCnic: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col>
                            <Form.Group>
                                <Form.Label className="form-label">Mother Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Add Mother Name"
                                    value={formData.motherName}
                                    onChange={(event) =>
                                        setFormData({ ...formData, motherName: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Mother CNIC</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Add Mother CNIC"
                                    value={formData.motherCnic}
                                    onChange={(event) =>
                                        setFormData({ ...formData, motherCnic: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col>
                            <Form.Group>
                                <Form.Label className="form-label">Spouse Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Add Spouse Name"
                                    value={formData.spouseName}
                                    onChange={(event) =>
                                        setFormData({ ...formData, spouseName: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Spouse CNIC</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Add Spouse CNIC"
                                    value={formData.spouseCnic}
                                    onChange={(event) =>
                                        setFormData({ ...formData, spouseCnic: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col>
                            <Form.Group>
                                <Form.Label className="form-label">Next to Kin</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Add Next to Kin"
                                    value={formData.nextToKin}
                                    onChange={(event) =>
                                        setFormData({ ...formData, nextToKin: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Relationship With Beneficiary</Form.Label>
                                <Select
                                    name="relationshipWithBeneficiary"
                                    placeholder="Select relationship With Beneficiary"
                                    //onChange={setDOBAge}
                                    options={relationshipsCatalog}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col>
                            <Form.Group>
                                <Form.Label className="form-label">Next to Kin CNIC</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Add Next to Kin CNIC"
                                    value={formData.nextToKinCnic}
                                    onChange={(event) =>
                                        setFormData({ ...formData, nextToKinCnic: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Dependents</Form.Label>
                                <div className="card attachments-table-div">
                                    <div className="table-responsive" id="attachment-table">
                                        <table className="table text-nowrap attachments-table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Gender</th>
                                                    <th>Age</th>
                                                    <th>Relationship With Beneficiary</th>
                                                    <th>Cnic</th>
                                                    <th>Education</th>
                                                    <th>Target Group</th>
                                                    <th>Remarks</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="dependent-tbody">
                                                {dependents.map(function (dependent, index) {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{dependent.name}</td>
                                                            <td>{dependent.gender}</td>
                                                            <td>{dependent.age}</td>
                                                            <td>{dependent.relationshipWithBeneficiary}</td>
                                                            <td>{dependent.cnic}</td>
                                                            <td>{dependent.education}</td>
                                                            <td>{dependent.targetGroup}</td>
                                                            <td>{dependent.remarks}</td>
                                                            <td><MdDelete
                                                                onClick={() => handleDelete(dependent.id)}
                                                            /></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colSpan="9">
                                                        <div className="row">
                                                            <div className="col text-center">
                                                                <button type="button" id="add-dependent" className="btn btn-link" onClick={ShowModal}>Add new Dependent</button>
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
            <Modal show={IsShowModal} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title className="modal-tital">Add Dependent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="form-label">Dependent</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Add Dependent Name"
                                            //  value={formData.dependent.name}
                                            //onChange= {setDependant}
                                            onChange={(event) =>
                                                setDependentData({ ...dependentData, name: event.target.value })
                                            }
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Gender</Form.Label>
                                        <Select
                                            name="gender"
                                            placeholder="Select Gender"
                                            onChange={(e) =>
                                                setDependentData({ ...dependentData, gender: e })
                                            }
                                            options={genderCatalog}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="form-label">Age</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Add Age"
                                            // value={formData.dependent.age}
                                            onChange={(event) =>
                                                setDependentData({ ...dependentData, age: event.target.value })
                                            }></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Relationship</Form.Label>
                                        <Select
                                            name="relationshipWithBeneficiary"
                                            placeholder="Select relationship"
                                            //onChange={setDOBAge}
                                            onChange={(e) =>
                                                setDependentData({ ...dependentData, relationshipWithBeneficiary: e })
                                            }
                                            options={relationshipsCatalog}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="form-label">Cnic</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Add Cnic"
                                            //value={formData.dependent.cnic}
                                            onChange={(event) =>
                                                setDependentData({ ...dependentData, cnic: event.target.value })
                                            }></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="form-label">Education</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Add Education"
                                            // value={formData.dependent.education}
                                            onChange={(event) =>
                                                setDependentData({ ...dependentData, education: event.target.value })
                                            }></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Target Group</Form.Label>
                                        <Select
                                            name="targetGroup"
                                            placeholder="Select Target Group"
                                            onChange={(e) =>
                                                setDependentData({ ...dependentData, targetGroup: e })
                                            }
                                            options={targetGroupCatalog}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="form-label">Remarks</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Add Remarks"
                                            // value={formData.dependent.remarks}
                                            onChange={(event) =>
                                                setDependentData({ ...dependentData, remarks: event.target.value })
                                            }></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <button className="btn btn-dark" onClick={hideModal}>Cancel</button>
                    <button className="btn next-btn" onClick={getModalData}>Add Dependent</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default FamilyDetails