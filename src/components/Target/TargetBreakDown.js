import React from 'react'
import { Form, Container, Row, Col } from 'react-bootstrap'
import DatePicker from 'react-date-picker';
import Select from 'react-select';


const TargetBreakDown = () => {
    const activityCatalog = [
        { value: 'Activity 1', label: 'Activity 1' },
        { value: 'Activity 2', label: 'Activity 2' },
        { value: 'Activity 3', label: 'Activity 3' },
    ];
    return (
        <>
            <div className='card'>
                <div className='card-body'>
                    <div className="sign-up-container">
                        <Container>
                            <Form>
                                <Row className="row">
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className="form-label">Activity</Form.Label>
                                            <Select
                                                name="activity"
                                                placeholder="Select Activity"
                                                // onChange={(e) =>
                                                //     setFormData({ ...formData, gender: e })
                                                // }
                                                options={activityCatalog}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Month</Form.Label>
                                            <DatePicker
                                                className="date"
                                                // onChange={onEndDateChange} 
                                               // value={formData.dob} 
                                               />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TargetBreakDown