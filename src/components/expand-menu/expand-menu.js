import React, {Component} from "react";
import './expand-menu.css'
import {Link} from "react-router-dom";
import logo from "../header/logo_white.svg";
import '../header/header.css'
import {hideMenu} from "../../actions/actions";
import {connect} from "react-redux";

class ExtendMenu extends Component {

    state = {
        animatedClass: ''
    };

    componentDidMount() {
        setTimeout(() => this.setState({
            animatedClass: 'animated'
        }), 0);
    }

    render() {

        let clas = `container-fluid fixed-top extendMenu text-white ${this.state.animatedClass}`;

        return (
            <div className={clas}>
                <div className="container">
                    <div className="row">
                        <div className="col-3 mt-5">
                            <Link to='/'><img src={logo} alt='logo' className='mr-5' onClick={this.props.hideMenu}/></Link>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <span className='mt-3'>Berlin City Hall | Events and Tickets</span>
                            </div>
                            <div className="row socialIconsExpMenu mt-3">
                                <i className="fa fa-youtube m-2 social-icon"> </i>
                                <i className="fa fa-facebook-square m-2 social-icon"> </i>
                                <i className="fa fa-twitter m-2 social-icon"> </i>
                                <i className="fa fa-instagram m-2 social-icon"> </i>
                                <i className="fa fa-odnoklassniki m-2 social-icon"> </i>
                                <i className="fa fa-rss m-2 social-icon"> </i>
                            </div>
                            <div className="w-100"> </div>
                            <div className="row">
                                <span className='mt-3 adress'>Berlin City Hall
                                    <br/> Freudstasse 69, 10117 Berlin
                                    <br/> Tel.: 030 2223344
                                    <br/> Fax.: 030 2223355
                                    <br/> Email: info@bch.de
                                </span>


                            </div>
                        </div>
                        <div className="col-2">
                            <div className="row">
                                <ul className='menuList text-white mt-5'>
                                    <li className='mb-2'><Link to='/login' className='menuListItem'
                                                               onClick={this.props.hideMenu}>LOGIN/OUT</Link>
                                    </li>
                                    <li className='mb-2'><Link to='/events' className='menuListItem'
                                                               onClick={this.props.hideMenu}>EVENTS</Link></li>
                                    <li className='mb-2'><Link to='/shopping-cart' className='menuListItem'
                                                               onClick={this.props.hideMenu}>SHOPPING CART</Link>
                                    </li>
                                    <li className='mb-2'><Link to='/halls-schemes' className='menuListItem'
                                                               onClick={this.props.hideMenu}>HALLS
                                        SCHEME</Link></li>
                                    <li className='mb-2'><Link to='/about' className='menuListItem'
                                                               onClick={this.props.hideMenu}>ABOUT US</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-1 mt-5">
                            <i className="fa fa-times cross" onClick={this.props.hideMenu}> </i>
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
    hideMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(ExtendMenu);