import React, { useState, useEffect } from 'react'
import './style.css'
import { Form, Container, Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import DatePicker from 'react-date-picker';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-date-picker/dist/DatePicker.css'
import Select from 'react-select';

const TargetCreate = () => {
  const initialValues = {
    name: "",
    project: {},
    activities: [],
    thematicAreas: [],
    outputIndicators: [],
    outcomeIndicators: [],
    sections: [],
    sdgs: [],
    startDate: "",
    endDate: "",
    subVillage: {}
  }
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  ////////Dropdowns' dummy data
  const activities = [
    { id: 1, name: "Activity 1" },
    { id: 2, name: "Activity 2" },
    { id: 3, name: "Activity 3" },
    { id: 4, name: "Activity 4" },
    { id: 5, name: "Activity 5" },
    { id: 6, name: "Activity 6" }
  ];
  const thematicAreas = [
    { id: 1, name: "TA 1" },
    { id: 2, name: "TA 2" },
    { id: 3, name: "AKH" },
    { id: 4, name: "IP" },
    { id: 5, name: "CCV" },
    { id: 6, name: "DK" }
  ];
  const outputIndicators = [
    { id: 1, name: "OPI 1" },
    { id: 2, name: "OPI 2" },
    { id: 3, name: "OPI 3" },
    { id: 4, name: "OPI 4" },
    { id: 5, name: "OPI 5" },
    { id: 6, name: "OPI 6" }
  ];
  const outcomeIndicators = [
    { id: 1, name: "OCI 1" },
    { id: 2, name: "OCI 2" },
    { id: 3, name: "OCI 3" },
    { id: 4, name: "OCI 4" },
    { id: 5, name: "OCI 5" },
    { id: 6, name: "OCI 6" }
  ];
  const sdgs = [
    { id: 1, name: "SDG 1" },
    { id: 2, name: "SDG 2" },
    { id: 3, name: "SDG 3" },
    { id: 4, name: "SDG 4" },
    { id: 5, name: "SDG 5" },
    { id: 6, name: "SDG 6" }
  ];
  const sections = [
    { id: 1, name: "Section 1" },
    { id: 2, name: "Section 2" },
    { id: 3, name: "Section 3" },
    { id: 4, name: "Section 4" },
    { id: 5, name: "Section 5" },
    { id: 6, name: "Section 6" }
  ];
  const [activityOptions] = useState(activities);
  const [taOptions] = useState(thematicAreas);
  const [opiOptions] = useState(outputIndicators);
  const [ociOptions] = useState(outcomeIndicators);
  const [sdgOptions] = useState(sdgs);
  const [sectionOptions] = useState(sections);
  const [value, onChange] = useState(new Date());
  const projects = [
    { value: 'Project 1', label: 'Project 1' },
    { value: 'Project 2', label: 'Project 2' },
    { value: 'Project 3', label: 'Project 3' },
  ];
  const subVillages = [
    { value: 'Punjab SV', label: 'Punjab SV' },
    { value: 'Sindh SV', label: 'Sindh SV' },
    { value: 'KPK SV', label: 'KPK SV' },
  ];

  //////////////// here comes the Validation part ///////////////


  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const onStartDateChange = (e) => {
    console.log("Date");
    setFormData({ ...formData, startDate: e })
  }
  const onEndDateChange = (e) => {
    console.log("Date");
    setFormData({ ...formData, endDate: e })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    setIsSubmit(true);
    console.log(formData);
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [errors]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name =  "Target is required!";
    }
    errors.activities = values.activities.length == 0 ? "Select at least one Activity!" : "";
    errors.thematicAreas = values.thematicAreas.length == 0 ? "Select at least one Thematic Area!" : "";
    errors.sections = values.sections.length == 0 ? "Select at least one Section!" : "";
    errors.sdgs = values.sdgs.length == 0 ? "Select at least one SDG!" : "";
    errors.projects = Object.keys(values.project).length == 0 ? "Project is required!" : "";
    errors.subVillages = Object.keys(values.subVillage).length == 0 ? "Sub Village is required!" : "";
    return errors;
  }

  return (
    <div className="card wizard-form">
      <div className="form-container">
        <div className="body">
            <Container>
              <Form onSubmit={handleSubmit}>
                <Row className="row">
                  <Col>
                    <Form.Group>
                      <Form.Label className="form-label">Target</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Add Target"
                        value={formData.name}
                        onChange={handleChange}
                      ></Form.Control>
                      <p>{errors.name}</p>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Project</Form.Label>
                      <Select
                        name="project"
                        placeholder="Select Project"
                        onChange={(e) =>
                          setFormData({ ...formData, project: e })
                        }
                        options={projects}
                      />
                      <p>{errors.projects}</p>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="row">
                  <Col>
                    <Form.Group>
                      <Form.Label className="form-label">Activity(s)</Form.Label>
                      <Multiselect
                        className="multi-select"
                        name="activities"
                        options={activityOptions}
                        value={formData.activities}
                        displayValue="name"
                        placeholder="Select Activity"
                      onSelect={(event) =>
                        setFormData({ ...formData, activities: event })
                      }
                      ></Multiselect>
                      <p>{errors.activities}</p>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Thematic Area(s)</Form.Label>
                      <Multiselect
                        options={taOptions}
                        className="multi-select"
                        value={formData.thematicAreas}
                        displayValue="name"
                        placeholder="Select Thematic Areas"
                        onSelect={(event) =>
                          setFormData({ ...formData, thematicAreas: event })
                        }
                      ></Multiselect>
                      <p>{errors.thematicAreas}</p>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="row">
                  <Col>
                    <Form.Group>
                      <Form.Label className="form-label">Output Indicator(s)</Form.Label>
                      <Multiselect
                        className="multi-select"
                        options={opiOptions}
                        value={formData.outputIndicators}
                        displayValue="name"
                        placeholder="Select Output Indicator"
                        onSelect={(event) =>
                          setFormData({ ...formData, outputIndicators: event })
                        }
                      ></Multiselect>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="form-label">Outcome Indicator(s)</Form.Label>
                      <Multiselect
                        className="multi-select"
                        options={ociOptions}
                        value={formData.outcomeIndicators}
                        displayValue="name"
                        placeholder="Select Outcome Indicator"
                        onSelect={(event) =>
                          setFormData({ ...formData, outcomeIndicators: event })
                        }
                      ></Multiselect>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="row">
                  <Col>
                    <Form.Group>
                      <Form.Label className="form-label">Section(s)</Form.Label>
                      <Multiselect
                        className="multi-select"
                        options={sectionOptions}
                        value={formData.sections}
                        displayValue="name"
                        placeholder="Select Section"
                        onSelect={(event) =>
                          setFormData({ ...formData, sections: event })
                        }
                      ></Multiselect>
                       <p>{errors.sections}</p>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="form-label">SDG(s)</Form.Label>
                      <Multiselect
                        className="multi-select"
                        options={sdgOptions}
                        value={formData.sdgs}
                        displayValue="name"
                        placeholder="Select SDG"
                        onSelect={(event) =>
                          setFormData({ ...formData, sdgs: event })
                        }
                      ></Multiselect>
                       <p>{errors.sdgs}</p>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="row">
                  <Col>
                    <Form.Group>
                      <Form.Label className="form-label">Start Date</Form.Label>
                      <DatePicker className="date" onChange={onStartDateChange} value={formData.startDate} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className="form-label">End Date</Form.Label>
                      <DatePicker className="date" onChange={onEndDateChange} value={formData.endDate} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className='row'>
                  <Col>
                    <Form.Group>
                      <Form.Label>Sub Village</Form.Label>
                      <Select
                        placeholder="Select Sub Village"
                        onChange={(e) =>
                          setFormData({ ...formData, subVillage: e })
                        }
                        options={subVillages}
                      />
                      <p>{errors.subVillages}</p>
                    </Form.Group>
                  </Col>
                  <Col></Col>
                </Row>
                <div className="footer">
                  <button className="cancel-btn"> Cancel </button>
                  <button className="next-btn"> Add Target </button>
                  <button className="next-btn target-breakdown-btn"> Add Breakdown Amounts </button>
                </div>
              </Form>
            </Container>
        </div>
      </div>
    </div>
  )
}

export default TargetCreate