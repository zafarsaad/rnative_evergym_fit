import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { workoutGroups } from './workoutGroups';
import { exercises } from './exercises';
import { promotions } from './promotions';
import { trainers } from './trainers';
import { favorites } from './favoriteExercises';
import { logs } from './logs';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            workoutGroups,
            exercises,
            logs,
            trainers,
            promotions,
            favorites
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}