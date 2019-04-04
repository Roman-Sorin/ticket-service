import React, {Component} from "react";
import './event-details.css';
import {connect} from "react-redux";
import TicketService from "../../services/ticket-service";
import {eventLoaded, eventRequest, eventShowError} from "../../actions/actions";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import clockIcon from './clock-circular-outline.svg'
import Link from "react-router-dom/es/Link";
import {withRouter} from "react-router-dom";


class EventDetails extends Component {

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    addZero = (num) => {
        if (num <= 9) {
            return `0${num}`
        } else {
            return num;
        }
    };

    ticketService = new TicketService();

    componentDidMount() {
        this.updateEvent();
    }

    updateEvent = () => {
        this.props.eventRequest();
        this.ticketService.getEventById(this.props.id, this.props.token)
            .then((event) => {
                this.props.eventLoaded(event);
            })
            .catch((error) => this.props.eventShowError(error))
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.id !== this.props.id) {
            this.updateEvent();
        }
    }

    render() {

        let {event, eventLoading, eventError, history} = this.props;

        if (eventLoading) {
            return <Spinner/>
        }

        if (eventError) {
            return <ErrorIndicator/>
        }

        let date = new Date(event.eventStart);
        return (
            <div className='row w-100-wv '>
                <div className='col-12 d-flex justify-content-center'>
                    <Link to='/events/' className='link f40'>EVENTS</Link>
                </div>

                <div className="w-100"/>

                <div className="col-lg-6 col-12 mt-4 poster">
                    <img src={event.images[0]} alt='poster' className='w-100-wv'/>
                    <h2 className='eventTitleMain-single'> {event.artist}</h2>
                    <h4 className='eventDescrMain-single'> {event.eventName}</h4>
                    <h5 className='dateMain-single'>
                        {date.getDate()} {this.months[date.getMonth()]}
                    </h5>
                </div>

                <div className="col-lg-6 col-12 mt-4 event-description">
                    <h5 className='rightSideMainArtist'>{event.artist}</h5>
                    <p className='rightSideMainDescr'>{event.description}</p>
                    <h5 className='rightSideMainArtist'>Date:
                        <span
                            className='yellow-text'> {date.getDate()} {this.months[date.getMonth()]} {date.getFullYear()}
                        </span>
                        <img src={clockIcon} alt='clock' width='20' className='pb-1 mx-2'/>
                        {this.addZero(date.getHours())}:{this.addZero(date.getMinutes())}
                    </h5>

                    <h5 className='rightSideMainArtist'>Tickets available -
                        <span
                            // className='yellow-text'> {event.ticketsAvailable}
                            className='yellow-text'> {189}
                        </span>
                    </h5>

                    <h5 className='rightSideMainArtist'>Price rang:
                        <span
                            // className='yellow-text'> €{event.minPrice} - €{event.maxPrice}
                            className='yellow-text'> €{100} - €{260}
                        </span>
                    </h5>

                    <h4 className='yellow-text-bold scale pointer buy-ticket-btn' onClick={
                        () => {
                            history.push(`/events/${event.eventId}/tickets`)
                        }
                    }>BUY TICKETS</h4>
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
        token: state.token
    }
};

const mapDispatchToProps = {
    eventRequest,
    eventLoaded,
    eventShowError
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventDetails));