import React, {Component} from "react";
import './paying.css'
import {Link, withRouter} from "react-router-dom";
import {clearSeatsCart, seatsInCartRemove} from "../../actions/actions";
import {connect} from "react-redux";
import emptyCart from "../cart/017-delete.png";

class Paying extends Component {

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    render() {

        let date;
        let {event, history} = this.props;
        let {seatsInCart: seats, totalCost} = this.props;
        if (Object.keys(event).length !== 0) {
            date = new Date(event.eventStart);
        }

        if (Object.keys(event).length === 0) {
            return (
                <div className='row justify-content-center w-100-wv'>
                    <h1 className='futuraFuturis mt-5 text-lg-left text-center'>Your shopping cart is empty</h1>
                    <div className="w-100"/>
                    <img src={emptyCart} alt={'empty cart'} className={'mt-4'} width={64} height={64}/>
                    <div className="w-100"/>
                    <button className='form-btn col-4 mt-4' onClick={() => {
                        history.push('/events');
                    }}> BACK
                    </button>
                </div>
            );
        }

        if (this.props.seatsInCart.length === 0) {
            return (
                <div className='row justify-content-center w-100-wv'>
                    <h1 className='futuraFuturis mt-5 text-lg-left text-center'>Your shopping cart is empty</h1>
                    <div className="w-100"/>
                    <img src={emptyCart} alt={'empty cart'} className={'mt-4'} width={64} height={64}/>
                    <div className="w-100"/>
                    <button className='form-btn col-4 mt-4' onClick={() => {
                        history.goBack();
                    }}> BACK
                    </button>
                </div>
            );
        }


        return (
            <div className='row w-100-wv'>
                <div className='col-12 d-flex justify-content-center '>
                    <Link to='/paying' className='link f40'>PAYING</Link>
                </div>
                <div className='row border-cart p-4 mt-lg-4 m-0 w-100-wv justify-content-center'>
                    <div>
                        <p className='fl-login ml-lg-3 mx-0 text-lg-left text-center'>{event.artist} | {event.eventName}
                            | {date.getDate()} {this.months[date.getMonth()]} {date.getFullYear()}</p>
                        <div className='row justify-content-between col-lg-4 col-12 mt-1'>
                            <span className=''>{seats.length} tickets</span>
                            <span className=''>€{totalCost}</span>
                        </div>
                    </div>
                    <div className="w-100"/>
                    <form className='w-100' method='POST' onSubmit={
                        (e) => {
                            e.preventDefault();
                            history.push('/success');
                        }}>
                        <div className='row justify-content-center'>
                            <label className='d-flex justify-content-start align-items-center'>
                                <input required type='radio' name="payment-method"/>
                                <i className="fa fa-cc-paypal ml-2"/></label>
                            <div className="w-100"/>
                            <div className='row w-100 justify-content-lg-end justify-content-center'>
                                <button type='submit' className='form-btn pay-btn-paying'> PAY
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className='clear-cart' onClick={
                        () => {
                            this.props.clearSeatsCart();
                        }
                    }>Delete section
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        seatsInCart: state.seatsInCart,
        totalCost: state.totalCost,
        event: state.event,
    }
};

const mapDispatchToProps = {
    seatsInCartRemove, clearSeatsCart
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Paying));