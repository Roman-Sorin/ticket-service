import React, {Component} from "react";
import './event-list.css';
import {connect} from "react-redux";
import {eventsLoaded, eventsRequest, eventsShowError} from "../../actions/actions";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import TicketService from "../../services/ticket-service";
import Link from "react-router-dom/es/Link";

class EventList extends Component {

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    ticketService = new TicketService();

    updateEvents = () => {
        this.props.eventsRequest();
        let {from, to} = this.props.calendar;

        this.ticketService.getEvents(Date.parse(from), Date.parse(to), this.props.token)

            .then((data) => {
                this.props.eventsLoaded(data);
            })

            .catch(() => {
                this.props.eventsShowError();
            })
    };

    componentDidMount() {
        this.updateEvents();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.calendar.from !== this.props.calendar.from || prevProps.calendar.to !== this.props.calendar.to) {
            this.updateEvents();
        }
    }

    setItems = (arr) => {
        return arr.map((item, index) => {
            let date = new Date(item.eventStart);
            return (
                <div
                    className='col-lg-6 col-12 eventItem crop-container'
                    key={index} onClick={
                    () => {
                        this.props.onItemSelected(item.eventId);
                    }
                }>
                    <img src={item.images[0]} alt='poster'/>
                    <h2 className='eventTitleMain'>{item.artist}</h2>
                    <h4 className='eventDescrMain'>{item.eventName}</h4>
                    <h5 className='dateMain'>
                        {date.getDate()} {this.months[date.getMonth()]}
                    </h5>
                </div>
            );
        })
    };

    render() {

        let {events, eventsLoading, eventsError} = this.props;
        console.log(events);
        if (eventsLoading) {
            return <Spinner/>
        }

        if (eventsError) {
            return <ErrorIndicator/>
        }

        let content = events.length === 0 ? (
            <div className='f35 note'>There are no events in this dates</div>) : this.setItems(events);

        return (
            <React.Fragment>
                <div className='row w-100'>
                    <div className='col-12 d-flex justify-content-center'>
                        <Link to='/events/' className='link f40'>EVENTS</Link>
                    </div>
                    <div className="w-100"/>
                    {content}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        calendar: state.calendar,
        events: state.events,
        eventsLoading: state.eventsLoading,
        eventsError: state.eventsError,
        token: state.token
    }
};

const mapDispatchToProps = {
    eventsRequest,
    eventsLoaded,
    eventsShowError
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);