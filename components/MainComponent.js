import React, { Component } from 'react';
import WorkoutList from './WorkoutListComponent';
import { WORKOUTGROUPS } from '../shared/workoutGroups';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workoutGroups: WORKOUTGROUPS
        };
    }

    render() {
        return <WorkoutList workoutGroups={this.state.workoutGroups} />;
    }
}

export default Main;