import React, {Component} from "react";
import './spinner.css';
import spinner from './Double Ring-2s-131px.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className='row justify-content-center align-content-start'>
                <img src={spinner} alt='loading'/>
                <div className="w-100"> </div>
                <h3 className='loading-indicator'>Loading...</h3>
            </div>
        );
    }
}