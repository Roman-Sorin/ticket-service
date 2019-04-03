import React, {Component} from "react";
import './upcoming-events.css';
import {connect} from "react-redux";
import TicketService from '../../services/ticket-service'
import {
    upcomingEventsRequest,
    upcomingEventsLoaded,
    upcomingEventsShowError,
    setToken,
    setEmail,
    authSetStatus
} from '../../actions/actions'
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import {withRouter} from 'react-router-dom';


class UpcomingEvents extends Component {

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    ticketService = new TicketService();

    addZero = (num) => {
        if (num <= 9) {
            return `0${num}`
        } else {
            return num;
        }
    };

    componentDidMount() {
        this.props.upcomingEventsRequest();
        this.ticketService.getUpcomingEvents(this.props.token)
            .then((data) => {
                this.props.upcomingEventsLoaded(data);
            })
            .catch(() => {
                this.props.upcomingEventsShowError();
            })
    }

    setItems = (arr) => {
        return arr.map((item, index) => {
            let {history} = this.props;
            let nameEvent = item.eventName;
            let date = new Date(item.eventStart);

            const soldOut = (<span className='soldOut'>SOLD OUT</span>);
            const buy = (<span className='buy'>BUY</span>);
            let status = +item.availabilityStatus ? soldOut : buy;

            return (
                <div key={index}>
                    <div className='crop-container-upcoming-events' onClick={() => {
                        history.push(`/events/${item.eventId}`)
                    }}>
                        <img src={item.images[0]} alt='poster'/>
                        <p className='upcomingEventsTitle'>{nameEvent}</p>
                    </div>
                    <p className='descrEvent'>
                <span className='text-left'>
                {date.getDate()} {this.months[date.getMonth()]}</span>

                        <span className='text-right'>
                {this.addZero(date.getHours())}:{this.addZero(date.getMinutes())} {status}</span>
                    </p>
                </div>
            );
        })
    };

    render() {

        const {upcomingEvents, upcomingEventsLoading, upcomingEventsError} = this.props;

        if (upcomingEventsLoading) {
            return <Spinner/>
        }

        if (upcomingEventsError) {
            return <ErrorIndicator/>
        }

        return (
            <div className='upcomming-events-container'>
                <h2 className='titles titles-left-bar mt-3 ml-0'>Upcoming Events</h2>
                {this.setItems(upcomingEvents)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        upcomingEvents: state.upcomingEvents,
        upcomingEventsLoading: state.upcomingEventsLoading,
        upcomingEventsError: state.upcomingEventsError,
        token: state.token
    }
};

const mapDispatchToProps = {
    upcomingEventsRequest,
    upcomingEventsLoaded,
    upcomingEventsShowError, setToken, setEmail, authSetStatus
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpcomingEvents));