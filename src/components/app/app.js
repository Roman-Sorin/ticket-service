import React, {Component} from 'react';
import 'react-day-picker/lib/style.css';
import Header from "../header/header";
import ExtendMenu from "../expand-menu/expand-menu";
import {connect} from "react-redux";
import DayPickerContainer from '../day-picker/day-picker-container'
import './app.css'
import UpcomingEvents from '../upcoming-events/upcoming-events'
import Footer from "../footer/footer";
import EventsListContainer from "../event-list-container/events-list-container";
import {
    setToken, setEmail, authSetStatus
} from "../../actions/actions";

class App extends Component {

    componentDidMount() {
        if (!!localStorage.getItem('token') && localStorage.getItem('token').length > 0) {
            let token = localStorage.getItem('token');
            let email = localStorage.getItem('email');
            this.props.setToken(token);
            this.props.setEmail(email);
            this.props.authSetStatus('ok');
        }
    }

    render() {
        return (
            <div>
                <Header/>
                {this.props.menuIsShown &&
                <ExtendMenu/>
                }
                <div className='container'>
                    <div className="row w1200">

                        <div className='col-lg-3 col-12 mt-lg-5 mt-2 order-lg-0 order-1'>
                            <div className="row justify-content-center mr-lg-4 mr-0">
                                <DayPickerContainer/>
                                <UpcomingEvents/>
                            </div>
                        </div>

                        <div className="col-lg-9 col-12">
                            <div className="row main-area justify-content-center">
                                <EventsListContainer/>
                            </div>

                            <div className="row footer-lg">
                                <Footer/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer-sm justify-content-center">
                    <Footer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuIsShown: state.menuIsShown,
        token: state.token
    }
};

const mapDispatchToProps = {
    setToken, setEmail, authSetStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(App);