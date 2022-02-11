import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Badge } from 'react-bootstrap';
import SellerList from './SellerList';
class Buyer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allSellers: [],
            allAppointment: []
        }
    }
    componentDidMount = () => {
        this.getAllSellers()
    }
    getAllSellers = () => {
        axios.get(`${process.env.REACT_APP_SEVER_PORT}/getAllSellers`).then(axiosResponse => {
            this.setState({ allSellers: axiosResponse.data })
        }).catch(error => alert(error));
    }
    getSomeSellers = (e) => {
        console.log(e);
        axios.get(`${process.env.REACT_APP_SEVER_PORT}/getSomeSellers?search=${e.target.value}`,).then(axiosResponse => {
            this.setState({ allSellers: axiosResponse.data })
        }).catch(error => alert(error));
    }

    render() {
        return (



            <div className='row' style={{ width: "100%" }}>
                <div className="col-lg-6   mx-auto stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Sellers List </h4>
                            <div className='row'>
                                <div class="wrap">
                                    <form className="search" onSubmit={(e) => this.getSomeSellers(e)}>
                                        <input type="text" onChange={(e) => this.getSomeSellers(e)} class="searchTerm" id='search' placeholder="Search for Seller name" />

                                    </form>
                                </div>
                                <Link className='logout' to='/'> Logout </Link>
                            </div>
                            <div className="table-responsive">
                                {this.state.allSellers.length > 0 ?

                                    <table className="table2 table-hover">
                                        <thead>
                                            <tr>
                                                <th>  Image</th>
                                                <th>  Name</th>
                                                <th>Email</th>

                                                <th>Book Appointment </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <SellerList sellers={this.state.allSellers} />
                                        </tbody>
                                    </table> :

                                    <Badge bg="info">  No Sellers Avilable</Badge>}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}



export default Buyer;