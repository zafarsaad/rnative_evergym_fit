import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchExercises = () => dispatch => {
    return fetch(baseUrl + 'exercises')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(exercises => dispatch(addExercises(exercises)))
        .catch(error => dispatch(exercisesFailed(error.message)));
};

export const exercisesFailed = errMess => ({
    type: ActionTypes.EXERCISES_FAILED,
    payload: errMess
});

export const addExercises = exercises => ({
    type: ActionTypes.ADD_EXERCISES,
    payload: exercises
});

export const fetchLogs = () => dispatch => {
    return fetch(baseUrl + 'logs')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(logs => dispatch(addLogs(logs)))
        .catch(error => dispatch(logsFailed(error.message)));
};

export const logsFailed = errMess => ({
    type: ActionTypes.LOGS_FAILED,
    payload: errMess
});

export const addLogs = logs => ({
    type: ActionTypes.ADD_LOGS,
    payload: logs
});

export const fetchWorkOutGroups = () => dispatch => {

    dispatch(workoutGroupsLoading());

    return fetch(baseUrl + 'workoutGroups')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(workoutGroups => dispatch(addWorkOutGroups(workoutGroups)))
        .catch(error => dispatch(workoutGroupsFailed(error.message)));
};

export const workoutGroupsLoading = () => ({
    type: ActionTypes.WORKOUTGROUPS_LOADING
});

export const workoutGroupsFailed = errMess => ({
    type: ActionTypes.WORKOUTGROUPS_FAILED,
    payload: errMess
});

export const addWorkOutGroups = workoutGroups => ({
    type: ActionTypes.ADD_WORKOUTGROUPS,
    payload: workoutGroups
});

export const fetchPromotions = () => dispatch => {
    
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});

export const fetchTrainers = () => dispatch => {
    
    dispatch(trainersLoading());

    return fetch(baseUrl + 'trainers')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(trainers => dispatch(addTrainers(trainers)))
        .catch(error => dispatch(trainersFailed(error.message)));
};

export const trainersLoading = () => ({
    type: ActionTypes.TRAINERS_LOADING
});

export const trainersFailed = errMess => ({
    type: ActionTypes.TRAINERS_FAILED,
    payload: errMess
});

export const addTrainers = trainers => ({
    type: ActionTypes.ADD_TRAINERS,
    payload: trainers
});

export const postFavorite = workoutGroupId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(workoutGroupId));
    }, 2000);
};

export const addFavorite = workoutGroupId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: workoutGroupId
});

export const postComment = (campsiteId, rating, author, text) => dispatch => {

    const newComment = {
        campsiteId,
        rating,
        author,
        text
    };
    newComment.date = new Date().toISOString();

    setTimeout(() => {
        dispatch(addComment(newComment));
    }, 2000);
};

export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
})