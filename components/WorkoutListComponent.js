import React, { Component } from 'react';
import { FlatList } from 'react-native';
// import { ListItem } from 'react-native-elements';
// TODO Local Import
// import { WORKOUTGROUPS } from '../shared/workoutGroups';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        workoutGroups: state.workoutGroups,
    };
};

class WorkoutList extends Component {

    // TODO remove constructur
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         workoutGroups: WORKOUTGROUPS
    //     }
    // }

    static navigationOptions = {
        title: 'Workouts'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderWorkoutListItem = ({ item }) => {
            return (
                <Tile
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('WorkoutGroupInfo', { workoutGroupId: item.id })}
                    imageSrc={{uri: baseUrl + item.image}}
                />
            );
        };

        return (
            <FlatList
                data={this.props.workoutGroups.workoutGroups}
                renderItem={renderWorkoutListItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

}

export default connect(mapStateToProps)(WorkoutList);