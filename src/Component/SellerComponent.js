import React, { Component } from 'react'
import axios from 'axios';
import AppointmentsList from './AppointmentsList';
import { Link } from "react-router-dom";
import { Badge } from 'react-bootstrap';
export default class SellerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: window.sessionStorage.getItem("idSeller"),
            allAppointment: [],
            appointmentid: ""
        }
    }
    setAppointment = (id) => {
        this.setState({ appointmentid: id });
    }
    componentDidMount = () => {
        this.getallAppointment()
    }
    getallAppointment = () => {
        axios.get(`${process.env.REACT_APP_SEVER_PORT}/allAppointment?seller_Id=${this.state.id}`).then(axiosResponse => {
            this.setState({ allAppointment: axiosResponse.data })
        }).catch(error => alert(error));
    }
    acceptAppointment = () => {
        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_SEVER_PORT}/updateState/${this.state.appointmentid}?accepted=true`).then(axiosResponse => {
                console.log(axiosResponse.data)
                alert("Appointment Accepted")

            }).catch(error => alert(error));
        }, 2000);

    }
    rejectAppointment = () => {
        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_SEVER_PORT}/updateState/${this.state.appointmentid}?accepted=false`).then(axiosResponse => {
                console.log(axiosResponse.data)
                alert("Appointment rejected")
            }).catch(error => alert(error));
        }, 2000);

    }
    render() {
        return (

            <div >
                {/* <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8&w=1000&q=80" className='hero' /> */}

                <div className="col-lg-6   mx-auto stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">All Sellers </h4>
                            <Link className='logout' to='/'> Logout </Link>

                            <div className="table-responsive">
                                {
                                    this.state.allAppointment.length > 0 ?

                                        <table className="table2 table-hover">
                                            <thead>
                                                <tr>
                                                    <th> Buyer Name</th>
                                                    <th>Date</th>

                                                    <th>Reject / Accept Appointment </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <AppointmentsList allAppointment={this.state.allAppointment} setAppointment={this.setAppointment} accseptAppointment={this.accseptAppointment} rejectAppointment={this.rejectAppointment} />
                                            </tbody>
                                        </table> :

                                        <Badge bg="info" >  no Appointment Avilable</Badge>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
