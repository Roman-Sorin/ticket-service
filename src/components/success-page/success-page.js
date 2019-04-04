import React, {Component} from "react";
import './success-page.css'
import {clearSeatsCart, seatsInCartRemove} from "../../actions/actions";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import emptyCart from "../cart/017-delete.png";
import pdf from './pdf.png'

class SuccessPage extends Component {

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    componentWillUnmount() {
        this.props.clearSeatsCart();
    }

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
                    <h1 className='futuraFuturis mt-5 text-md-left text-center'>Your shopping cart is empty</h1>
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
                    <h1 className='futuraFuturis mt-5 text-md-left text-center'>Your shopping cart is empty</h1>
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
            <div className='row w-100-wv p-2'>
                <div className='col-12 d-flex justify-content-center '>
                    <Link to='/success' className='link f40'>SUCCESS</Link>
                </div>
                <div className='row w-100 p-md-4 p-0 m-0 mt-md-4'>
                    <div>
                        <p className='fl-login text-md-left text-center'>{event.artist} | {event.eventName}
                            | {date.getDate()} {this.months[date.getMonth()]} {date.getFullYear()}</p>
                        <div className='row justify-content-between col-md-4 col-12 mt-1'>
                            <span className=''>{seats.length} tickets</span>
                            <span className=''>€{totalCost}</span>
                        </div>
                    </div>
                    <div className="w-100"/>
                    <p className='blue-text mt-5 text-md-left text-center'>
                        Congratulations! You’ve successfully payed. Your PDF ticket have been sent
                        to your email. We wish you a pleasant time at our Berlin City Hall
                    </p>

                    <p className='pointer futuraFuturis' onClick={
                        () => {
                            history.push('/events')
                        }
                    }>Return to the main page</p>
                    <div className="w-100"/>
                    <p className='d-flex justify-content-start align-items-center mt-5 pointer futuraFuturis text-md-left text-center' onClick={
                        () => {
                            alert('DOWNLOADING');
                        }
                    }>Download your ticket
                        <img className='pdf-img' src={pdf} alt='file' width='48' height='48'/>
                    </p>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SuccessPage));