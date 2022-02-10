import React from 'react';
import AppointmentsList from './AppointmentsList';
import axios from 'axios';
import { withRouter } from "react-router-dom";

///allAppointment
class Seller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allAppointment: []
        };
    }
    // componentDidMount = () => {
    //     this.getallAppointment()
    // }
    getallAppointment = () => {
        axios.get(`${process.env.REACT_APP_SEVER_PORT}/allAppointment`).then(axiosResponse => {
            this.setState({ allAppointment: axiosResponse.data })
        }).catch(error => alert(error));
    }
    render() {
        console.log(this.props.match.params)
        return (
            <div>
                <h1>Seller Dashbord</h1>
                <h1>{window.sessionStorage.getItem("idSeller")} </h1>
                {/*<h1>About user {user_id}</h1>
                 <div className="row">
                    <div className='col-md-12'>
                        <AppointmentsList allAppointment={this.state.allAppointment} />

                    </div>
                </div> */}
            </div >
        );
    }
}

export default Seller;