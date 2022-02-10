import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'

export default class AppointmentsList extends Component {
    render() {
        return (
            <>
                <h1>Hi</h1>
                {
                    this.props.allAppointment.length > 0 ?
                        this.props.allAppointment.map(appointment =>

                            <div className="filter-result">
                                <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                                    <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                                        <div className="job-content">
                                            <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans ">
                                                <li className="  me-2 ms-5  ">
                                                    Date                                                </li>
                                                <li className="  me-5 ms-2  ">
                                                    {appointment.appointmentDate}
                                                </li>
                                                <li className="  me-2 ms-5  ">
                                                    Buyer Name
                                                </li>
                                                <li className="  me-5 ms-2  ">
                                                    {appointment.buyerName}
                                                </li>
                                                <li className="  me-3 ms-3">
                                                    <div className="job-right my-4 flex-shrink-0">
                                                        <Badge bg="info" style={{ padding: "10px", cursor: "pointer" }} onClick={() => { this.props.setAppointment(appointment._id); this.props.accseptAppointment() }}>Accsept</Badge>
                                                    </div>
                                                </li>
                                                <li className="  me-3 ms-3">
                                                    <div className="job-right my-4 flex-shrink-0">
                                                        <Badge bg="info" style={{ padding: "10px", cursor: "pointer" }} onClick={() => { this.props.setAppointment(appointment._id); this.props.rejectAppointment() }}>Reject</Badge>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>



                                </div>


                            </div>) :
                        <h1> no sellers Avilable</h1>
                }

            </>
        )
    }
}
