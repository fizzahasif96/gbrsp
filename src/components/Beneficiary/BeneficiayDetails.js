import React, { useState } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import DatePicker from 'react-date-picker';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-date-picker/dist/DatePicker.css'
import Select from 'react-select';

const BeneficiayDetails = ({ formData, setFormData }) => {

    const genderCatalog = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Other', label: 'Other' },
    ];
    const ageDobCatalog = [
        { value: 'DOB', label: 'DOB' },
        { value: 'Age', label: 'Age' }
    ];

    const vulnerabilities = [
        { id: 1, name: "Blind" },
        { id: 2, name: "Deaf" },
        { id: 3, name: "Broken arm" },
        { id: 4, name: "Broken leg" }
    ];
    const targetGroups = [
        { id: 1, name: "Undeveloped Areas in sindh" },
        { id: 2, name: "Uneducated people" },
        { id: 3, name: "Patients" }
    ];
    const [vulnerabilityOptions] = useState(vulnerabilities);
    const [targetGroupOptions] = useState(targetGroups);
    const [displayAge, setDisplayAge] = useState(null);

    const setDOBAge = (e) => {
        if (e.value == "Age") {
            setDisplayAge(true);
        }
        else {
            setDisplayAge(false);
        }
    }

    return (
        <div className="sign-up-container">
            <Container>
                <Form>
                    <Row className="row">
                        <Col>
                            <Form.Group>
                                <Form.Label className="form-label">Beneficiary</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Add Beneficiary"
                                    value={formData.name}
                                    onChange={(event) =>
                                        setFormData({ ...formData, name: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Gender</Form.Label>
                                <Select
                                    name="gender"
                                    placeholder="Select Gender"
                                    onChange={(e) =>
                                        setFormData({ ...formData, gender: e })
                                    }
                                    options={genderCatalog}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col>
                            <Form.Group>
                                <Form.Label>Select Age/DOB</Form.Label>
                                <Select
                                    name="selectAgeDOB"
                                    placeholder="Select Age/DOB"
                                    onChange={setDOBAge}
                                    options={ageDobCatalog}
                                />
                            </Form.Group>
                        </Col>
                        <Col className={displayAge == null || displayAge ? 'hidden' : undefined}>
                            <Form.Group>
                                <Form.Label className="form-label">DOB</Form.Label>
                                <DatePicker
                                    className="date"
                                    // onChange={onEndDateChange} 
                                    value={formData.dob} />

                            </Form.Group>
                        </Col>
                        <Col className={displayAge == null || !displayAge ? 'hidden' : undefined}>
                            <Form.Group>
                                <Form.Label className="form-label">Age</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Years"
                                ></Form.Control>
                                <Form.Control
                                    type="text"
                                    placeholder="Months"
                                ></Form.Control>
                                <Form.Control
                                    type="text"
                                    placeholder="Days"
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col>
                            <Form.Group>
                                <Form.Label className="form-label">Place of Birth</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="placeOfBirth"
                                    placeholder="Add Place of birth"
                                    value={formData.placeOfBirth}
                                    onChange={(event) =>
                                        setFormData({ ...formData, placeOfBirth: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Education</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="education"
                                    placeholder="Add Education"
                                    value={formData.education}
                                    onChange={(event) =>
                                        setFormData({ ...formData, education: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col>
                            <Form.Group>
                                <Form.Label className="form-label">Contact No</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="contactNo"
                                    placeholder="Add Contact No"
                                    value={formData.contactNo}
                                    onChange={(event) =>
                                        setFormData({ ...formData, contactNo: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>CNIC</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cnic"
                                    placeholder="Add CNIC"
                                    value={formData.cnic}
                                    onChange={(event) =>
                                        setFormData({ ...formData, cnic: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col>
                            <Form.Group>
                                <Form.Label className="form-label">CNIC Expiry Date</Form.Label>
                                <DatePicker
                                    className="date"
                                    // onChange={onEndDateChange} 
                                    value={formData.dob} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Vulnerability(s)</Form.Label>
                                <Multiselect
                                    className="multi-select"
                                    options={vulnerabilityOptions}
                                    value={formData.vulnerabilities}
                                    displayValue="name"
                                    placeholder="Select Vulnerability(s)"
                                    onSelect={(event) =>
                                        setFormData({ ...formData, vulnerabilities: event })
                                    }
                                ></Multiselect>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col>
                            <Form.Group>
                                <Form.Label className="form-label">Upload Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="image"
                                    value={formData.image}
                                    onChange={(event) =>
                                        setFormData({ ...formData, image: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Average Family Earning</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="averageFamilyEarning"
                                    placeholder="Add Average Family Earning"
                                    value={formData.averageFamilyEarning}
                                    onChange={(event) =>
                                        setFormData({ ...formData, averageFamilyEarning: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col>
                            <Form.Group>
                                <Form.Label>No Of People Earning</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="noOfPeopleEarning"
                                    placeholder="Add No Of People Earning "
                                    value={formData.noOfPeopleEarning}
                                    onChange={(event) =>
                                        setFormData({ ...formData, noOfPeopleEarning: event.target.value })
                                    }></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label className="form-label">Target Group(s)</Form.Label>
                                <Multiselect
                                    className="multi-select"
                                    options={targetGroupOptions}
                                    value={formData.targetGroups}
                                    displayValue="name"
                                    placeholder="Select Target Group(s)"
                                    onSelect={(event) =>
                                        setFormData({ ...formData, targetGroups: event })
                                    }
                                ></Multiselect>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default BeneficiayDetails