import React from 'react';
import axios from 'axios';
import SellerList from './SellerList';
class Buyer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allSellers: []
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
        e.preventDefault();

        axios.get(`${process.env.REACT_APP_SEVER_PORT}/getSomeSellers?search=${e.target.search.value}`,).then(axiosResponse => {
            this.setState({ allSellers: axiosResponse.data })
        }).catch(error => alert(error));
    }
    render() {
        return (
            <div>
                <h1>Buyer Dashbord</h1>
                <div className="container" style={{ padding: 0 }}>
                    <div className='row' >
                        <div class="wrap">
                            <form className="search" onSubmit={(e) => this.getSomeSellers(e)}>
                                <input type="text" class="searchTerm" id='search' placeholder="Search for Seller name" />
                                <button type="submit" class="searchButton">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-md-5'>
                            <SellerList sellers={this.state.allSellers} />

                        </div>
                        <div className='col-md-5'>
                            <SellerList sellers={this.state.allSellers} />

                        </div>
                    </div>

                </div>
            </div >
        )
    }

}



export default Buyer;