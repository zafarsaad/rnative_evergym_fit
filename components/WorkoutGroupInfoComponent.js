import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { WORKOUTGROUPS } from '../shared/workoutGroups';

function RenderWorkoutGroup({ workoutGroup }) {
    if (workoutGroup) {
        return (
            <Card
                featuredTitle={workoutGroup.name}
                image={require('./images/react-lake.jpg')}
            >
                <Text style={{ margin: 10 }}>
                    {workoutGroup.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class WorkoutGroupInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workoutGroups: WORKOUTGROUPS
        };
    }

    static navigationOptions = {
        title: 'Workout Groups'
    }

    render() {
        const workoutGroupId = this.props.navigation.getParam('workoutGroupId');
        const workoutGroup = this.state.workoutGroups.filter(workoutGroup => workoutGroup.id === workoutGroupId)[0];
        return <RenderWorkoutGroup workoutGroup={workoutGroup} />;
    }

}

export default WorkoutGroupInfo;