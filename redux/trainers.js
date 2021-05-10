import * as ActionTypes from './ActionTypes';

export const trainers = (state = { isLoading: true,
                                    errMess: null,
                                    trainers: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TRAINERS:
            return {...state, isLoading: false, errMess: null, trainers: action.payload};

        case ActionTypes.TRAINERS_LOADING:
            return {...state, isLoading: true, errMess: null, trainers: []}

        case ActionTypes.TRAINERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};