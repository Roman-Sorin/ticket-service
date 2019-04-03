import React, {Component} from "react";
import './footer.css';
import logoFooter from './logo_col.svg'
import {Link} from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="col-lg-3 col-12 mt-4">
                    <Link to='/'>
                        <img src={logoFooter} alt='logo' className='footer-logo'/>
                    </Link>
                </div>

                <div className="col-lg-5 col-6 small-text-footer">
                    Berlin City Hall
                    <br/> Freudstasse 69, 10117 Berlin
                    <br/> Tel.: 030 2223344
                </div>

                <div className="col-lg-4 col-6 small-text-footer">
                    Fax.: 030 2223355
                    <br/> Email: info@bch.de<br/>
                    <i className="fa fa-youtube m-1 social-icon"> </i>
                    <i className="fa fa-facebook-square m-1 social-icon"> </i>
                    <i className="fa fa-twitter m-1 social-icon"> </i>
                    <i className="fa fa-instagram m-1 social-icon"> </i>
                    <i className="fa fa-odnoklassniki m-1 social-icon"> </i>
                    <i className="fa fa-rss m-1 social-icon"> </i>
                </div>
            </React.Fragment>
        );
    }
}