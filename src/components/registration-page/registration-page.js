import React, {Component} from "react";
import './registration-page.css'
import Link from "react-router-dom/es/Link";
import TicketService from "../../services/ticket-service";
import success from './042-priority.png';
import {
    registrationSetResult,
    registrationChangeStatus,
    registrationSetErrorMsg,
    setEmail,
    registrationChangeLoading, authChangeLoading, authSetStatus, authSetErrorMsg
} from "../../actions/actions";
import {connect} from "react-redux";
import failure from "./026-complain.png";
import Spinner from "../spinner/spinner";

class RegistrationPage extends Component {

    ticketService = new TicketService();

    flag = true;

    showPass = (input) => {
        input.type = this.flag ? 'text' : 'password';
        this.flag = !this.flag
    };

    render() {

        if (this.props.registrationLoading &&
            (this.props.registrationResult !== 'ok' || this.props.registrationResult !== 'error registration')) {
            return <Spinner/>
        }

        if (this.props.registrationResult === 'ok') {
            return (
                <div className='row justify-content-center'>
                    <p className='fl-login f35 text-center'>Registration user: <br/> <span
                        className='yellow-text-bold'>{this.props.email}</span> <br/> was successful. <br/>Check your
                        e-mail and confirm registration. </p>
                    <div className="w-100"/>
                    <img src={success} alt='successful' width='64' height='64'/>
                    <div className="w-100"/>
                    <Link to='/events' className='link-no-style'>
                        <div className='form-btn mb-4 px-5'> Return
                        </div>
                    </Link>
                </div>
            );
        }

        if (this.props.registrationResult === 'error registration') {
            return (
                <div className='row justify-content-center'>
                    <p className='fl-login f35 text-center'>Something went wrong! <br/> Try
                        again. <br/> <span className='red-text f18'>{this.props.registrationErrorMsg}</span></p>
                    <div className="w-100"/>
                    <img src={failure} alt='failure' width='64' height='64' className='mb-4'/>
                    <div className="w-100"/>
                    <Link to='/registration' className='link-no-style'
                          onClick={() => {
                              this.props.registrationChangeStatus();
                          }
                          }>
                        <div className='form-btn mb-4 px-5'> Return to registration
                        </div>
                    </Link>
                </div>
            );
        }

        return (
            <div className='row w-100'>
                <div className='col-12 d-flex justify-content-center'>
                    <Link to='/registration' className='link f40'>REGISTRATION</Link>
                </div>
                <form method='POST' onSubmit={
                    (e) => {
                        this.props.registrationChangeLoading();

                        e.preventDefault();
                        let email = this.refs.inputLogin.value;
                        let firstName = this.refs.name.value;
                        let gender = this.refs.gender.value;
                        let lastName = this.refs.surname.value;
                        let password = this.refs.inputPassword1.value;
                        let phoneNumber = this.refs.phone1.value;

                        this.ticketService.registration(gender, firstName,
                            lastName, email, password, phoneNumber)
                            .then(() => {
                                this.props.registrationChangeLoading();
                                console.log('registration fulfill then ');
                                this.props.setEmail(email);
                                this.props.registrationSetResult('ok');
                            })
                            .catch((error) => {
                                this.props.registrationChangeLoading();
                                console.log('registration reject catch ');
                                this.props.registrationSetResult('error registration');
                                this.props.registrationSetErrorMsg(error.message);
                            });
                    }
                }>
                    <div className="row justify-content-start registration-page w-100">
                        <div className="col-6">
                            <div className='row'>
                                <div className='col-12'>
                                    <p className='fl-login'>Salutation and address</p>
                                    <div className="input-group input-reg">
                                        <select required ref='gender'
                                                className="custom-select form-control form-control-reg">
                                            <option value="1">Mr.</option>
                                            <option value="2">Mrs.</option>
                                        </select>
                                    </div>
                                    <div className="input-group input-reg">
                                        <input required ref='name' type="text"
                                               className="form-control form-control-reg"
                                               placeholder="Name*"
                                               aria-label="Name" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group input-reg">
                                        <input required ref='surname' type="text"
                                               className="form-control form-control-reg"
                                               placeholder="Surname*"
                                               aria-label="Surname" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group input-reg">
                                        <input ref='company' type="text" className="form-control form-control-reg"
                                               placeholder="Company"
                                               aria-label="Company" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group input-reg">
                                        <input ref='street' type="text" className="form-control form-control-reg"
                                               placeholder="Street"
                                               aria-label="Street" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group input-reg">
                                        <input ref='house' type="text" className="form-control form-control-reg"
                                               placeholder="House"
                                               aria-label="House" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group input-reg">
                                        <input ref='additional' type="text"
                                               className="form-control form-control-reg"
                                               placeholder="Additional info"
                                               aria-label="additional" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group input-reg">
                                        <input ref='postcode' type="text" className="form-control form-control-reg"
                                               placeholder="Postcode"
                                               aria-label="postcode" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group input-reg">
                                        <input ref='city' type="text" className="form-control form-control-reg"
                                               placeholder="City"
                                               aria-label="city" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group input-reg">
                                        <input ref='country' type="text" className="form-control form-control-reg"
                                               placeholder="Country"
                                               aria-label="country" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <p className='fl-login'>Contact information</p>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className="input-group input-reg">
                                        <input required ref='inputLogin' type="email"
                                               className="form-control form-control-reg"
                                               pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                               title='"Email format is incorrect"'
                                               placeholder="Email*"
                                               aria-label="Email" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group input-reg">
                                        <input required ref='inputPassword1' type="password"
                                               className="form-control form-control-reg"
                                               pattern="[0-9a-zA-Z!@#$%^&*]{8,25}"
                                               title='Password length should be between 8 and 25 characters'
                                               placeholder="Password*"
                                               aria-label="Password" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <i className={this.flag ? "fa fa-eye remove-btn show-pass-btn" :
                                                "fa fa-eye-slash remove-btn show-pass-btn"}
                                               onClick={(e) => {
                                                   this.showPass(this.refs["inputPassword1"]);
                                                   e.target.className = this.flag ? "fa fa-eye remove-btn show-pass-btn" :
                                                       "fa fa-eye-slash remove-btn show-pass-btn"
                                               }}> </i>
                                        </div>
                                    </div>
                                    <div className="input-group input-reg">
                                        <input required ref='inputPassword2' type="password"
                                               className="form-control form-control-reg"
                                               pattern="[0-9a-zA-Z!@#$%^&*]{8,25}"
                                               title='Password length should be between 8 and 25 characters'
                                               placeholder="Confirm password*"
                                               aria-label="confirm" aria-describedby="basic-addon2"
                                               onBlur={() => {
                                                   if (this.refs.inputPassword1.value !== this.refs.inputPassword2.value) {
                                                       console.log("onBlur");
                                                       this.refs.inputPassword2.setCustomValidity("Passwords must be the same");
                                                   } else {
                                                       this.refs.inputPassword2.setCustomValidity("");
                                                   }
                                               }}/>
                                        <div className="input-group-append">
                                            <i className={this.flag ? "fa fa-eye remove-btn show-pass-btn" :
                                                "fa fa-eye-slash remove-btn show-pass-btn"}
                                               onClick={(e) => {
                                                   this.showPass(this.refs["inputPassword2"]);
                                                   e.target.className = this.flag ? "fa fa-eye remove-btn show-pass-btn" :
                                                       "fa fa-eye-slash remove-btn show-pass-btn"
                                               }}> </i>
                                        </div>
                                    </div>
                                    <div className="input-group input-reg">
                                        <input required ref='phone1' type="text"
                                               className="form-control form-control-reg"
                                               pattern="^[+][0-9]{6,17}"
                                               title="Phone number may contain only numeric characters, leading by '+'"
                                               placeholder="Phone number*"
                                               aria-label="Phone" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group input-reg mb-5">
                                        <input ref='phone2' type="text" className="form-control form-control-reg"
                                               placeholder="Additional phone number"
                                               aria-label="Phone" aria-describedby="basic-addon1"/>
                                    </div>
                                    <input required type="checkbox" id="c1" name="cc1" ref='checkbox1'
                                           title='This is required'/>
                                    <label htmlFor="c1" className='label-for-checkbox'><span> </span><i
                                        className='red-text'>*</i> I have read the
                                        notice
                                        on <Link to='terms' className='yellow-text' target="_blank">data
                                            protection </Link> and the content of the <Link target="_blank"
                                                                                            to='/terms'
                                                                                            className='yellow-text'>Standard
                                            Terms of Business </Link> and agree to the
                                        storage of my personal data.</label>

                                    <input type="checkbox" id="c2" name="cc2" ref='checkbox2'/>
                                    <label htmlFor="c2" className='label-for-checkbox'><span> </span>I agree to get
                                        notifications on my Email and phone </label>

                                    <div className='row justify-content-end'>
                                        <button type='submit' className='form-btn form-btn-short mt-5'> Register
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registrationStatus: state.registration.registrationStatus,
        registrationResult: state.registration.registrationResult,
        registrationErrorMsg: state.registration.registrationErrorMsg,
        email: state.email,
        registrationLoading: state.registration.registrationLoading
    }
};

const mapDispatchToProps = {
    registrationChangeStatus,
    registrationSetResult,
    registrationSetErrorMsg,
    setEmail,
    registrationChangeLoading, authChangeLoading,
    authSetStatus,
    authSetErrorMsg
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);