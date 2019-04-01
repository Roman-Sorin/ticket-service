const initialState = {
    email: '',
    token: '',

    menuIsShown: false,

    upcomingEventsLoading: true,
    upcomingEvents: [],
    upcomingEventsError: false,

    eventsLoading: true,
    events: [],
    eventsError: false,
    totalCount: 0,

    pagination: {
        page: 0,
        hasMoreItems: true
    },

    eventLoading: true,
    event: {},
    eventError: false,

    registration: {
        registrationLoading: false,
        registrationStatus: true,
        registrationResult: "",
        registrationErrorMsg: ""
    },

    auth: {
        authLoading: false,
        authResult: "",
        authErrorMsg: ""
    },

    seatsInCart: [],
    totalCost: 0,

    hallStructureForEvent: {
        priceRanges: [],
        lockedSeats: [],
        hallStructureLoading: true,
        hallStructureError: false,
    },

    hallStructure2ForEvent: {
        priceRanges: [],
        lockedSeats: [],
        hallStructureLoading: true,
        hallStructureError: false,
    },

    calendar: {
        from: undefined,
        to: undefined
    },

    bookLoading: false,

    passRecovery: {
        loading: false,
        success: false,
        error: false,
        errorMsg: ""
    }

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_EMAIL':

            return {
                ...state,
                email: action.payload
            };
        case 'SET_TOKEN': {

            return {
                ...state,
                token: action.payload
            }
        }

        case 'SHOW_MENU':
            return {
                ...state, menuIsShown: true
            };
        case 'HIDE_MENU':
            return {
                ...state, menuIsShown: false
            };

        case 'UPCOMING_EVENTS_REQUEST':
            return {
                ...state,
                upcomingEventsLoading: true
            };
        case 'UPCOMING_EVENTS_LOADED':
            return {
                ...state,
                upcomingEventsLoading: false,
                upcomingEvents: action.payload
            };
        case "UPCOMING_EVENTS_ERROR":
            return {
                ...state,
                upcomingEventsError: true,
                upcomingEventsLoading: false
            };

        case 'EVENTS_REQUEST':
            return {
                ...state,
                eventsLoading: true
            };
        case 'EVENTS_LOADED':
            return {
                ...state,
                eventsLoading: false,
                events: action.payload
            };
        case "EVENTS_ERROR":
            return {
                ...state,
                eventsError: true,
                eventsLoading: false
            };
        case "FETCH_TOTAL_COUNT":
            return {
                ...state,
                totalCount: action.payload
            };


        case 'EVENT_REQUEST':
            return {
                ...state,
                eventLoading: true
            };
        case 'EVENT_LOADED':
            return {
                ...state,
                eventLoading: false,
                event: action.payload
            };
        case "EVENT_ERROR":
            return {
                ...state,
                eventError: true,
                eventLoading: false
            };

        case "REGISTRATION_CHANGE_STATUS":
            return {
                ...state,
                registration: {
                    ...state.registration,
                    registrationStatus: !state.registration.registrationStatus, /*DANGEROUS*/
                    registrationResult: "",
                    registrationErrorMsg: ""
                }
            };
        case "REGISTRATION_RESULT":
            return {
                ...state,
                registration: {
                    ...state.registration,
                    registrationResult: action.payload
                }
            };
        case "REGISTRATION_SET_ERROR_MSG":
            return {
                ...state,
                registration: {
                    ...state.registration,
                    registrationErrorMsg: action.payload
                }
            };
        case "REGISTRATION_LOADING":
            return {
                ...state,
                registration: {
                    ...state.registration,
                    registrationLoading: !state.registration.registrationLoading, /*DANGEROUS*/
                }
            };

        case "SET_AUTH_STATUS":
            return {
                ...state,
                auth: {
                    ...state.auth,
                    authResult: action.payload,
                    authLoading: false
                }
            };
        case "AUTH_LOADING":
            return {
                ...state,
                auth: {
                    ...state.auth,
                    authLoading: true
                }
            };
        case "AUTH_SET_ERROR_MSG":
            return {
                ...state,
                auth: {
                    ...state.auth,
                    authErrorMsg: action.payload,
                    authLoading: false
                }
            };

        case "SEAT_CART_REMOVE": {

            let row = action.payload.row;
            let seat = action.payload.seat;
            let index = state.seatsInCart.findIndex(
                (item) => {
                    return item.row === row && item.seat === seat
                });
            let newSeatsInCart = [...state.seatsInCart.slice(0, index), ...state.seatsInCart.slice(index + 1)];

            return {
                ...state,
                seatsInCart: newSeatsInCart,
                totalCost: state.totalCost - action.payload.ticketPrice
            };
        }
        case "SEAT_CART_ADD": {
            let row = action.payload.row;
            let seat = action.payload.seat;
            let newItem = {row: row, seat: seat};
            let newSeatsInCart = [...state.seatsInCart, newItem];

            return {
                ...state,
                seatsInCart: newSeatsInCart,
                totalCost: state.totalCost + action.payload.ticketPrice
            };
        }
        case "CLEAR_SEAT_CART": {
            return {
                ...state,
                seatsInCart: [],
                totalCost: 0,
            }
        }

        case "SET_HALL_STRUCTURE": {
            return {
                ...state,
                hallStructureForEvent: {
                    ...state.hallStructureForEvent,
                    priceRanges: action.payload.priceRanges,
                    lockedSeats: action.payload.lockedSeats,
                    hallStructureLoading: false
                }
            }
        }
        case 'HALL_STRUCTURE_REQUEST':
            return {
                ...state,
                hallStructureForEvent: {
                    ...state.hallStructureForEvent,
                    hallStructureLoading: true
                }
            };
        case "HALL_STRUCTURE_ERROR":
            return {
                ...state,
                hallStructureForEvent: {
                    ...state.hallStructureForEvent,
                    hallStructureError: true,
                    hallStructureLoading: false
                }
            };

        case "SET_HALL_2_STRUCTURE": {
            return {
                ...state,
                hallStructure2ForEvent: {
                    ...state.hallStructure2ForEvent,
                    priceRanges: action.payload.priceRanges,
                    lockedSeats: action.payload.lockedSeats,
                    hallStructureLoading: false
                }
            }
        }
        case "HALL_STRUCTURE_2_REQUEST":
            return {
                ...state,
                hallStructure2ForEvent: {
                    ...state.hallStructure2ForEvent,
                    hallStructureLoading: true
                }
            };
        case "HALL_STRUCTURE_2_ERROR":
            return {
                ...state,
                hallStructure2ForEvent: {
                    ...state.hallStructure2ForEvent,
                    hallStructureError: true,
                    hallStructureLoading: false
                }
            };

        case "RESET_CALENDAR":
            return {
                ...state,
                calendar: {
                    ...state.calendar,
                    from: undefined,
                    to: undefined
                }
            };
        case "SET_CALENDAR":
            return {
                ...state,
                calendar: {
                    ...state.calendar,
                    from: action.payload.from,
                    to: action.payload.to
                }
            };

        case "CHANGE_PAGE":
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.payload
                }
            };

        case "CHANGE_MORE_ACTION_STATUS":
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    hasMoreItems: action.payload
                }
            };
        case "SET_BOOK_LOADING":
            return {
                ...state,
                bookLoading: action.payload
            };

        case "PASS_RECOVERY_LOADING":
            return {
                ...state,
                passRecovery: {
                    ...state.passRecovery,
                    loading: action.payload
                }
            };

        case "PASS_RECOVERY_SUCCESS":
            return {
                ...state,
                passRecovery: {
                    ...state.passRecovery,
                    success: action.payload
                }
            };
        case "PASS_RECOVERY_ERROR":
            return {
                ...state,
                passRecovery: {
                    ...state.passRecovery,
                    error: action.payload.error,
                    errorMsg: action.payload.errorMsg,
                    loading: false
                }
            };

        default:
            return state;
    }
};