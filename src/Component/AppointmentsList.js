import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'
import { Button } from '../index';

export default class AppointmentsList extends Component {
    render() {
        return (
            <>


                {
                    this.props.allAppointment.map(appointment =>
                        <tr key={appointment._id}>
                            <td>  {appointment.buyerName} </td>

                            <td> {appointment.appointmentDate}</td>

                            {
                                appointment.state == 'rejected' ?
                                    <td>
                                        <Badge className="badge" bg="success" onClick={() => { this.props.setAppointment(appointment._id); this.props.acceptAppointment() }}>Accept</Badge>
                                    </td> :
                                    appointment.state == 'accepted' ?
                                        <td>
                                            <Badge className="badge" bg="danger" onClick={() => { this.props.setAppointment(appointment._id); this.props.acceptAppointment() }}>Reject</Badge>
                                        </td> :

                                        <td>
                                            <Badge className="badge" bg="success" onClick={() => { this.props.setAppointment(appointment._id); this.props.acceptAppointment(); }}>Accept</Badge>
                                            <Badge className="badge" bg="danger" onClick={() => { this.props.setAppointment(appointment._id); this.props.acceptAppointment(); }}>Reject</Badge>
                                        </td>
                            }







                        </tr >)



                }



            </>
        )
    }
}
