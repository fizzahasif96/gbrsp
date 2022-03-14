import React , {useState} from "react";
import { Form, Container, Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import DatePicker from 'react-date-picker';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-date-picker/dist/DatePicker.css'
function ProjectDetails({ formData, setFormData }) {
  const donors = [
    {id: 1 , name: "AKM"},
    {id: 2 , name: "AKAH"},
    {id: 3 , name: "AKH"},
    {id: 4 , name: "RS"},
    {id: 5 , name: "CCV"},
    {id: 6 , name: "DK"}
  ];
  const ips = [
    {id: 1 , name: "AKM"},
    {id: 2 , name: "AKAH"},
    {id: 3 , name: "AKH"},
    {id: 4 , name: "IP"},
    {id: 5 , name: "CCV"},
    {id: 6 , name: "DK"}
  ];
  const cbos = [
    {id: 1 , name: "cbo 1"},
    {id: 2 , name: "cbo 2"},
    {id: 3 , name: "cbo 3"},
    {id: 4 , name: "cbo 4"},
    {id: 5 , name: "cbo 5"},
    {id: 6 , name: "cbo 6"}
  ];
  const [donorOptions] = useState(donors);
  const [ipOptions] = useState(ips);
  const [cboOptions] = useState(cbos);
  const [value, onChange] = useState(new Date());
  return (
    
    <div className="sign-up-container">
      <Container>
        <Form>
          <Row className="row">
            <Col>
              <Form.Group>
                <Form.Label className="form-label">Project</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add Project"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({ ...formData, name: event.target.value })
                  }></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Budget (PKR)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Add Budget"
                  value={formData.budget}
                  onChange={(event) =>
                    setFormData({ ...formData, budget: event.target.value })
                  }></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="row">
            <Col>
              <Form.Group>
                <Form.Label className="form-label">Donor(s)</Form.Label>
                <Multiselect 
                className="multi-select"
                options= {donorOptions} 
                value={formData.donors}
                displayValue="name"
                placeholder="Select Donors"
                onSelect={(event) =>
                    setFormData({ ...formData, donors: event.target.value })
                  }
                ></Multiselect>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Implementing Partner(s)</Form.Label>
                <Multiselect 
                options= {ipOptions} 
                className="multi-select"
                value={formData.implementingPartners}
                displayValue="name"
                placeholder="Select IPs"
                onSelect={(event) =>
                    setFormData({ ...formData, implementingPartners: event.target.value })
                  }
                ></Multiselect>
              </Form.Group>
            </Col>
          </Row>
          <Row className="row">
            <Col>
              <Form.Group>
                <Form.Label className="form-label">CBO(s)</Form.Label>
                <Multiselect 
                className="multi-select"
                options= {cboOptions} 
                value={formData.cbos}
                displayValue="name"
                placeholder="Select CBOs"
                onSelect={(event) =>
                    setFormData({ ...formData, cbos: event.target.value })
                  }
                ></Multiselect>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label className="form-label">Start Date</Form.Label>
                <DatePicker className="date" onChange={onChange} value={value} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="row">
            <Col>
              <Form.Group>
                <Form.Label className="form-label">End Date</Form.Label>
                <DatePicker className="date" onChange={onChange} value={value} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label className="form-label">Project Director(s)</Form.Label>
                <Multiselect 
                className="multi-select"
                options= {cboOptions} 
                value={formData.cbos}
                displayValue="name"
                placeholder="Select CBOs"
                onSelect={(event) =>
                    setFormData({ ...formData, cbos: event.target.value })
                  }
                ></Multiselect>
              </Form.Group>
            </Col>
          </Row>
          <Row className="row">
            <Col>
              <Form.Group>
                <Form.Label className="form-label">MERL Officer(s)</Form.Label>
                <Multiselect 
                className="multi-select"
                options= {cboOptions} 
                value={formData.cbos}
                displayValue="name"
                placeholder="Select CBOs"
                onSelect={(event) =>
                    setFormData({ ...formData, cbos: event.target.value })
                  }
                ></Multiselect>
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default ProjectDetails;
