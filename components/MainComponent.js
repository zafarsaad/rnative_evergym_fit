import React, { Component } from 'react';
import WorkoutList from './WorkoutListComponent';
import WorkoutGroupInfo from './WorkoutGroupInfoComponent';
import { View } from 'react-native';
import { WORKOUTGROUPS } from '../shared/workoutGroups';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workoutGroups: WORKOUTGROUPS,
            selectedWorkoutGroup: null
        };
    }

    onWorkoutGroupSelect(workoutGroupId) {
        this.setState({selectedWorkoutGroup: workoutGroupId});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <WorkoutList
                    workoutGroups={this.state.workoutGroups}
                    onPress={workoutGroupId => this.onWorkoutGroupSelect(workoutGroupId)}
                />
                <WorkoutGroupInfo
                    workoutGroup={this.state.workoutGroups.filter(
                        workoutGroup => workoutGroup.id === this.state.selectedWorkoutGroup)[0]}
                />
            </View>
        );
    }
}

export default Main;