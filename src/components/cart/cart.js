import React, {Component} from "react";
import './cart.css'
import {connect} from "react-redux";
import {seatsInCartRemove, clearSeatsCart} from "../../actions/actions";
import {Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import emptyCart from './017-delete.png'

class Cart extends Component {

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
                <div className='row justify-content-between seat-cart-row no-gutters' key={index}>

                    <span className='col-4 seat-cart-font'>{item.row}</span>
                    <span className='col-4 seat-cart-font'>{item.seat}</span>
                    <span><i className="col-4 fa fa-times pointer remove-seat"
                             onClick={
                                 () => {
                                     this.props.seatsInCartRemove(item.row, item.seat, this.ticketPrice(priceRages, item.row));
                                 }
                             }/>
                        </span>

                </div>
            );
        })
    };

    render() {
        let date;
        let {event, history} = this.props;
        let {seatsInCart: seats, totalCost} = this.props;
        if (Object.keys(event).length !== 0) {
            date = new Date(event.eventStart);
        }

        if (Object.keys(event).length === 0) {
            return (
                <div className='row justify-content-center'>
                    <h1 className='futuraFuturis mt-5'>Your shopping cart is empty</h1>
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
                <div className='row justify-content-center'>
                    <h1 className='futuraFuturis mt-5'>Your shopping cart is empty</h1>
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
            <div className='row w-100'>
                <div className='row justify-content-center w-100'>
                    <div className='col-auto'><Link to='/shopping-cart' className='link f40'>SHOPPING CART</Link></div>
                </div>
                <div className="w-100"/>
                <div className='reserved-text row justify-content-left mt-5'>
                    <div className='col-12'> The tickets shown here have now been reserved for you for 10 minutes.</div>
                </div>
                <div className='row w-100 border-cart p-4'>
                    <div>
                        <p className='fl-login ml-3'>{event.artist} | {event.eventName}
                            | {date.getDate()} {this.months[date.getMonth()]} {date.getFullYear()}</p>
                        <div className='row col-4'>
                            <span className=''>Row</span>
                            <span className='ml-30px'>Place</span>
                        </div>
                        <div className='col-4 px-0'>
                            {this.seatsRender(this.props.seatsInCart)}
                        </div>
                        <div className='row justify-content-between col-4 mt-4'>

                            <span className=''>{seats.length} tickets</span>
                            <span className=''>€{totalCost}</span>

                        </div>
                        <form method='POST' onSubmit={
                            (e) => {
                                e.preventDefault();
                                history.push('/paying');
                            }}>

                            <button type='submit' className='form-btn col-4'> PAY
                            </button>


                            <input required type="checkbox" id="c3" name="cc1" ref='checkbox1'
                                   title='This is required'/>
                            <label htmlFor="c3" className='label-for-checkbox pos-cart-agreement'><span> </span><i
                                className='red-text'>*</i> I have read the
                                <Link to='terms' className='yellow-text' target="_blank"> Terms and
                                    Conditions</Link> and fully agree with them.</label>
                        </form>

                        <div className='clear-cart' onClick={
                            () => {
                                this.props.clearSeatsCart();
                            }
                        }>Delete section
                        </div>


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
        priceRages: state.hallStructureForEvent.priceRanges,
        priceRages2: state.hallStructure2ForEvent.priceRanges,
        event: state.event,
    }
};

const mapDispatchToProps = {
    seatsInCartRemove, clearSeatsCart
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));