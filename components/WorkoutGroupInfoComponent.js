import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { WORKOUTGROUPS } from '../shared/workoutGroups';
import { EXERCISES } from '../shared/exercises';

function RenderWorkoutGroup(props) {

    const { workoutGroup } = props;

    if (workoutGroup) {
        return (
            <Card
                featuredTitle={workoutGroup.name}
                image={require('./images/react-lake.jpg')}
            >
                <Text style={{ margin: 10 }}>
                    {workoutGroup.description}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ?
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        );
    }
    return <View />;
}

function RenderExercises({ exercises }) {

    const renderExerciseItem = ({ item }) => {
        return (
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
                <Text style={{ fontSize: 12 }}>{`-- ${item.author}, ${item.date}`}</Text>
                {/* ToDo Add Favorites to Exercise? */}
                {/* <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ?
                        console.log('Already set as a favorite') : props.markFavorite()}
                /> */}
            </View>
        );
    };

    return (
        <Card title="Exercises">
            <FlatList
                data={exercises}
                renderItem={renderExerciseItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    )
}

class WorkoutGroupInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workoutGroups: WORKOUTGROUPS,
            exercises: EXERCISES,
            favorite: false
        };
    }

    markFavorite() {
        this.setState({ favorite: true });
    }

    static navigationOptions = {
        title: 'Workout Groups'
    }

    render() {
        const workoutGroupId = this.props.navigation.getParam('workoutGroupId');
        const workoutGroup = this.state.workoutGroups.filter(workoutGroup => workoutGroup.id === workoutGroupId)[0];
        const exercises = this.state.exercises.filter(exercise => exercise.workoutGroupId === workoutGroupId);
        return (
            <ScrollView>
                <RenderWorkoutGroup workoutGroup={workoutGroup}
                    favorite={this.state.favorite}
                    markFavorite={() => this.markFavorite()}
                />
                <RenderExercises exercises={exercises}
                // To Do - clear or change; add favorite exercise 
                    // favorite={this.state.favorite}
                    // markFavorite={() => this.markFavorite()}
                />
            </ScrollView>
        );
    }

}

export default WorkoutGroupInfo;