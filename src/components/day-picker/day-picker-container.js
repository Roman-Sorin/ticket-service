import React, {Component} from "react";
import './day-picker-container.css';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {resetCalender, setCalender} from "../../actions/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import EventListInfinity from "../delete/event-list-infinity";

class DayPickerContainer extends Component {

    WEEKDAYS_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    handleDayClick = (day) => {
        EventListInfinity.page = 1;
        const range = DateUtils.addDayToRange(day, this.props.calendar);
        this.props.setCalender(range);
        if (this.props.calendar.from) {
            this.props.history.push('/events/');
        }
    };

    handleResetClick = () => {
        this.props.resetCalender();
    };

    render() {
        const {from, to} = this.props.calendar;
        const modifiers = {start: from, end: to};
        return (
            <div className="RangeExample">
                <h2 className='titles titles-left-bar media-sm-none'>Calendar</h2>
                <div className='ml-3 tips tips-sm order-0 order-lg-1'>
                    {!from && !to && (
                        <div>
                            <div className="w-100"/>
                            <span> Select the <span className=''>first</span> day for searching events.</span>
                            <i className="fa fa-arrow-down w-100"/>
                        </div>)}
                    {from && !to && (
                        <div>
                            <div className="w-100"/>
                            <span> Select the <span className=''>last</span> day for searching events.</span>
                            <i className="fa fa-arrow-down w-100"/>
                        </div>)}
                    {from && to && `Events from ${from.toLocaleDateString()} to
                        ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <div className="form-btn" onClick={this.handleResetClick}>
                            Reset dates
                        </div>
                    )}
                </div>
                <DayPicker
                    className="Selectable h290"
                    weekdaysShort={this.WEEKDAYS_SHORT}
                    selectedDays={[from, {from, to}]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
                <div className='ml-3 ml-md-0 tips tips-lg order-0 order-lg-1'>
                    {!from && !to && (
                        <div>
                            <div className="w-100"/>
                            <span> Select the <span className=''>first</span> day for searching events.</span>
                            <i className="fa fa-arrow-up w-100"/>
                        </div>)}

                    {from && !to && (
                        <div>
                            <div className="w-100"/>
                            <span> Select the <span className=''>last</span> day for searching events.</span>
                            <i className="fa fa-arrow-up w-100"/>
                        </div>)}

                    {from && to && `Events from ${from.toLocaleDateString()} to
                        ${to.toLocaleDateString()}`}{' '}

                    {from &&
                    to && (
                        <div className="form-btn" onClick={this.handleResetClick}>
                            Reset dates
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        calendar: state.calendar
    }
};

const mapDispatchToProps = {
    resetCalender, setCalender
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DayPickerContainer));