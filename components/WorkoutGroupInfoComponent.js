import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderWorkoutGroup({workoutGroup}) {
    if (workoutGroup) {
        return (
            <Card 
                featuredTitle={workoutGroup.name}
                image={require('./images/react-lake.jpg')}
            >
                <Text style={{margin: 10}}>
                    {workoutGroup.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function WorkoutGroupInfo(props) {
    return <RenderWorkoutGroup workoutGroup={props.workoutGroup} />;
}

export default WorkoutGroupInfo;