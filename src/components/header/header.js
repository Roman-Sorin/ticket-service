import React, {Component} from 'react';
import './header.css';
import '../../index.css'
import logo from './logo_white.svg'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {showMenu} from '../../actions/actions'

class Header extends Component {
    render() {
        return (
            <div className='container-fluid header'>
                <div className=''>
                    <div className="row">
                        <div className='col-3 logo-container'>
                            <Link to='/'>
                                <img src={logo} alt='logo' className='logoImg ml-lg-5 ml-sm-2 ml-1'/>
                            </Link>
                        </div>
                        <div className='col-4'>
                            <div className="row middle-sec-header ml-3">
                                <span className='mt-3'>Berlin City Hall | Events and Tickets</span>
                                <div className="w-100"> </div>
                                <span className='text-uppercase '>
                                <Link to='/login' className='link'> LOGIN </Link>
                                <Link to='/de' className='link'> DE </Link>
                                <Link to='/ru' className='link'> RU </Link>
                            </span>
                            </div>
                        </div>
                        <div className='col-4 mt-3'>
                            <div className="row justify-content-end align-content-stretch">
                                <div className="col-12 d-flex justify-content-end social">
                                    <i className="fa fa-youtube m-1 social-icon"> </i>
                                    <i className="fa fa-facebook-square m-1 social-icon"> </i>
                                    <i className="fa fa-twitter m-1 social-icon"> </i>
                                    <i className="fa fa-instagram m-1 social-icon"> </i>
                                    <i className="fa fa-odnoklassniki m-1 social-icon"> </i>
                                    <i className="fa fa-rss m-1 social-icon"> </i>
                                </div>
                                <div className="w-100"> </div>
                                <span className="menu" onClick={this.props.showMenu}>
                                <div className="menu-line"> </div>
                                <div className="menu-line"> </div>
                                <div className="menu-line"> </div>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        menuIsShown: state.menuIsShown
    }
};

const mapDispatchToProps = {
    showMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);