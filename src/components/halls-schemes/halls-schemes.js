import React, {Component} from "react";
import './halls-schemes.css'
import {Link} from "react-router-dom";
import hall_1 from './820-460 - 1.png'
import hall_2 from './003.png'

export default class HallsSchemes extends Component {
    render() {
        return (
            <div className='row halls-schemes w-100-wv'>
                <div className='col-12 d-flex justify-content-center '>
                    <Link to='/halls-schemes' className='link f40 mr-md-5'>HALLS SCHEMES</Link>
                </div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={hall_1} className="d-block w-100-wv" alt="hall 1"/>
                        </div>
                        <div className="carousel-item">
                            <img src={hall_2} className="d-block w-100-wv" alt="hall 2"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"> <i
                            className="fa fa-chevron-left"> </i></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon mr-5" aria-hidden="true"><i
                            className="fa fa-chevron-right"> </i> </span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}