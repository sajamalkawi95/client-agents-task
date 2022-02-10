import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
export class FormModal extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handelDisplayModal}>
                    <Modal.Header>
                        <Modal.Title>Book Appointment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e) => this.props.handelSubmitForm(e)}>
                            <Form.Group className="mb-3" controlId="formBasic2Email">
                                < input className='d-none' id='sellerId' value={this.props.sellerId} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Select Date </Form.Label>
                                <input type="date" className="form-control" id="Date" placeholder="Date of Birth" name="dob" onChange={this.handleChange} min={moment().format("YYYY-MM-DD")} />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Name </Form.Label>
                                <Form.Control name="buyerName" id="buyerName" type="text" placeholder="Your Name ...." />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Book
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handelDisplayModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default FormModal