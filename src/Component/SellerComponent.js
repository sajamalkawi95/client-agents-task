import React, { Component } from 'react'
import axios from 'axios';
import AppointmentsList from './AppointmentsList';

export default class componentName extends Component {
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
    accseptAppointment = () => {
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
                alert("Appointment rejeted")
            }).catch(error => alert(error));
        }, 2000);

    }
    render() {
        return (
            <div className="row">
                <div className='col-md-12'>
                    <AppointmentsList allAppointment={this.state.allAppointment} setAppointment={this.setAppointment} accseptAppointment={this.accseptAppointment} rejectAppointment={this.rejectAppointment} />

                </div>
            </div>
        )
    }
}
