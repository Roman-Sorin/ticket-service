import React, {Component} from "react";
import './tickets.css'
import {connect} from "react-redux";
import {eventRequest, eventLoaded, eventShowError, clearSeatsCart} from "../../actions/actions";
import Hall from "../hall/hall";
import TicketService from "../../services/ticket-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import CartSide from "../cart-side/cart-side";
import Prices from "../prices/prices";

class Tickets extends Component {

    ticketService = new TicketService();

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    componentDidMount() {
        this.props.clearSeatsCart();
        this.props.eventRequest();
        this.ticketService.getEventById(this.props.id, this.props.token)
            .then((event) => {
                this.props.eventLoaded(event);
            })
            .catch((error) => this.props.eventShowError(error))
    }

    render() {
        if (this.props.eventLoading || this.props.bookLoading) {
            return <Spinner/>
        }

        if (this.props.eventError) {
            return <ErrorIndicator/>
        }

        let {event} = this.props;

        let date = new Date(event.eventStart);

        return (
            <div className='w-100'>
                <div className='col-12 d-flex justify-content-center'>
                    <div className='link f40 pointer'>TICKETS</div>
                </div>
                <p className='fl-login text-center text-lg-left'>{event.artist} | {event.eventName}
                    | {date.getDate()} {this.months[date.getMonth()]} {date.getFullYear()}</p>
                <div className="row justify-content-between mt-2 w-100-wv mx-0">
                    <div className="col-xl-8 hall-container w-100-wv">
                        <Hall hall={event.hall}/>
                    </div>
                    <div className="col-xl-3 cart-container w-100-wv">
                        <Prices/>
                        <CartSide/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.event,
        eventLoading: state.eventLoading,
        eventError: state.eventError,
        token: state.token,
        bookLoading: state.bookLoading
    }
};

const mapDispatchToProps = {eventRequest, eventLoaded, eventShowError, clearSeatsCart};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);