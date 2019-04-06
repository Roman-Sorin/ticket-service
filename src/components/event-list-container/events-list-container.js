import React, {Component} from "react";
import './events-list-container.css';
import EventList from "../event-list/event-list";
import EventDetails from "../event-details/event-details";
import {Route, Switch} from "react-router-dom";
import {withRouter} from "react-router-dom";
import LoginPage from "../login-page/login-page";
import RegistrationPage from "../registration-page/registration-page";
import TermsPage from "../terms-page/terms-page";
import Tickets from "../tickets/tickets";
import Cart from "../cart/cart"
import HallsSchemes from "../halls-schemes/halls-schemes";
import AboutPage from "../about-page/about-page";
import Paying from "../paying/paying";
import SuccessPage from "../success-page/success-page";
import PasswordRecoveryPage from "../password-recovery-page/password-recovery-page";

class EventsListContainer extends Component {

    render() {
        let {history} = this.props;
        return (
            <React.Fragment>
                <div className='col-12 d-flex justify-content-center event-list-component'>
                    <Switch>
                        <Route exact path='/' render={() => {
                            return (
                                <EventList onItemSelected={(id) => {
                                    history.push(`/events/${id}`)
                                }}/>
                            );
                        }}/>

                        <Route exact path='/events/' render={() => {
                            return (
                                <EventList onItemSelected={(id) => {
                                    history.push(`/events/${id}`)
                                }}/>
                            );
                        }}/>

                        <Route exact path='/events/:id' render={({match}) => {
                            return (
                                <EventDetails id={match.params.id}/>
                            );
                        }}/>

                        <Route path='/login' component={LoginPage}/>

                        <Route path='/registration' component={RegistrationPage}/>

                        <Route path='/terms' component={TermsPage}/>

                        <Route path='/events/:id/tickets' render={({match}) => {
                            return (
                                <Tickets id={match.params.id}/>
                            );
                        }}/>

                        <Route path='/shopping-cart' component={Cart}/>

                        <Route path='/halls-schemes' component={HallsSchemes}/>

                        <Route path='/about' component={AboutPage}/>

                        <Route path='/paying' component={Paying}/>

                        <Route path='/success' component={SuccessPage}/>

                        <Route path='/recovery' component={PasswordRecoveryPage}/>

                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(EventsListContainer);