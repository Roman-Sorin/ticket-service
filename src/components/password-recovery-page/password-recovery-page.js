import React, {Component} from "react";
import './password-recovery-page.css';
import Link from "react-router-dom/es/Link";
import TicketService from "../../services/ticket-service";
import {setPassRecoveryLoading, passRecoveryError, setPassRecoverySuccess} from "../../actions/actions";
import {connect} from "react-redux";
import Spinner from "../spinner/spinner";

class PasswordRecoveryPage extends Component {

    ticketService = new TicketService();

    clearInput = (input) => {
        input.value = '';
    };

    componentWillUnmount() {
        this.props.passRecoveryError(false, "");
        this.props.setPassRecoverySuccess(false);
    }

    render() {

        let {passRecovery, setPassRecoveryLoading, passRecoveryError, setPassRecoverySuccess} = this.props;

        if (passRecovery.loading) {
            return <Spinner/>
        }

        if (passRecovery.success) {
            return (<div className='row w-100  justify-content-center'>
                    <div className='col-md-5 col-12 d-flex justify-content-center'>
                        <p className='fl-login red-text text-center'>We sent to you new password. Check your email</p>
                    </div>
                    <div className="w-100"/>
                    <Link to={'/'}>
                        <button className='form-btn w-100 px-3' type="button"> Return to main
                        </button>
                    </Link>
                </div>
            )
        }

        if (passRecovery.error) {
            return (<div className='row w-100  justify-content-center'>
                    <div className='col-md-5 col-12 d-flex justify-content-center'>
                        <p className='fl-login red-text text-center'>{passRecovery.errorMsg}</p>
                    </div>
                    <div className="w-100"/>
                    <Link to={'/'}>
                        <button className='form-btn w-100 px-3' type="button"> Return to main
                        </button>
                    </Link>
                </div>
            )
        }

        return (
            <div className='row w-100  justify-content-center'>
                <div className='col-12 d-flex justify-content-center'>
                    <Link to='/recovery' className='link f40'>RECOVERY PASSWORD</Link>
                </div>
                <div className="col-md-5 col-12  mt-5">
                    <p className='fl-login red-text text-center'>We will send new password on your email.</p>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setPassRecoveryLoading(true);
                        this.ticketService.passRecovery(this.refs["inputLogin"].value)
                            .then(() => {
                                setPassRecoveryLoading(false);
                                setPassRecoverySuccess(true);
                            })
                            .catch((error) => {
                                passRecoveryError(true, error.message);
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
                        <button className='form-btn w-100' type="submit"> Recover password
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        passRecovery: state.passRecovery
    }
};

const mapDispatchToProps = {
    setPassRecoveryLoading, passRecoveryError, setPassRecoverySuccess
};


export default connect(mapStateToProps, mapDispatchToProps)(PasswordRecoveryPage);