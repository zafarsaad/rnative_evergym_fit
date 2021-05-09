import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { WORKOUTGROUPS } from '../shared/workoutGroups';

class WorkoutList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workoutGroups: WORKOUTGROUPS
        }
    }

    static navigationOptions = {
        title: 'Workout List'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderWorkoutListItem = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('WorkoutGroupInfo', { workoutGroupId: item.id })}
                    leftAvatar={{ source: require('./images/react-lake.jpg') }}
                />
            );
        };

        return (
            <FlatList
                data={this.state.workoutGroups}
                renderItem={renderWorkoutListItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

}

export default WorkoutList;