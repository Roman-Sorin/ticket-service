import React, {Component} from "react";
import './email-confirmation-page.css';
import TicketService from "../../services/ticket-service";
import Link from "react-router-dom/es/Link";
import Spinner from "../spinner/spinner";

class EmailConfirmationPage extends Component {

    state = {
        loading: false,
        error: false
    };

    ticketService = new TicketService();

    componentDidMount() {
        this.setState({
            loading: true,
            error: false,
        });

        this.ticketService.emailConfirm(this.props.hash)
            .then(() => {
                this.setState({
                    loading: false,
                    error: false,
                })
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    error: true,
                })
            })
    }

    render() {

        if (this.state.loading) {
            return <Spinner/>
        }

        if (this.state.error) {
            return (
                <div>
                    <h2>Wrong email confirmation</h2>
                    <Link to='/' className='link-no-style'>
                        <div className='form-btn mb-4 px-5 mt-4'> Go to main
                        </div>
                    </Link>
                </div>
            );
        }

        return (
            <div>
                <h1>Your email is confirmed</h1>
                <Link to='/login' className='link-no-style'>
                    <div className='form-btn mb-4 px-5 mt-4'> Go to login
                    </div>
                </Link>
            </div>
        );
    }
}

export default EmailConfirmationPage;