import React, {Component} from "react";
import './login-page.css'
import Link from "react-router-dom/es/Link";
import {connect} from 'react-redux';
import {
    authChangeLoading,
    authSetStatus,
    authSetErrorMsg,
    setToken,
    setEmail
} from "../../actions/actions";
import TicketService from "../../services/ticket-service";
import Spinner from "../spinner/spinner";
import success from "./040-protection.png";
import failure from "../registration-page/026-complain.png";

class LoginPage extends Component {

    ticketService = new TicketService();

    clearInput = (input) => {
        input.value = '';
    };

    render() {

        if (this.props.authLoading) {
            return <Spinner/>
        }

        if (this.props.authResult === 'ok' || this.props.token.length > 0) {
            return (
                <div className='row justify-content-center'>
                    <p className='fl-login f35 text-center'>Login user: <br/> <span
                        className='yellow-text-bold'>{this.props.email}</span></p>
                    <div className="w-100"/>
                    <img src={success} alt='successful' width='64' height='64'/>
                    <div className="w-100"/>
                    <Link to='/events' className='link-no-style'>
                        <div className='form-btn mb-4 px-5 mt-4'> Return to main
                        </div>
                    </Link>
                    <div className="w-100"/>
                    <Link to='/login' className='link-no-style'
                          onClick={() => {
                              this.props.setEmail('');
                              this.props.setToken('');
                              this.props.authSetStatus('');
                          }
                          }>
                        <div className='form-btn mb-4 px-5'> Logout
                        </div>
                    </Link>
                </div>
            );
        }

        if (this.props.authResult === 'error auth') {
            return (
                <div className='row justify-content-center'>
                    <p className='fl-login f35 text-center'>Something went wrong! <br/> Try
                        again. <br/> <span className='red-text f18'>{this.props.authErrorMsg}</span></p>
                    <div className="w-100"/>
                    <img src={failure} alt='failure' width='64' height='64' className='mb-4'/>
                    <div className="w-100"/>
                    <Link to='/login' className='link-no-style'
                          onClick={() => {
                              this.props.authSetStatus('');
                          }
                          }>
                        <div className='form-btn mb-4 px-5'> Return to login
                        </div>
                    </Link>
                </div>
            );
        }

        return (
            <div className='row w-100 justify-content-center'>
                <div className='col-12 d-flex justify-content-center'>
                    <Link to='/login' className='link f40'>LOGIN</Link>
                </div>
                <div className="row justify-content-md-start justify-content-center login-page">
                    <div className="col-md-6 col-12">
                        <p className='fl-login text-center text-md-left'>I am already a customer</p>
                        <div className='row'>
                            <div className='col-md-8 col-12'>
                                <form onSubmit={
                                    (e) => {

                                        e.preventDefault();
                                        this.props.authChangeLoading();
                                        let email = this.refs.inputLogin.value;
                                        let password = this.refs.inputPassword.value;

                                        this.ticketService.login(email, password)
                                            .then((token) => {
                                                this.props.authChangeLoading();
                                                this.props.authSetStatus('ok');
                                                this.props.setEmail(email);
                                                this.props.setToken(token);
                                            })
                                            .catch((error) => {
                                                this.props.authChangeLoading();
                                                this.props.authSetStatus('error auth');
                                                this.props.authSetErrorMsg(error.message);
                                            })
                                    }
                                }>
                                    <div className="input-group">
                                        <input required ref='inputLogin' type="email" className="form-control"
                                               placeholder="Email"
                                               pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                               title='"Email format is incorrect"'
                                               aria-label="Email" aria-describedby="basic-addon1"/>
                                        <div className="input-group-append">
                                            <i className="fa fa-times remove-btn"
                                               onClick={() => {
                                                   this.clearInput(this.refs["inputLogin"]);
                                               }}> </i>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <input required ref='inputPassword' type="password" className="form-control"
                                               placeholder="Password"
                                               pattern="[0-9a-zA-Z!@#$%^&*]{8,25}"
                                               title='Password length should be between 8 and 25 characters'
                                               aria-label="Password" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <i className="fa fa-times remove-btn"
                                               onClick={() => {
                                                   this.clearInput(this.refs["inputPassword"]);
                                               }}> </i>
                                        </div>
                                    </div>
                                    <Link to='/recovery' className='yellow-text'><p
                                        className='forgotPass'>Forgotten
                                        password?</p></Link>
                                    <button className='form-btn w-100' type="submit"> Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className='fl-login mt-5 mt-md-0 text-center text-md-left'>New customer</p>
                        <div className='row'>
                            <div className='col-12'>
                                <Link to='/registration' className='link-no-style '>
                                    <button className='form-btn mb-4 w-100'> Register
                                    </button>
                                </Link>
                                <div className="w-100"/>
                                <button className='form-btn w-100'> Login
                                    with invitation code
                                </button>
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
        authLoading: state.auth.authLoading,
        authResult: state.auth.authResult,
        authErrorMsg: state.auth.authErrorMsg,
        token: state.token,
        email: state.email
    }
};

const mapDispatchToProps = {
    authChangeLoading,
    authSetStatus,
    authSetErrorMsg,
    setToken,
    setEmail
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);