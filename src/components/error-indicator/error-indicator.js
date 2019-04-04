import React, {Component} from "react";
import './error-indicator.css'
import error from "./error-icon.png";

export default class ErrorIndicator extends Component {
    render() {
        return (
            <div className='row justify-content-center border rounded mt-3 p-2 w-100-wv'>
                <img src={error} alt='error' width='100' height='100'/>
                <div className="w-100"/>
                <h4 className='loading-indicator text-center font-weight-bold malinoVbli mt-3'>Error!</h4>
                <div className="w-100"/>
                <h6>Please check your Internet.</h6>
                <div className="w-100"/>
                <h6>And update this page.</h6>
            </div>
        );
    }
}