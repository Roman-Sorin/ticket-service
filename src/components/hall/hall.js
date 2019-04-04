import React, {Component} from "react";
import './hall.css';
import {
    seatsInCartAdd,
    seatsInCartRemove,
    setHallStructure,
    hallStructureRequest,
    hallStructureError,
    setHallStructure2,
    hallStructure2Request,
    hallStructure2Error
} from '../../actions/actions';
import {connect} from "react-redux";
import TicketService from "../../services/ticket-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import Place from "../place/place"

class Hall extends Component {

    ticketService = new TicketService();

    flag = true;

    componentDidMount() {
        if (this.props.event.hall === 1) {
            this.props.hallStructureRequest();
            this.ticketService.getHallStructureByEventId(this.props.event.eventId)
                .then(
                    (data) => {
                        this.props.setHallStructure(data.priceRanges, data.lockedSeats);
                    }
                ).catch(
                (error) => {
                    console.log('ERROR');
                    this.props.hallStructureError(error)
                }
            )
        }

        if (this.props.event.hall === 0) {
            this.props.hallStructure2Request();
            this.ticketService.getHallStructureByEventId(this.props.event.eventId)
                .then(
                    (data) => {
                        this.props.setHallStructure2(data.priceRanges, data.lockedSeats);
                    }
                ).catch(
                (error) => {
                    console.log('ERROR');
                    this.props.hallStructure2Error(error)
                }
            )
        }

    }

    rowColor = (arr, row) => {
        let obj;
        for (let i = 0; i < arr.length; i++) {
            let tmpRow = arr[i].rows.find((item) => {
                return +item === row;
            });
            if (tmpRow) {
                obj = arr[i];
                return obj.color;
            }
        }
    };

    ticketPrice = (arr, row) => {
        let obj;
        for (let i = 0; i < arr.length; i++) {
            let tmpRow = arr[i].rows.find((item) => {
                return +item === row;
            });
            if (tmpRow) {
                obj = arr[i];
                return obj.price;
            }
        }
    };

