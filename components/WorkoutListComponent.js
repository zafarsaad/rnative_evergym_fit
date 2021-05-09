import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function WorkoutList(props) {
    
    const renderWorkoutListItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                onPress={() => props.onPress(item.id)}
                leftAvatar={{ source: require('./images/react-lake.jpg') }}
            />
        );
    };

    return (
        <FlatList 
            data={props.workoutGroups}
            renderItem={renderWorkoutListItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default WorkoutList;