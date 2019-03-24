import React, {Component} from "react";
import './prices.css'
import {} from "../../actions/actions";
import {connect} from "react-redux";
import Spinner from "../spinner/spinner";

class Prices extends Component {

    priceRowRender = (arr) => {
        return arr.map(
            (item, index) => {

                let style = {background: item.color};
                return (
                    <div key={index} style={style}>
                        <span className='ml-2'>€{item.price}</span>
                    </div>
                );
            }
        )
    };

    render() {

        if(this.props.event.hall === 1){
            let {priceRanges} = this.props;
            if (priceRanges.length === 0) {
                return <Spinner/>
            }

            return (
                <div className='mb-4 price-font'>
                    <div>Price range:</div>
                    {this.priceRowRender(priceRanges)}
                </div>
            );
        }

        if(this.props.event.hall === 2){
            let {priceRanges2} = this.props;
            if (priceRanges2.length === 0) {
                return <Spinner/>
            }

            return (
                <div className='mb-4 price-font'>
                    <div>Price range:</div>
                    {this.priceRowRender(priceRanges2)}
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.event,
        priceRanges: state.hallStructureForEvent.priceRanges,
        priceRanges2: state.hallStructure2ForEvent.priceRanges,
    }

};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Prices);