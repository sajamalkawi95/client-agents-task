
import React from 'react';
import axios from 'axios';
import { Badge } from 'react-bootstrap'
import { FormModal } from './FormModal'
class SellerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayAddModal: false,
            sellerID: 0
        }
    }

    handelDisplayModal = (seller_ID) => {
        this.setState({
            displayAddModal: !this.state.displayAddModal,
            sellerID: seller_ID
        });
    }
    createAppointment = (e) => {
        e.preventDefault();
        console.log(e)
        const body = {
            appointmentDate: e.target.Date.value,
            buyerName: e.target.buyerName.value,
            sellerId: e.target.sellerId.value,
            state: "waiting ..."
        }
        console.log(body)

        axios.post(`${process.env.REACT_APP_SEVER_PORT}/creatAppointment`, body).then(axiosResponse => {
            console.log(axiosResponse.data);
        }).catch(error => alert(error));
    }


    render() {
        return (
            <>

                {
                    this.props.sellers.length > 0 ?
                        this.props.sellers.map(seller =>

                            <div className="filter-result">
                                <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                                    <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                                        <div className="img-holder mr-md-4   mb-4 mx-auto  d-lg-flex">
                                            <img className="zmdi zmdi-pin mr-2 " src={seller.imageUrl} />
                                        </div>

                                        <FormModal
                                            show={this.state.displayAddModal}
                                            handelDisplayModal={this.handelDisplayModal}
                                            handelSubmitForm={this.createAppointment}
                                            sellerId={this.state.sellerID}

                                        />
                                        <div className="job-content">
                                            <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans ">
                                                <li className="  me-2 ms-2  ">
                                                    Name                                                </li>
                                                <li className="  me-2 ms-2  ">
                                                    {seller.fullName}
                                                </li>
                                                <li className="  me-2 ms-2  ">
                                                    Email
                                                </li>
                                                <li className="  me-2 ms-2  ">
                                                    {seller.userEmail}
                                                </li>
                                                <li className="  me-2 ms-2">
                                                    <div className="job-right my-4 flex-shrink-0">
                                                        <Badge bg="info" style={{ padding: "10px", cursor: "pointer" }} onClick={() => this.handelDisplayModal(seller._id)}>Book Appointment</Badge>
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
        );
    }
}

export default SellerList;