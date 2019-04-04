import React, {Component} from "react";
import './cart-side.css';
import {connect} from "react-redux";
import {seatsInCartRemove, setBookLoading} from "../../actions/actions";
import TicketService from "../../services/ticket-service";
import {withRouter} from "react-router-dom";

class CartSide extends Component {

    ticketService = new TicketService();

    ticketPrice = (arr, row) => {
        let obj;
        for (let i = 0; i < arr.length; i++) {
            let tmpRow = arr[i].rows.find((item) => {
                return +item === row;
            });
            if (tmpRow) {
                obj = arr[i];
                return obj.price;
            }
        }
    };

    seatsRender = (arr) => {
        let priceRages = this.props.event.hall === 1 ? this.props.priceRages : this.props.priceRages2;

        return arr.map((item, index) => {
            return (
                <div className='row justify-content-between seat-cart-row' key={index}>
                    <span className='seat-cart-font'>{item.row}</span>
                    <span className='seat-cart-font'>{item.seat}</span>
                    <span><i className="fa fa-times pointer remove-seat" onClick={
                        () => {
                            this.props.seatsInCartRemove(item.row, item.seat, this.ticketPrice(priceRages, item.row));
                        }
                    }/></span>
                </div>
            );
        })
    };

    render() {
        let {seatsInCart: seats, totalCost, setBookLoading} = this.props;

        return (
            <React.Fragment>
                <div className='row justify-content-between'>
                    <div className='col-md-9 col-7 d-flex justify-content-between'>
                        <span className=''>Row</span>
                        <span className=''>Place</span>
                    </div>
                </div>
                <div className='col-12'>
                    {this.seatsRender(seats)}
                </div>
                <div className='row justify-content-between mt-2'>
                    <span className='ml-3 seat-cart-font'>{seats.length} tickets</span>
                    <span className='mr-3 seat-cart-font'>€{totalCost}</span>
                </div>
                <button className='form-btn w-100 mt-2 pt-2' onClick={
                    () => {
                        setBookLoading(true);
                        this.ticketService.temporaryBook(seats, this.props.event.eventId)
                            .then(() => {
                                setBookLoading(false);
                                this.props.history.push('/shopping-cart')
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    }
                }> TO THE CART
                </button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.event,
        seatsInCart: state.seatsInCart,
        totalCost: state.totalCost,
        priceRages: state.hallStructureForEvent.priceRanges,
        priceRages2: state.hallStructure2ForEvent.priceRanges,
    }
};

const mapDispatchToProps = {
    seatsInCartRemove, setBookLoading
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartSide));