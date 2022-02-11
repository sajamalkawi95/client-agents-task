import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'
import { Button } from '../index';

export default class AppointmentsList extends Component {
    render() {
        return (
            <>


                {
                    this.props.allAppointment.map(appointment =>
                        <tr>
                            <td>  {appointment.buyerName} </td>

                            <td> {appointment.appointmentDate}</td>

                            {
                                appointment.state == 'rejected' ?
                                    <td>
                                        <Badge class="badge" bg="success" onClick={() => { this.props.setAppointment(appointment._id); this.props.acceptAppointment() }}>Accept</Badge>
                                    </td> :
                                    appointment.state == 'accepted' ?
                                        <td>
                                            <Badge class="badge" bg="danger" onClick={() => { this.props.setAppointment(appointment._id); this.props.acceptAppointment() }}>Reject</Badge>
                                        </td> :

                                        <td>
                                            <Badge class="badge" bg="success" onClick={() => { this.props.setAppointment(appointment._id); this.props.acceptAppointment(); }}>Accept</Badge>
                                            <Badge class="badge" bg="danger" onClick={() => { this.props.setAppointment(appointment._id); this.props.acceptAppointment(); }}>Reject</Badge>
                                        </td>
                            }







                        </tr >)



                }



            </>
        )
    }
}
