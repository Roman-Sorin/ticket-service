import React, {Component} from "react";
import './error-indicator.css'
import error from "./error-icon.png";

export default class ErrorIndicator extends Component {
    render() {
        return (
            <div className='row justify-content-center border rounded mt-3 p-2'>
                <img src={error} alt='error' width='100' height='100'/>
                <div className="w-100"> </div>
                <h4 className='loading-indicator text-center font-weight-bold malinoVbli mt-3'>Error!</h4>
                <div className="w-100"> </div>
                <h6>Please check your Internet.</h6>
                <div className="w-100"> </div>
                <h6>And update this page.</h6>
            </div>
        );
    }
}