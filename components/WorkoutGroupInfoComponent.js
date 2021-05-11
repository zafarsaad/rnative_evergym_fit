import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, StyleSheet, Button } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';
// TODO local import
// import { WORKOUTGROUPS } from '../shared/workoutGroups';
// import { EXERCISES } from '../shared/exercises';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite, postLog } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        workoutGroups: state.workoutGroups,
        exercises: state.exercises,
        logs: state.logs,
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: itemToFavoriteId => (postFavorite(itemToFavoriteId)),
    postLog: (workoutGroupId, rating, text) => (postLog(workoutGroupId, rating, text))
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
                <View style={styles.cardRow}>
                    <Icon
                        name={props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        raised
                        reverse
                        onPress={() => props.favorite ?
                            console.log('Already set as a favorite') : props.markFavorite()}
                    />
                    <Icon
                        name={'pencil'}
                        type='font-awesome'
                        color='#5637DD'
                        raised
                        reverse
                        onPress={() => props.onShowModal()}
                    />
                </View>
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
                <Text style={{ fontSize: 12 }}>{item.text}</Text>
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

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            rating: 5,
            text: ''
        }
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    handleLog(workoutGroupId) {
        // console.log(JSON.stringify(this.state));
        this.props.postLog(workoutGroupId, this.state.rating, this.state.text)
        this.toggleModal();
    }

    resetForm() {
        this.setState({
            showModal: false,
            rating: 5,
            text: ''
        });
    }

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
                    onShowModal={() => this.toggleModal()}
                />
                <RenderExercises exercises={exercises}
                // To Do - clear or change; add favorite exercise 
                // favorite={this.state.favorite}
                // markFavorite={() => this.markFavorite()}
                />
                <RenderLogs logs={logs} />
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Rating
                            style={{ paddingVertical: 10 }}
                            showRating
                            startingValue={this.state.rating}
                            imageSize={20}
                            onFinishRating={rating => this.setState({ rating: rating })}
                        />
                        <Input
                            placeholder={'How was it?'}
                            leftIcon={
                                <Icon
                                    name='comment-o'
                                    type='font-awesome'
                                    size={24}
                                    color='black'
                                />
                            }
                            leftIconContainerStyle={{ paddingRight: 10 }}
                            onChangeText={logText => this.setState({ text: logText })}
                            value={this.state.text}
                        />
                        <View
                            style={{ margin: 20 }}
                        >
                            <Button
                                onPress={() => {
                                    this.handleLog(workoutGroupId);
                                    this.resetForm();
                                }}
                                color='#5637DD'
                                title='Submit'
                            />
                        </View>
                        <View
                            style={{ margin: 20 }}
                        >
                            <Button
                                onPress={() => {
                                    this.toggleModal();
                                    this.resetForm();
                                }}
                                color='#808080'
                                title='Cancel'
                            />
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutGroupInfo);