import React, {Component} from "react";
import './place.css'
import {
    hallStructureError,
    hallStructureRequest,
    seatsInCartAdd,
    seatsInCartRemove,
    setHallStructure
} from "../../actions/actions";
import {connect} from "react-redux";

class Place extends Component {

    isLocked = (arr, row, seat) => {
        let isRow = arr.findIndex((item) => {
            return item.row === row;
        });
        if (isRow === -1) {
            return false;
        }
        let index = arr[isRow].seats.findIndex((item) => {
            return item === seat;
        });
        return index >= 0;
    };
    isActive = (arr, row, seat) => {
        let index = arr.findIndex(
            (item) => {
                return item.row === row && item.seat === seat
            });
        return index >= 0;
    };
    ticketPrice = (arr, row) => {
        let obj;
        for (let i = 0; i < arr.length; i++) {

            let tmpRow = arr[i].rows.find((item) => {
                return item === row;
            });

            if (tmpRow) {
                obj = arr[i];
                break;
            }
        }
        return obj.price;
    };

    render() {
        let {row, seat, place, event} = this.props;

        if (event.hall === 1) {
            return (
                <span className={
                    this.isLocked(this.props.hallStructureForEvent.lockedSeats, row, seat) ? 'hall-place locked' :
                        this.isActive(this.props.seatsInCart, row, seat) ? 'hall-place checked' : 'hall-place'}
                      onClick={() => {
                          if (this.isActive(this.props.seatsInCart, row, seat)) {
                              this.props.seatsInCartRemove(row, seat, this.ticketPrice(this.props.hallStructureForEvent.priceRanges, row));
                          } else {
                              this.props.seatsInCartAdd(row, seat, this.ticketPrice(this.props.hallStructureForEvent.priceRanges, row));
                          }
                      }}>{place}
                </span>
            );
        }

        if (event.hall === 2) {
            return (
                <span className={
                    this.isLocked(this.props.hallStructure2ForEvent.lockedSeats, row, seat) ? 'hall-2-place locked' :
                        this.isActive(this.props.seatsInCart, row, seat) ? 'hall-2-place checked' : 'hall-2-place'}
                      onClick={() => {
                          if (this.isActive(this.props.seatsInCart, row, seat)) {
                              this.props.seatsInCartRemove(row, seat, this.ticketPrice(this.props.hallStructure2ForEvent.priceRanges, row));
                          } else {
                              this.props.seatsInCartAdd(row, seat, this.ticketPrice(this.props.hallStructure2ForEvent.priceRanges, row));
                          }
                      }}>{place}
                </span>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        seatsInCart: state.seatsInCart,
        event: state.event,
        hallStructureForEvent: state.hallStructureForEvent,
        hallStructure2ForEvent: state.hallStructure2ForEvent
    }
};

const mapDispatchToProps = {
    seatsInCartAdd, seatsInCartRemove, setHallStructure, hallStructureRequest, hallStructureError
};

export default connect(mapStateToProps, mapDispatchToProps)(Place);


