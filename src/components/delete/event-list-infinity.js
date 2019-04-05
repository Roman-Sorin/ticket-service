import React, {Component} from "react";
import {connect} from "react-redux";
import {
    eventsLoaded,
    eventsRequest,
    eventsShowError,
    resetCalender,
    setTotalCount
} from "../../actions/actions";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import TicketService from "../../services/ticket-service";
import Link from "react-router-dom/es/Link";
import './infinity-list.css';

class EventListInfinity extends Component {

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    static page = 0;
    ticketService = new TicketService();

    updateEvents = (page, size = 4) => {
        this.props.eventsRequest();
        let {from, to} = this.props.calendar;
        from = typeof from !== 'undefined' ? from : '01-01-2018';
        to = typeof to !== 'undefined' ? to : '01-01-2020';

        this.ticketService.getEvents(Date.parse(from), Date.parse(to), 0, 99999999)
            .then((data) => {
                this.props.setTotalCount(data.length / 4);
                return this.ticketService.getEvents(Date.parse(from), Date.parse(to), page, size, this.props.token)
            })
            .then((data) => {
                this.props.eventsLoaded(data);
            })
            .catch(() => {
                this.props.eventsShowError();
            })
    };

    componentDidMount() {
        this.updateEvents(0);
    }

    componentWillUnmount() {
        EventListInfinity.page = 0;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.calendar.from !== this.props.calendar.from || prevProps.calendar.to !== this.props.calendar.to) {
            EventListInfinity.page = 0;
            this.updateEvents(0);
        }
    }

    setItems = (arr) => {
        return arr.map((item, index) => {
            let date = new Date(item.eventStart);
            return (
                <div
                    className='col-md-6 col-12 eventItem crop-container'
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
        if (eventsLoading) {
            return <Spinner/>
        }

        if (eventsError) {
            return <ErrorIndicator/>
        }

        let content = events.length === 0 ? (
            <div className='f35 note'>
                <p>No events</p>
                <div className="form-btn" onClick={this.props.resetCalender}>
                    Reset dates
                </div>
            </div>) : this.setItems(events);

        return (
            <React.Fragment>
                <div className='row w-100 justify-content-center'>
                    <div className='col-12 d-flex justify-content-center'>
                        <Link to='/events/' className='link f40'>EVENTS</Link>
                    </div>
                    <div className="w-100"/>
                    {content}
                    <div className='row w-100'>
                        <div className='col-12 d-flex justify-content-center'>

                            {EventListInfinity.page !== 0 &&
                            <div className='prev-btn' onClick={
                                () => {
                                    EventListInfinity.page--;
                                    this.updateEvents(EventListInfinity.page);
                                }
                            }>Prev page
                            </div>}

                            {EventListInfinity.page < this.props.totalCount - 1 &&
                            (<div className='form-btn next-btn'
                                  onClick={
                                      () => {
                                          EventListInfinity.page++;
                                          this.updateEvents(EventListInfinity.page);
                                      }
                                  }>Next page
                            </div>)}

                        </div>
                    </div>
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
        token: state.token,
        page: state.pagination.page,
        hasMoreItems: state.pagination.hasMoreItems,
        totalCount: state.totalCount
    }
};

const mapDispatchToProps = {
    eventsRequest,
    eventsLoaded,
    eventsShowError,
    resetCalender,
    setTotalCount
};

export default connect(mapStateToProps, mapDispatchToProps)(EventListInfinity);