    render() {
        let {hall, hallStructureForEvent, hallStructure2ForEvent} = this.props;


        if (hall === 1) {
            if (hallStructureForEvent.hallStructureLoading) {
                return <Spinner/>
            }

            if (hallStructureForEvent.hallStructureError) {
                return <ErrorIndicator/>
            }

            return (
                <div className='row justify-content-center w-100-wv'>
                    <p className='fl-hall'>BUNHE</p>
                    <div className='d-flex justify-content-between w-100-wv title-hall-row row'>
                        <span className='natau'>Natausgang</span>
                        <span className='natau'>Natausgang</span>
                        <div className="w-100"/>
                        <div className='hall1 col-12 w-100-wv'>
                            <div className='row justify-content-center w-100-wv'>
                                <p className='hall-row'
                                   style={{background: this.rowColor(hallStructureForEvent.priceRanges, 1)}}>
                                    <Place row={1} seat={'1L'} place={1}/>
                                    <Place row={1} seat={'2L'} place={2}/>
                                    <Place row={1} seat={'3L'} place={3}/>
                                    <Place row={1} seat={'4L'} place={4}/>
                                    <Place row={1} seat={'5L'} place={5}/>
                                    <Place row={1} seat={'6L'} place={6}/>
                                    <Place row={1} seat={'7L'} place={7}/>
                                    <Place row={1} seat={'8L'} place={8}/>
                                    <Place row={1} seat={'9L'} place={9}/>
                                    <Place row={1} seat={'8R'} place={8}/>
                                    <Place row={1} seat={'7R'} place={7}/>
                                    <Place row={1} seat={'6R'} place={6}/>
                                    <Place row={1} seat={'5R'} place={5}/>
                                    <Place row={1} seat={'4R'} place={4}/>
                                    <Place row={1} seat={'3R'} place={3}/>
                                    <Place row={1} seat={'2R'} place={2}/>
                                    <Place row={1} seat={'1R'} place={1}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-row'}
                                   style={{background: this.rowColor(hallStructureForEvent.priceRanges, 2)}}>
                                    <Place row={2} seat={'1L'} place={1}/>
                                    <Place row={2} seat={'2L'} place={2}/>
                                    <Place row={2} seat={'3L'} place={3}/>
                                    <Place row={2} seat={'4L'} place={4}/>
                                    <Place row={2} seat={'5L'} place={5}/>
                                    <Place row={2} seat={'6L'} place={6}/>
                                    <Place row={2} seat={'7L'} place={7}/>
                                    <Place row={2} seat={'8L'} place={8}/>
                                    <Place row={2} seat={'9L'} place={9}/>
                                    <Place row={2} seat={'9R'} place={9}/>
                                    <Place row={2} seat={'8R'} place={8}/>
                                    <Place row={2} seat={'7R'} place={7}/>
                                    <Place row={2} seat={'6R'} place={6}/>
                                    <Place row={2} seat={'5R'} place={5}/>
                                    <Place row={2} seat={'4R'} place={4}/>
                                    <Place row={2} seat={'3R'} place={3}/>
                                    <Place row={2} seat={'2R'} place={2}/>
                                    <Place row={2} seat={'1R'} place={1}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-row'}
                                   style={{background: this.rowColor(hallStructureForEvent.priceRanges, 3)}}>
                                    <Place row={3} seat={'1L'} place={1}/>
                                    <Place row={3} seat={'2L'} place={2}/>
                                    <Place row={3} seat={'3L'} place={3}/>
                                    <Place row={3} seat={'4L'} place={4}/>
                                    <Place row={3} seat={'5L'} place={5}/>
                                    <Place row={3} seat={'6L'} place={6}/>
                                    <Place row={3} seat={'7L'} place={7}/>
                                    <Place row={3} seat={'8L'} place={8}/>
                                    <Place row={3} seat={'9L'} place={9}/>
                                    <Place row={3} seat={'10L'} place={10}/>
                                    <Place row={3} seat={'9R'} place={9}/>
                                    <Place row={3} seat={'8R'} place={8}/>
                                    <Place row={3} seat={'7R'} place={7}/>
                                    <Place row={3} seat={'6R'} place={6}/>
                                    <Place row={3} seat={'5R'} place={5}/>
                                    <Place row={3} seat={'4R'} place={4}/>
                                    <Place row={3} seat={'3R'} place={3}/>
                                    <Place row={3} seat={'2R'} place={2}/>
                                    <Place row={3} seat={'1R'} place={1}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-row'}
                                   style={{background: this.rowColor(hallStructureForEvent.priceRanges, 4)}}>
                                    <Place row={4} seat={'1L'} place={1}/>
                                    <Place row={4} seat={'2L'} place={2}/>
                                    <Place row={4} seat={'3L'} place={3}/>
                                    <Place row={4} seat={'4L'} place={4}/>
                                    <Place row={4} seat={'5L'} place={5}/>
                                    <Place row={4} seat={'6L'} place={6}/>
                                    <Place row={4} seat={'7L'} place={7}/>
                                    <Place row={4} seat={'8L'} place={8}/>
                                    <Place row={4} seat={'9L'} place={9}/>
                                    <Place row={4} seat={'10L'} place={10}/>
                                    <Place row={4} seat={'10R'} place={10}/>
                                    <Place row={4} seat={'9R'} place={9}/>
                                    <Place row={4} seat={'8R'} place={8}/>
                                    <Place row={4} seat={'7R'} place={7}/>
                                    <Place row={4} seat={'6R'} place={6}/>
                                    <Place row={4} seat={'5R'} place={5}/>
                                    <Place row={4} seat={'4R'} place={4}/>
                                    <Place row={4} seat={'3R'} place={3}/>
                                    <Place row={4} seat={'2R'} place={2}/>
                                    <Place row={4} seat={'1R'} place={1}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-row'}
                                   style={{background: this.rowColor(hallStructureForEvent.priceRanges, 5)}}>
                                    <Place row={5} seat={'1L'} place={1}/>
                                    <Place row={5} seat={'2L'} place={2}/>
                                    <Place row={5} seat={'3L'} place={3}/>
                                    <Place row={5} seat={'4L'} place={4}/>
                                    <Place row={5} seat={'5L'} place={5}/>
                                    <Place row={5} seat={'6L'} place={6}/>
                                    <Place row={5} seat={'7L'} place={7}/>
                                    <Place row={5} seat={'8L'} place={8}/>
                                    <Place row={5} seat={'9L'} place={9}/>
                                    <Place row={5} seat={'10L'} place={10}/>
                                    <Place row={5} seat={'11L'} place={11}/>
                                    <Place row={5} seat={'10R'} place={10}/>
                                    <Place row={5} seat={'9R'} place={9}/>
                                    <Place row={5} seat={'8R'} place={8}/>
                                    <Place row={5} seat={'7R'} place={7}/>
                                    <Place row={5} seat={'6R'} place={6}/>
                                    <Place row={5} seat={'5R'} place={5}/>
                                    <Place row={5} seat={'4R'} place={4}/>
                                    <Place row={5} seat={'3R'} place={3}/>
                                    <Place row={5} seat={'2R'} place={2}/>
                                    <Place row={5} seat={'1R'} place={1}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-row'}
                                   style={{background: this.rowColor(hallStructureForEvent.priceRanges, 6)}}>
                                    <Place row={6} seat={'1L'} place={1}/>
                                    <Place row={6} seat={'2L'} place={2}/>
                                    <Place row={6} seat={'3L'} place={3}/>
                                    <Place row={6} seat={'4L'} place={4}/>
                                    <Place row={6} seat={'5L'} place={5}/>
                                    <Place row={6} seat={'6L'} place={6}/>
                                    <Place row={6} seat={'7L'} place={7}/>
                                    <Place row={6} seat={'8L'} place={8}/>
                                    <Place row={6} seat={'9L'} place={9}/>
                                    <Place row={6} seat={'10L'} place={10}/>
                                    <Place row={6} seat={'11L'} place={11}/>
                                    <Place row={6} seat={'11R'} place={11}/>
                                    <Place row={6} seat={'10R'} place={10}/>
                                    <Place row={6} seat={'9R'} place={9}/>
                                    <Place row={6} seat={'8R'} place={8}/>
                                    <Place row={6} seat={'7R'} place={7}/>
                                    <Place row={6} seat={'6R'} place={6}/>
                                    <Place row={6} seat={'5R'} place={5}/>
                                    <Place row={6} seat={'4R'} place={4}/>
                                    <Place row={6} seat={'3R'} place={3}/>
                                    <Place row={6} seat={'2R'} place={2}/>
                                    <Place row={6} seat={'1R'} place={1}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-row'}
                                   style={{background: this.rowColor(hallStructureForEvent.priceRanges, 7)}}>
                                    <Place row={7} seat={'1L'} place={1}/>
                                    <Place row={7} seat={'2L'} place={2}/>
                                    <Place row={7} seat={'3L'} place={3}/>
                                    <Place row={7} seat={'4L'} place={4}/>
                                    <Place row={7} seat={'5L'} place={5}/>
                                    <Place row={7} seat={'6L'} place={6}/>
                                    <Place row={7} seat={'7L'} place={7}/>
                                    <Place row={7} seat={'8L'} place={8}/>
                                    <Place row={7} seat={'9L'} place={9}/>
                                    <Place row={7} seat={'10L'} place={10}/>
                                    <Place row={7} seat={'11L'} place={11}/>
                                    <Place row={7} seat={'12L'} place={12}/>
                                    <Place row={7} seat={'11R'} place={11}/>
                                    <Place row={7} seat={'10R'} place={10}/>
                                    <Place row={7} seat={'9R'} place={9}/>
                                    <Place row={7} seat={'8R'} place={8}/>
                                    <Place row={7} seat={'7R'} place={7}/>
                                    <Place row={7} seat={'6R'} place={6}/>
                                    <Place row={7} seat={'5R'} place={5}/>
                                    <Place row={7} seat={'4R'} place={4}/>
                                    <Place row={7} seat={'3R'} place={3}/>
                                    <Place row={7} seat={'2R'} place={2}/>
                                    <Place row={7} seat={'1R'} place={1}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-row'}
                                   style={{background: this.rowColor(hallStructureForEvent.priceRanges, 8)}}>
                                    <Place row={8} seat={'1L'} place={1}/>
                                    <Place row={8} seat={'2L'} place={2}/>
                                    <Place row={8} seat={'3L'} place={3}/>
                                    <Place row={8} seat={'4L'} place={4}/>
                                    <Place row={8} seat={'5L'} place={5}/>
                                    <Place row={8} seat={'6L'} place={6}/>
                                    <Place row={8} seat={'7L'} place={7}/>
                                    <Place row={8} seat={'8L'} place={8}/>
                                    <Place row={8} seat={'9L'} place={9}/>
                                    <Place row={8} seat={'10L'} place={10}/>
                                    <Place row={8} seat={'11L'} place={11}/>
                                    <Place row={8} seat={'12L'} place={12}/>
                                    <Place row={8} seat={'12R'} place={12}/>
                                    <Place row={8} seat={'11R'} place={11}/>
                                    <Place row={8} seat={'10R'} place={10}/>
                                    <Place row={8} seat={'9R'} place={9}/>
                                    <Place row={8} seat={'8R'} place={8}/>
                                    <Place row={8} seat={'7R'} place={7}/>
                                    <Place row={8} seat={'6R'} place={6}/>
                                    <Place row={8} seat={'5R'} place={5}/>
                                    <Place row={8} seat={'4R'} place={4}/>
                                    <Place row={8} seat={'3R'} place={3}/>
                                    <Place row={8} seat={'2R'} place={2}/>
                                    <Place row={8} seat={'1R'} place={1}/>
                                </p>
                                <div className="w-100"/>
                                <p className={'hall-row'}
                                   style={{background: this.rowColor(hallStructureForEvent.priceRanges, 9)}}>
                                    <Place row={9} seat={'1L'} place={1}/>
                                    <Place row={9} seat={'2L'} place={2}/>
                                    <Place row={9} seat={'3L'} place={3}/>
                                    <Place row={9} seat={'4L'} place={4}/>
                                    <Place row={9} seat={'5L'} place={5}/>
                                    <Place row={9} seat={'6L'} place={6}/>
                                    <Place row={9} seat={'7L'} place={7}/>
                                    <Place row={9} seat={'8L'} place={8}/>
                                    <Place row={9} seat={'9L'} place={9}/>
                                    <Place row={9} seat={'10L'} place={10}/>
                                    <Place row={9} seat={'11L'} place={11}/>
                                    <Place row={9} seat={'12L'} place={12}/>
                                    <Place row={9} seat={'13L'} place={13}/>
                                    <Place row={9} seat={'12R'} place={12}/>
                                    <Place row={9} seat={'11R'} place={11}/>
                                    <Place row={9} seat={'10R'} place={10}/>
                                    <Place row={9} seat={'9R'} place={9}/>
                                    <Place row={9} seat={'8R'} place={8}/>
                                    <Place row={9} seat={'7R'} place={7}/>
                                    <Place row={9} seat={'6R'} place={6}/>
                                    <Place row={9} seat={'5R'} place={5}/>
                                    <Place row={9} seat={'4R'} place={4}/>
                                    <Place row={9} seat={'3R'} place={3}/>
                                    <Place row={9} seat={'2R'} place={2}/>
                                    <Place row={9} seat={'1R'} place={1}/>
                                </p>
                            </div>
                        </div>
                        <p className='hall-title'> KLEINER SAAL</p>
                        <span className='side-title'>Left side</span>
                        <span className='side-title'>Right side</span>
                        <div className="w-100"/>
                        <span className='natau'>Natausgang</span>
                        <span className='natau'>Natausgang</span>
                    </div>
                </div>
            );
        }

        if (hall === 0) {

            if (hallStructure2ForEvent.hallStructureLoading) {
                return <Spinner/>
            }

            if (hallStructure2ForEvent.hallStructureError) {
                return <ErrorIndicator/>
            }

            return (
                <div className='row justify-content-center'>
                    <p className='fl-hall'>BUNHE</p>
                    <div className='d-flex justify-content-between w-100 title-hall-row row min-width-600'>
                        <span className='natau'>Natausgang</span>
                        <span className='mid-title-hall-2'>Mittelparkett</span>
                        <span className='natau'>Natausgang</span>
                        <div className="w-100"/>

                        <div className='hall-2-container row justify-content-between w-100'>

                            <div className='col-3 hall-2-left-side'>
                                <div className="row justify-content-center">
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 1)}}>
                                        <Place row={1} seat={'1L'} place={1}/>
                                        <Place row={1} seat={'2L'} place={2}/>
                                        <Place row={1} seat={'3L'} place={3}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 2)}}>
                                        <Place row={2} seat={'1L'} place={1}/>
                                        <Place row={2} seat={'2L'} place={2}/>
                                        <Place row={2} seat={'3L'} place={3}/>
                                        <Place row={2} seat={'4L'} place={4}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 3)}}>
                                        <Place row={3} seat={'1L'} place={1}/>
                                        <Place row={3} seat={'2L'} place={2}/>
                                        <Place row={3} seat={'3L'} place={3}/>
                                        <Place row={3} seat={'4L'} place={4}/>
                                        <Place row={3} seat={'5L'} place={5}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 4)}}>
                                        <Place row={4} seat={'1L'} place={1}/>
                                        <Place row={4} seat={'2L'} place={2}/>
                                        <Place row={4} seat={'3L'} place={3}/>
                                        <Place row={4} seat={'4L'} place={4}/>
                                        <Place row={4} seat={'5L'} place={5}/>
                                        <Place row={4} seat={'6L'} place={6}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 5)}}>
                                        <Place row={5} seat={'1L'} place={1}/>
                                        <Place row={5} seat={'2L'} place={2}/>
                                        <Place row={5} seat={'3L'} place={3}/>
                                        <Place row={5} seat={'4L'} place={4}/>
                                        <Place row={5} seat={'5L'} place={5}/>
                                        <Place row={5} seat={'6L'} place={6}/>
                                        <Place row={5} seat={'7L'} place={7}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 6)}}>
                                        <Place row={6} seat={'1L'} place={1}/>
                                        <Place row={6} seat={'2L'} place={2}/>
                                        <Place row={6} seat={'3L'} place={3}/>
                                        <Place row={6} seat={'4L'} place={4}/>
                                        <Place row={6} seat={'5L'} place={5}/>
                                        <Place row={6} seat={'6L'} place={6}/>
                                        <Place row={6} seat={'7L'} place={7}/>
                                        <Place row={6} seat={'8L'} place={8}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 7)}}>
                                        <Place row={7} seat={'1L'} place={1}/>
                                        <Place row={7} seat={'2L'} place={2}/>
                                        <Place row={7} seat={'3L'} place={3}/>
                                        <Place row={7} seat={'4L'} place={4}/>
                                        <Place row={7} seat={'5L'} place={5}/>
                                        <Place row={7} seat={'6L'} place={6}/>
                                        <Place row={7} seat={'7L'} place={7}/>
                                        <Place row={7} seat={'8L'} place={8}/>
                                        <Place row={7} seat={'9L'} place={9}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 8)}}>
                                        <Place row={8} seat={'1L'} place={1}/>
                                        <Place row={8} seat={'2L'} place={2}/>
                                        <Place row={8} seat={'3L'} place={3}/>
                                        <Place row={8} seat={'4L'} place={4}/>
                                        <Place row={8} seat={'5L'} place={5}/>
                                        <Place row={8} seat={'6L'} place={6}/>
                                        <Place row={8} seat={'7L'} place={7}/>
                                        <Place row={8} seat={'8L'} place={8}/>
                                        <Place row={8} seat={'9L'} place={9}/>
                                        <Place row={8} seat={'10L'} place={10}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 9)}}>
                                        <Place row={9} seat={'1L'} place={1}/>
                                        <Place row={9} seat={'2L'} place={2}/>
                                        <Place row={9} seat={'3L'} place={3}/>
                                        <Place row={9} seat={'4L'} place={4}/>
                                        <Place row={9} seat={'5L'} place={5}/>
                                        <Place row={9} seat={'6L'} place={6}/>
                                        <Place row={9} seat={'7L'} place={7}/>
                                        <Place row={9} seat={'8L'} place={8}/>
                                        <Place row={9} seat={'9L'} place={9}/>
                                        <Place row={9} seat={'10L'} place={10}/>
                                    </p>
                                </div>

                                <div className="row justify-content-end left-bottom-side">
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 10)}}>
                                        <Place row={10} seat={'1L'} place={1}/>
                                        <Place row={10} seat={'2L'} place={2}/>
                                        <Place row={10} seat={'3L'} place={3}/>
                                        <Place row={10} seat={'4L'} place={4}/>
                                        <Place row={10} seat={'5L'} place={5}/>
                                        <Place row={10} seat={'6L'} place={6}/>
                                        <Place row={10} seat={'7L'} place={7}/>
                                        <Place row={10} seat={'8L'} place={8}/>
                                        <Place row={10} seat={'9L'} place={9}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 11)}}>
                                        <Place row={11} seat={'1L'} place={1}/>
                                        <Place row={11} seat={'2L'} place={2}/>
                                        <Place row={11} seat={'3L'} place={3}/>
                                        <Place row={11} seat={'4L'} place={4}/>
                                        <Place row={11} seat={'5L'} place={5}/>
                                        <Place row={11} seat={'6L'} place={6}/>
                                        <Place row={11} seat={'7L'} place={7}/>
                                        <Place row={11} seat={'8L'} place={8}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 12)}}>
                                        <Place row={12} seat={'1L'} place={1}/>
                                        <Place row={12} seat={'2L'} place={2}/>
                                        <Place row={12} seat={'3L'} place={3}/>
                                        <Place row={12} seat={'4L'} place={4}/>
                                        <Place row={12} seat={'5L'} place={5}/>
                                        <Place row={12} seat={'6L'} place={6}/>
                                        <Place row={12} seat={'7L'} place={7}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 13)}}>
                                        <Place row={13} seat={'1L'} place={1}/>
                                        <Place row={13} seat={'2L'} place={2}/>
                                        <Place row={13} seat={'3L'} place={3}/>
                                        <Place row={13} seat={'4L'} place={4}/>
                                        <Place row={13} seat={'5L'} place={5}/>
                                        <Place row={13} seat={'6L'} place={6}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 14)}}>
                                        <Place row={14} seat={'1L'} place={1}/>
                                        <Place row={14} seat={'2L'} place={2}/>
                                        <Place row={14} seat={'3L'} place={3}/>
                                        <Place row={14} seat={'4L'} place={4}/>
                                        <Place row={14} seat={'5L'} place={5}/>
                                    </p>
                                    <div className="w-100"/>
                                </div>
                            </div>

                            <div className='col-6 hall-2-center'>
                                <div className="row justify-content-center">
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 1)}}>
                                        <Place row={1} seat={'4L'} place={4}/>
                                        <Place row={1} seat={'5L'} place={5}/>
                                        <Place row={1} seat={'6L'} place={6}/>
                                        <Place row={1} seat={'7L'} place={7}/>
                                        <Place row={1} seat={'8L'} place={8}/>
                                        <Place row={1} seat={'9L'} place={9}/>
                                        <Place row={1} seat={'10L'} place={10}/>
                                        <Place row={1} seat={'11L'} place={11}/>
                                        <Place row={1} seat={'10R'} place={10}/>
                                        <Place row={1} seat={'9R'} place={9}/>
                                        <Place row={1} seat={'8R'} place={8}/>
                                        <Place row={1} seat={'7R'} place={7}/>
                                        <Place row={1} seat={'6R'} place={6}/>
                                        <Place row={1} seat={'5R'} place={5}/>
                                        <Place row={1} seat={'4R'} place={4}/>
                                    </p>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 2)}}>
                                        <Place row={2} seat={'5L'} place={5}/>
                                        <Place row={2} seat={'6L'} place={6}/>
                                        <Place row={2} seat={'7L'} place={7}/>
                                        <Place row={2} seat={'8L'} place={8}/>
                                        <Place row={2} seat={'9L'} place={9}/>
                                        <Place row={2} seat={'10L'} place={10}/>
                                        <Place row={2} seat={'11L'} place={11}/>
                                        <Place row={2} seat={'12L'} place={12}/>
                                        <Place row={2} seat={'12R'} place={12}/>
                                        <Place row={2} seat={'11R'} place={11}/>
                                        <Place row={2} seat={'10R'} place={10}/>
                                        <Place row={2} seat={'9R'} place={9}/>
                                        <Place row={2} seat={'8R'} place={8}/>
                                        <Place row={2} seat={'7R'} place={7}/>
                                        <Place row={2} seat={'6R'} place={6}/>
                                        <Place row={2} seat={'5R'} place={5}/>
                                    </p>

                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 3)}}>
                                        <Place row={3} seat={'6L'} place={6}/>
                                        <Place row={3} seat={'7L'} place={7}/>
                                        <Place row={3} seat={'8L'} place={8}/>
                                        <Place row={3} seat={'9L'} place={9}/>
                                        <Place row={3} seat={'10L'} place={10}/>
                                        <Place row={3} seat={'11L'} place={11}/>
                                        <Place row={3} seat={'12L'} place={12}/>
                                        <Place row={3} seat={'13L'} place={13}/>
                                        <Place row={3} seat={'14L'} place={14}/>
                                        <Place row={3} seat={'13R'} place={13}/>
                                        <Place row={3} seat={'12R'} place={12}/>
                                        <Place row={3} seat={'11R'} place={11}/>
                                        <Place row={3} seat={'10R'} place={10}/>
                                        <Place row={3} seat={'9R'} place={9}/>
                                        <Place row={3} seat={'8R'} place={8}/>
                                        <Place row={3} seat={'7R'} place={7}/>
                                        <Place row={3} seat={'6R'} place={6}/>
                                    </p>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 4)}}>
                                        <Place row={4} seat={'7L'} place={7}/>
                                        <Place row={4} seat={'8L'} place={8}/>
                                        <Place row={4} seat={'9L'} place={9}/>
                                        <Place row={4} seat={'10L'} place={10}/>
                                        <Place row={4} seat={'11L'} place={11}/>
                                        <Place row={4} seat={'12L'} place={12}/>
                                        <Place row={4} seat={'13L'} place={13}/>
                                        <Place row={4} seat={'14L'} place={14}/>
                                        <Place row={4} seat={'15L'} place={15}/>
                                        <Place row={4} seat={'15R'} place={15}/>
                                        <Place row={4} seat={'14R'} place={14}/>
                                        <Place row={4} seat={'13R'} place={13}/>
                                        <Place row={4} seat={'12R'} place={12}/>
                                        <Place row={4} seat={'11R'} place={11}/>
                                        <Place row={4} seat={'10R'} place={10}/>
                                        <Place row={4} seat={'9R'} place={9}/>
                                        <Place row={4} seat={'8R'} place={8}/>
                                        <Place row={4} seat={'7R'} place={7}/>
                                    </p>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 5)}}>
                                        <Place row={5} seat={'8L'} place={8}/>
                                        <Place row={5} seat={'9L'} place={9}/>
                                        <Place row={5} seat={'10L'} place={10}/>
                                        <Place row={5} seat={'11L'} place={11}/>
                                        <Place row={5} seat={'12L'} place={12}/>
                                        <Place row={5} seat={'13L'} place={13}/>
                                        <Place row={5} seat={'14L'} place={14}/>
                                        <Place row={5} seat={'15L'} place={15}/>
                                        <Place row={5} seat={'16L'} place={16}/>
                                        <Place row={5} seat={'17L'} place={17}/>
                                        <Place row={5} seat={'16R'} place={16}/>
                                        <Place row={5} seat={'15R'} place={15}/>
                                        <Place row={5} seat={'14R'} place={14}/>
                                        <Place row={5} seat={'13R'} place={13}/>
                                        <Place row={5} seat={'12R'} place={12}/>
                                        <Place row={5} seat={'11R'} place={11}/>
                                        <Place row={5} seat={'10R'} place={10}/>
                                        <Place row={5} seat={'9R'} place={9}/>
                                        <Place row={5} seat={'8R'} place={8}/>
                                    </p>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 6)}}>
                                        <Place row={6} seat={'9L'} place={9}/>
                                        <Place row={6} seat={'10L'} place={10}/>
                                        <Place row={6} seat={'11L'} place={11}/>
                                        <Place row={6} seat={'12L'} place={12}/>
                                        <Place row={6} seat={'13L'} place={13}/>
                                        <Place row={6} seat={'14L'} place={14}/>
                                        <Place row={6} seat={'15L'} place={15}/>
                                        <Place row={6} seat={'16L'} place={16}/>
                                        <Place row={6} seat={'17L'} place={17}/>
                                        <Place row={6} seat={'18L'} place={18}/>
                                        <Place row={6} seat={'18R'} place={18}/>
                                        <Place row={6} seat={'17R'} place={17}/>
                                        <Place row={6} seat={'16R'} place={16}/>
                                        <Place row={6} seat={'15R'} place={15}/>
                                        <Place row={6} seat={'14R'} place={14}/>
                                        <Place row={6} seat={'13R'} place={13}/>
                                        <Place row={6} seat={'12R'} place={12}/>
                                        <Place row={6} seat={'11R'} place={11}/>
                                        <Place row={6} seat={'10R'} place={10}/>
                                        <Place row={6} seat={'9R'} place={9}/>
                                    </p>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 7)}}>
                                        <Place row={7} seat={'10L'} place={10}/>
                                        <Place row={7} seat={'11L'} place={11}/>
                                        <Place row={7} seat={'12L'} place={12}/>
                                        <Place row={7} seat={'13L'} place={13}/>
                                        <Place row={7} seat={'14L'} place={14}/>
                                        <Place row={7} seat={'15L'} place={15}/>
                                        <Place row={7} seat={'16L'} place={16}/>
                                        <Place row={7} seat={'17L'} place={17}/>
                                        <Place row={7} seat={'18L'} place={18}/>
                                        <Place row={7} seat={'18R'} place={18}/>
                                        <Place row={7} seat={'19L'} place={19}/>
                                        <Place row={7} seat={'20L'} place={20}/>
                                        <Place row={7} seat={'19R'} place={19}/>
                                        <Place row={7} seat={'17R'} place={17}/>
                                        <Place row={7} seat={'16R'} place={16}/>
                                        <Place row={7} seat={'15R'} place={15}/>
                                        <Place row={7} seat={'14R'} place={14}/>
                                        <Place row={7} seat={'13R'} place={13}/>
                                        <Place row={7} seat={'12R'} place={12}/>
                                        <Place row={7} seat={'11R'} place={11}/>
                                        <Place row={7} seat={'10R'} place={10}/>
                                    </p>

                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 8)}}>
                                        <Place row={8} seat={'11L'} place={11}/>
                                        <Place row={8} seat={'12L'} place={12}/>
                                        <Place row={8} seat={'13L'} place={13}/>
                                        <Place row={8} seat={'14L'} place={14}/>
                                        <Place row={8} seat={'15L'} place={15}/>
                                        <Place row={8} seat={'16L'} place={16}/>
                                        <Place row={8} seat={'17L'} place={17}/>
                                        <Place row={8} seat={'18L'} place={18}/>
                                        <Place row={8} seat={'18R'} place={18}/>
                                        <Place row={8} seat={'19L'} place={19}/>
                                        <Place row={8} seat={'20L'} place={20}/>
                                        <Place row={8} seat={'21L'} place={21}/>
                                        <Place row={8} seat={'21R'} place={21}/>
                                        <Place row={8} seat={'20R'} place={20}/>
                                        <Place row={8} seat={'19R'} place={19}/>
                                        <Place row={8} seat={'17R'} place={17}/>
                                        <Place row={8} seat={'16R'} place={16}/>
                                        <Place row={8} seat={'15R'} place={15}/>
                                        <Place row={8} seat={'14R'} place={14}/>
                                        <Place row={8} seat={'13R'} place={13}/>
                                        <Place row={8} seat={'12R'} place={12}/>
                                        <Place row={8} seat={'11R'} place={11}/>
                                    </p>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 9)}}>
                                        <Place row={9} seat={'11L'} place={11}/>
                                        <Place row={9} seat={'12L'} place={12}/>
                                        <Place row={9} seat={'13L'} place={13}/>
                                        <Place row={9} seat={'14L'} place={14}/>
                                        <Place row={9} seat={'15L'} place={15}/>
                                        <Place row={9} seat={'16L'} place={16}/>
                                        <Place row={9} seat={'17L'} place={17}/>
                                        <Place row={9} seat={'18L'} place={18}/>
                                        <Place row={9} seat={'18R'} place={18}/>
                                        <Place row={9} seat={'19L'} place={19}/>
                                        <Place row={9} seat={'20L'} place={20}/>
                                        <Place row={9} seat={'21L'} place={21}/>
                                        <Place row={9} seat={'22L'} place={22}/>
                                        <Place row={9} seat={'21R'} place={21}/>
                                        <Place row={9} seat={'20R'} place={20}/>
                                        <Place row={9} seat={'19R'} place={19}/>
                                        <Place row={9} seat={'17R'} place={17}/>
                                        <Place row={9} seat={'16R'} place={16}/>
                                        <Place row={9} seat={'15R'} place={15}/>
                                        <Place row={9} seat={'14R'} place={14}/>
                                        <Place row={9} seat={'13R'} place={13}/>
                                        <Place row={9} seat={'12R'} place={12}/>
                                        <Place row={9} seat={'11R'} place={11}/>
                                    </p>

                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 10)}}>
                                        <Place row={10} seat={'10L'} place={10}/>
                                        <Place row={10} seat={'11L'} place={11}/>
                                        <Place row={10} seat={'12L'} place={12}/>
                                        <Place row={10} seat={'13L'} place={13}/>
                                        <Place row={10} seat={'14L'} place={14}/>
                                        <Place row={10} seat={'15L'} place={15}/>
                                        <Place row={10} seat={'16L'} place={16}/>
                                        <Place row={10} seat={'17L'} place={17}/>
                                        <Place row={10} seat={'18L'} place={18}/>
                                        <Place row={10} seat={'19L'} place={19}/>
                                        <Place row={10} seat={'20L'} place={20}/>
                                        <Place row={10} seat={'20R'} place={20}/>
                                        <Place row={10} seat={'19R'} place={19}/>
                                        <Place row={10} seat={'18R'} place={18}/>
                                        <Place row={10} seat={'17R'} place={17}/>
                                        <Place row={10} seat={'16R'} place={16}/>
                                        <Place row={10} seat={'15R'} place={15}/>
                                        <Place row={10} seat={'14R'} place={14}/>
                                        <Place row={10} seat={'13R'} place={13}/>
                                        <Place row={10} seat={'12R'} place={12}/>
                                        <Place row={10} seat={'11R'} place={11}/>
                                        <Place row={10} seat={'10R'} place={10}/>
                                    </p>

                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 11)}}>
                                        <Place row={11} seat={'9L'} place={9}/>
                                        <Place row={11} seat={'10L'} place={10}/>
                                        <Place row={11} seat={'11L'} place={11}/>
                                        <Place row={11} seat={'12L'} place={12}/>
                                        <Place row={11} seat={'13L'} place={13}/>
                                        <Place row={11} seat={'14L'} place={14}/>
                                        <Place row={11} seat={'15L'} place={15}/>
                                        <Place row={11} seat={'16L'} place={16}/>
                                        <Place row={11} seat={'17L'} place={17}/>
                                        <Place row={11} seat={'18L'} place={18}/>
                                        <Place row={11} seat={'19L'} place={19}/>
                                        <Place row={11} seat={'18R'} place={18}/>
                                        <Place row={11} seat={'17R'} place={17}/>
                                        <Place row={11} seat={'16R'} place={16}/>
                                        <Place row={11} seat={'15R'} place={15}/>
                                        <Place row={11} seat={'14R'} place={14}/>
                                        <Place row={11} seat={'13R'} place={13}/>
                                        <Place row={11} seat={'12R'} place={12}/>
                                        <Place row={11} seat={'11R'} place={11}/>
                                        <Place row={11} seat={'10R'} place={10}/>
                                        <Place row={11} seat={'9R'} place={9}/>
                                    </p>

                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 12)}}>
                                        <Place row={12} seat={'8L'} place={8}/>
                                        <Place row={12} seat={'9L'} place={9}/>
                                        <Place row={12} seat={'10L'} place={10}/>
                                        <Place row={12} seat={'11L'} place={11}/>
                                        <Place row={12} seat={'12L'} place={12}/>
                                        <Place row={12} seat={'13L'} place={13}/>
                                        <Place row={12} seat={'14L'} place={14}/>
                                        <Place row={12} seat={'15L'} place={15}/>
                                        <Place row={12} seat={'16L'} place={16}/>
                                        <Place row={12} seat={'17L'} place={17}/>
                                        <Place row={12} seat={'17R'} place={17}/>
                                        <Place row={12} seat={'16R'} place={16}/>
                                        <Place row={12} seat={'15R'} place={15}/>
                                        <Place row={12} seat={'14R'} place={14}/>
                                        <Place row={12} seat={'13R'} place={13}/>
                                        <Place row={12} seat={'12R'} place={12}/>
                                        <Place row={12} seat={'11R'} place={11}/>
                                        <Place row={12} seat={'10R'} place={10}/>
                                        <Place row={12} seat={'9R'} place={9}/>
                                        <Place row={12} seat={'8R'} place={8}/>
                                    </p>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 13)}}>
                                        <Place row={13} seat={'7L'} place={7}/>
                                        <Place row={13} seat={'8L'} place={8}/>
                                        <Place row={13} seat={'9L'} place={9}/>
                                        <Place row={13} seat={'10L'} place={10}/>
                                        <Place row={13} seat={'11L'} place={11}/>
                                        <Place row={13} seat={'12L'} place={12}/>
                                        <Place row={13} seat={'13L'} place={13}/>
                                        <Place row={13} seat={'14L'} place={14}/>
                                        <Place row={13} seat={'15L'} place={15}/>
                                        <Place row={13} seat={'16L'} place={16}/>
                                        <Place row={13} seat={'17L'} place={17}/>
                                        <Place row={13} seat={'16R'} place={16}/>
                                        <Place row={13} seat={'15R'} place={15}/>
                                        <Place row={13} seat={'14R'} place={14}/>
                                        <Place row={13} seat={'13R'} place={13}/>
                                        <Place row={13} seat={'12R'} place={12}/>
                                        <Place row={13} seat={'11R'} place={11}/>
                                        <Place row={13} seat={'10R'} place={10}/>
                                        <Place row={13} seat={'9R'} place={9}/>
                                        <Place row={13} seat={'8R'} place={8}/>
                                        <Place row={13} seat={'7R'} place={7}/>
                                    </p>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 14)}}>
                                        <Place row={14} seat={'6L'} place={6}/>
                                        <Place row={14} seat={'7L'} place={7}/>
                                        <Place row={14} seat={'8L'} place={8}/>
                                        <Place row={14} seat={'9L'} place={9}/>
                                        <Place row={14} seat={'10L'} place={10}/>
                                        <Place row={14} seat={'11L'} place={11}/>
                                        <Place row={14} seat={'12L'} place={12}/>
                                        <Place row={14} seat={'13L'} place={13}/>
                                        <Place row={14} seat={'14L'} place={14}/>
                                        <Place row={14} seat={'15L'} place={15}/>
                                        <Place row={14} seat={'16L'} place={16}/>
                                        <Place row={14} seat={'16R'} place={16}/>
                                        <Place row={14} seat={'15R'} place={15}/>
                                        <Place row={14} seat={'14R'} place={14}/>
                                        <Place row={14} seat={'13R'} place={13}/>
                                        <Place row={14} seat={'12R'} place={12}/>
                                        <Place row={14} seat={'11R'} place={11}/>
                                        <Place row={14} seat={'10R'} place={10}/>
                                        <Place row={14} seat={'9R'} place={9}/>
                                        <Place row={14} seat={'8R'} place={8}/>
                                        <Place row={14} seat={'7R'} place={7}/>
                                        <Place row={14} seat={'6R'} place={6}/>
                                    </p>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 15)}}>
                                        <Place row={15} seat={'1L'} place={1}/>
                                        <Place row={15} seat={'2L'} place={2}/>
                                        <Place row={15} seat={'3L'} place={3}/>
                                        <Place row={15} seat={'4L'} place={4}/>
                                        <Place row={15} seat={'5L'} place={5}/>
                                        <Place row={15} seat={'6L'} place={6}/>
                                        <Place row={15} seat={'7L'} place={7}/>
                                        <Place row={15} seat={'8L'} place={8}/>
                                        <Place row={15} seat={'9L'} place={9}/>
                                        <Place row={15} seat={'10L'} place={10}/>
                                        <Place row={15} seat={'11L'} place={11}/>
                                        <Place row={15} seat={'12L'} place={12}/>
                                        <Place row={15} seat={'11R'} place={11}/>
                                        <Place row={15} seat={'10R'} place={10}/>
                                        <Place row={15} seat={'9R'} place={9}/>
                                        <Place row={15} seat={'8R'} place={8}/>
                                        <Place row={15} seat={'7R'} place={7}/>
                                        <Place row={15} seat={'6R'} place={6}/>
                                        <Place row={15} seat={'5R'} place={5}/>
                                        <Place row={15} seat={'4R'} place={4}/>
                                        <Place row={15} seat={'3R'} place={3}/>
                                        <Place row={15} seat={'2R'} place={2}/>
                                        <Place row={15} seat={'1R'} place={1}/>
                                    </p>
                                </div>
                            </div>

                            <div className='col-3 hall-2-right-side'>
                                <div className="row justify-content-center">
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 1)}}>
                                        <Place row={1} seat={'3R'} place={3}/>
                                        <Place row={1} seat={'2R'} place={2}/>
                                        <Place row={1} seat={'1R'} place={1}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 2)}}>
                                        <Place row={2} seat={'4R'} place={4}/>
                                        <Place row={2} seat={'3R'} place={3}/>
                                        <Place row={2} seat={'2R'} place={2}/>
                                        <Place row={2} seat={'1R'} place={1}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 3)}}>
                                        <Place row={3} seat={'5R'} place={5}/>
                                        <Place row={3} seat={'4R'} place={4}/>
                                        <Place row={3} seat={'3R'} place={3}/>
                                        <Place row={3} seat={'2R'} place={2}/>
                                        <Place row={3} seat={'1R'} place={1}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 4)}}><Place
                                        row={4} seat={'6R'} place={6}/>
                                        <Place row={4} seat={'5R'} place={5}/>
                                        <Place row={4} seat={'4R'} place={4}/>
                                        <Place row={4} seat={'3R'} place={3}/>
                                        <Place row={4} seat={'2R'} place={2}/>
                                        <Place row={4} seat={'1R'} place={1}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 5)}}>
                                        <Place row={5} seat={'7R'} place={7}/>
                                        <Place row={5} seat={'6R'} place={6}/>
                                        <Place row={5} seat={'5R'} place={5}/>
                                        <Place row={5} seat={'4R'} place={4}/>
                                        <Place row={5} seat={'3R'} place={3}/>
                                        <Place row={5} seat={'2R'} place={2}/>
                                        <Place row={5} seat={'1R'} place={1}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 6)}}>
                                        <Place row={6} seat={'8R'} place={8}/>
                                        <Place row={6} seat={'7R'} place={7}/>
                                        <Place row={6} seat={'6R'} place={6}/>
                                        <Place row={6} seat={'5R'} place={5}/>
                                        <Place row={6} seat={'4R'} place={4}/>
                                        <Place row={6} seat={'3R'} place={3}/>
                                        <Place row={6} seat={'2R'} place={2}/>
                                        <Place row={6} seat={'1R'} place={1}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 7)}}>
                                        <Place row={7} seat={'9R'} place={9}/>
                                        <Place row={7} seat={'8R'} place={8}/>
                                        <Place row={7} seat={'7R'} place={7}/>
                                        <Place row={7} seat={'6R'} place={6}/>
                                        <Place row={7} seat={'5R'} place={5}/>
                                        <Place row={7} seat={'4R'} place={4}/>
                                        <Place row={7} seat={'3R'} place={3}/>
                                        <Place row={7} seat={'2R'} place={2}/>
                                        <Place row={7} seat={'1R'} place={1}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 8)}}>
                                        <Place row={8} seat={'10R'} place={10}/>
                                        <Place row={8} seat={'9R'} place={9}/>
                                        <Place row={8} seat={'8R'} place={8}/>
                                        <Place row={8} seat={'7R'} place={7}/>
                                        <Place row={8} seat={'6R'} place={6}/>
                                        <Place row={8} seat={'5R'} place={5}/>
                                        <Place row={8} seat={'4R'} place={4}/>
                                        <Place row={8} seat={'3R'} place={3}/>
                                        <Place row={8} seat={'2R'} place={2}/>
                                        <Place row={8} seat={'1R'} place={1}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 9)}}>
                                        <Place row={9} seat={'10R'} place={10}/>
                                        <Place row={9} seat={'9R'} place={9}/>
                                        <Place row={9} seat={'8R'} place={8}/>
                                        <Place row={9} seat={'7R'} place={7}/>
                                        <Place row={9} seat={'6R'} place={6}/>
                                        <Place row={9} seat={'5R'} place={5}/>
                                        <Place row={9} seat={'4R'} place={4}/>
                                        <Place row={9} seat={'3R'} place={3}/>
                                        <Place row={9} seat={'2R'} place={2}/>
                                        <Place row={9} seat={'1R'} place={1}/>
                                    </p>
                                </div>
                                <div className="row justify-content-start right-bottom-side">
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 10)}}>
                                        <Place row={10} seat={'9R'} place={9}/>
                                        <Place row={10} seat={'8R'} place={8}/>
                                        <Place row={10} seat={'7R'} place={7}/>
                                        <Place row={10} seat={'6R'} place={6}/>
                                        <Place row={10} seat={'5R'} place={5}/>
                                        <Place row={10} seat={'4R'} place={4}/>
                                        <Place row={10} seat={'3R'} place={3}/>
                                        <Place row={10} seat={'2R'} place={2}/>
                                        <Place row={10} seat={'1R'} place={1}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 11)}}>
                                        <Place row={11} seat={'8R'} place={8}/>
                                        <Place row={11} seat={'7R'} place={7}/>
                                        <Place row={11} seat={'6R'} place={6}/>
                                        <Place row={11} seat={'5R'} place={5}/>
                                        <Place row={11} seat={'4R'} place={4}/>
                                        <Place row={11} seat={'3R'} place={3}/>
                                        <Place row={11} seat={'2R'} place={2}/>
                                        <Place row={11} seat={'1R'} place={1}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 12)}}>
                                        <Place row={12} seat={'7R'} place={7}/>
                                        <Place row={12} seat={'6R'} place={6}/>
                                        <Place row={12} seat={'5R'} place={5}/>
                                        <Place row={12} seat={'4R'} place={4}/>
                                        <Place row={12} seat={'3R'} place={3}/>
                                        <Place row={12} seat={'2R'} place={2}/>
                                        <Place row={12} seat={'1R'} place={1}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 13)}}>
                                        <Place row={13} seat={'6R'} place={6}/>
                                        <Place row={13} seat={'5R'} place={5}/>
                                        <Place row={13} seat={'4R'} place={4}/>
                                        <Place row={13} seat={'3R'} place={3}/>
                                        <Place row={13} seat={'2R'} place={2}/>
                                        <Place row={13} seat={'1R'} place={1}/>
                                    </p>
                                    <div className="w-100"/>
                                    <p className={'hall-2-row'}
                                       style={{background: this.rowColor(hallStructure2ForEvent.priceRanges, 14)}}>
                                        <Place row={14} seat={'5R'} place={5}/>
                                        <Place row={14} seat={'4R'} place={4}/>
                                        <Place row={14} seat={'3R'} place={3}/>
                                        <Place row={14} seat={'2R'} place={2}/>
                                        <Place row={14} seat={'1R'} place={1}/>
                                    </p>
                                    <div className="w-100"/>
                                </div>
                            </div>

                        </div>
                        <p className='hall-title mt-5'> GROSSE SAAL</p>
                        <span className='hall-2-side-title'>Left side</span>
                        <span className='hall-2-side-title'>Right side</span>
                        <div className="w-100"/>
                        <span className='hall-2-natau'>Eingang <br/> Ausgang</span>
                        <span className='hall-2-natau'>Eingang <br/> Ausgang</span>
                    </div>
                </div>);
        }

    }
}

const mapStateToProps = (state) => {
    return {
        seatsInCart: state.seatsInCart,
        event: state.event,
        hallStructureForEvent: state.hallStructureForEvent,
        hallStructure2ForEvent: state.hallStructure2ForEvent,

    }
};

const mapDispatchToProps = {
    seatsInCartAdd, seatsInCartRemove, setHallStructure, hallStructureRequest, hallStructureError, setHallStructure2,
    hallStructure2Request,
    hallStructure2Error
};

export default connect(mapStateToProps, mapDispatchToProps)(Hall);


