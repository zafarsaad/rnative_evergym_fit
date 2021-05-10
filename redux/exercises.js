import * as ActionTypes from './ActionTypes';

export const exercises = (state = { errMess: null, exercises: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_EXERCISES:
            return {...state, errMess: null, exercises: action.payload};

        case ActionTypes.EXERCISES_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};