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
                {this.state.displayAddModal ?
                    <FormModal
                        show={this.state.displayAddModal}
                        handelDisplayModal={this.handelDisplayModal}
                        handelSubmitForm={this.createAppointment}
                        sellerId={this.state.sellerID} />
                    :
                    <tr></tr>
                }
                {
                    this.props.sellers.length > 0 ?
                        this.props.sellers.map(seller =>
                            <tr key={seller._id}>
                                <td>
                                    <img src={seller.imageUrl} />
                                </td>
                                <td> {seller._id, seller.fullName}</td>
                                <td>{seller.userEmail} </td>
                                <td>
                                    <Badge bg="info" onClick={() => this.handelDisplayModal(seller._id)}>Book Appointment</Badge>
                                </td>
                            </tr>)
                        :
                        <h1> no sellers Avilable</h1>
                }
            </>
        );
    }
}
export default SellerList;
