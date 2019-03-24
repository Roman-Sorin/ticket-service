import React, {Component} from "react";
import './about-page.css'
import {Link} from "react-router-dom";

export default class AboutPage extends Component {
    render() {
        return (
            <div className={'row'}>
                <div className='col-12 d-flex justify-content-center '>
                    <Link to='/halls-schemes' className='link f40'>ABOUT US</Link>
                </div>

                <p className='cover-blur'>
                    <span className='title-about'>Berlin City Hall | Events and Tickets</span>
                </p>

                <p>At Berlin City Hall | Events and Tickets, we strive to put fans first. Every day we're listening to
                    your feedback and working to
                    improve your experience before, during, and after events.
                </p>
                <p>
                    Berlin City Hall | Events and Tickets merged to create Berlin Entertainment. Now you have more
                    options than ever to enjoy live events, and things are only getting better.

                    We're making real changes and putting you first in everything we do. Here's just a taste of what
                    we're
                    up to...
                </p>
            </div>
        );
    }
}