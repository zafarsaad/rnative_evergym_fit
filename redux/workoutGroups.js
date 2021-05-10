import * as ActionTypes from './ActionTypes';

export const workoutGroups = (state = { isLoading: true,
                                     errMess: null,
                                     workoutGroups: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_WORKOUTGROUPS:
            return {...state, isLoading: false, errMess: null, workoutGroups: action.payload};

        case ActionTypes.WORKOUTGROUPS_LOADING:
            return {...state, isLoading: true, errMess: null, workoutGroups: []}

        case ActionTypes.WORKOUTGROUPS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
      }
};