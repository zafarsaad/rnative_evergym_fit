import * as ActionTypes from './ActionTypes';

export const logs = (state = { errMess: null, logs: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LOGS:
            return {...state, errMess: null, logs: action.payload};

        case ActionTypes.LOGS_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};