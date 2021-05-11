import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
// TODO local import
// import { WORKOUTGROUPS } from '../shared/workoutGroups';
// import { EXERCISES } from '../shared/exercises';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        workoutGroups: state.workoutGroups,
        exercises: state.exercises,
        logs: state.logs,
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: itemToFavoriteId => (postFavorite(itemToFavoriteId))
};

function RenderWorkoutGroup(props) {

    const { workoutGroup } = props;

    if (workoutGroup) {
        return (
            <Card
                featuredTitle={workoutGroup.name}
                image={{ uri: baseUrl + workoutGroup.image }}
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
            // <View style={{ margin: 10 }}>
            //     <Text style={{ fontSize: 14 }}>{item.text}</Text>
            //     <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
            //     <Text style={{ fontSize: 12 }}>{`-- ${item.author}, ${item.date}`}</Text>
            // </View>
            <Card
                image={{ uri: baseUrl + item.image }}
            >
                <Text style={{ 
                    margin: 10,
                    textAlign: 'center'
                    }}>
                    {item.name}
                </Text>
                {/* <Icon
                    style={{
                        alignContent:'center'
                    }}
                    // name={props.favorite ? 'heart' : 'heart-o'}
                    name='heart-o'
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    // onPress={() => props.favorite ?
                    //     console.log('Already set as a favorite') : props.markFavorite()}
                /> */}
            </Card>

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

function RenderLogs({ logs }) {

    const renderLogItem = ({ item }) => {
        
        return (
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.date}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
                <Text style={{ fontSize: 12 }}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title="Logs">
            <FlatList
                data={logs}
                renderItem={renderLogItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    )
}

class WorkoutGroupInfo extends Component {

    markFavorite(workoutGroupId) {
        this.props.postFavorite(workoutGroupId);
    }

    static navigationOptions = {
        title: 'Workout Groups'
    }

    render() {
        const workoutGroupId = this.props.navigation.getParam('workoutGroupId');
        const workoutGroup = this.props.workoutGroups.workoutGroups.filter(workoutGroup => workoutGroup.id === workoutGroupId)[0];
        const exercises = this.props.exercises.exercises.filter(exercise => exercise.workoutGroupId === workoutGroupId);
        const logs = this.props.logs.logs.filter(log => log.workoutGroupId === workoutGroupId);
        return (
            <ScrollView>
                <RenderWorkoutGroup workoutGroup={workoutGroup}
                    favorite={this.props.favorites.includes(workoutGroupId)}
                    markFavorite={() => this.markFavorite(workoutGroupId)}
                />
                <RenderExercises exercises={exercises}
                // To Do - clear or change; add favorite exercise 
                // favorite={this.state.favorite}
                // markFavorite={() => this.markFavorite()}
                />
                <RenderLogs logs={logs}
                />
            </ScrollView>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutGroupInfo);