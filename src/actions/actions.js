export const showMenu = () => {
    return {
        type: 'SHOW_MENU'
    }
};
export const hideMenu = () => {
    return {
        type: 'HIDE_MENU'
    }
};

export const upcomingEventsRequest = () => {
    return {
        type: 'UPCOMING_EVENTS_REQUEST'
    }
};
export const upcomingEventsLoaded = (upcomingEvents) => {
    return {
        type: 'UPCOMING_EVENTS_LOADED',
        payload: upcomingEvents
    }
};
export const upcomingEventsShowError = () => {
    return {
        type: 'UPCOMING_EVENTS_ERROR'
    }
};

export const eventsRequest = () => {
    return {
        type: 'EVENTS_REQUEST'
    }
};
export const eventsLoaded = (events) => {
    return {
        type: 'EVENTS_LOADED',
        payload: events
    }
};
export const setTotalCount = (total) => {
    return {
        type: 'FETCH_TOTAL_COUNT',
        payload: total
    }
};
export const eventsShowError = () => {
    return {
        type: 'EVENTS_ERROR'
    }
};

export const eventRequest = () => {
    return {
        type: 'EVENT_REQUEST'
    }
};
export const eventLoaded = (event) => {
    return {
        type: 'EVENT_LOADED',
        payload: event
    }
};
export const eventShowError = () => {
    return {
        type: 'EVENT_ERROR'
    }
};

export const registrationChangeStatus = () => {
    return {
        type: 'REGISTRATION_CHANGE_STATUS'
    }
};
export const registrationSetResult = (result) => {
    return {
        type: 'REGISTRATION_RESULT',
        payload: result
    }
};
export const registrationSetErrorMsg = (msg) => {
    return {
        type: 'REGISTRATION_SET_ERROR_MSG',
        payload: msg
    }
};
export const registrationChangeLoading = () => {
    return {
        type: 'REGISTRATION_LOADING'
    }
};

export const setEmail = (email) => {

    localStorage.setItem('email', email);

    return {
        type: 'SET_EMAIL',
        payload: email
    }
};
export const setToken = (token) => {

    localStorage.setItem('token', token);

    return {
        type: 'SET_TOKEN',
        payload: token
    }
};

export const authChangeLoading = () => {
    return {
        type: 'AUTH_LOADING'
    }
};
export const authSetStatus = (result) => {
    return {
        type: 'SET_AUTH_STATUS',
        payload: result
    }
};
export const authSetErrorMsg = (msg) => {
    return {
        type: 'AUTH_SET_ERROR_MSG',
        payload: msg
    }
};

export const seatsInCartRemove = (row, seat, ticketPrice) => {
    return {
        type: "SEAT_CART_REMOVE",
        payload: {
            row: row, seat: seat, ticketPrice: ticketPrice
        }
    }
};

export const seatsInCartAdd = (row, seat, ticketPrice) => {
    return {
        type: "SEAT_CART_ADD",
        payload: {
            row: row, seat: seat, ticketPrice: ticketPrice
        }
    }
};


export const clearSeatsCart = () => {
    return {
        type: "CLEAR_SEAT_CART"
    }
};

export const setHallStructure = (priceRanges, lockedSeats) => {
    return {
        type: "SET_HALL_STRUCTURE",
        payload: {
            priceRanges: priceRanges, lockedSeats: lockedSeats
        }
    }
};

export const hallStructureRequest = () => {
    return {
        type: "HALL_STRUCTURE_REQUEST",
    }
};

export const hallStructureError = () => {
    return {
        type: "HALL_STRUCTURE_ERROR",
    }
};

export const setHallStructure2 = (priceRanges, lockedSeats) => {
    return {
        type: "SET_HALL_2_STRUCTURE",
        payload: {
            priceRanges: priceRanges, lockedSeats: lockedSeats
        }
    }
};

export const hallStructure2Request = () => {
    return {
        type: "HALL_STRUCTURE_2_REQUEST"
    }
};

export const hallStructure2Error = () => {
    return {
        type: "HALL_STRUCTURE_2_ERROR"
    }
};

export const resetCalender = () => {
    return {
        type: "RESET_CALENDAR"
    }
};
export const setCalender = (range) => {
    return {
        type: "SET_CALENDAR",
        payload: {
            from: range.from,
            to: range.to
        }
    }
};

export const changePage = (page) => {
    return {
        type: 'CHANGE_PAGE',
        payload: page
    }
};

export const changeMorePageStatus = (bool) => {
    return {
        type: 'CHANGE_MORE_ACTION_STATUS',
        payload: bool
    }
};

export const setBookLoading = (bool) => {
    return {
        type: 'SET_BOOK_LOADING',
        payload: bool
    }
};

export const setPassRecoveryLoading = (bool) => {
    return {
        type: 'PASS_RECOVERY_LOADING',
        payload: bool
    }
};
export const setPassRecoverySuccess = (bool) => {
    return {
        type: 'PASS_RECOVERY_SUCCESS',
        payload: bool
    }
};
export const passRecoveryError = (error, errorMsg) => {
    return {
        type: 'PASS_RECOVERY_ERROR',
        payload: {error, errorMsg}
    }
};

