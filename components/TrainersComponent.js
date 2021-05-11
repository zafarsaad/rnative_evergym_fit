import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
// TODO - import state locally
// import { PARTNERS } from '../shared/partners';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        trainers: state.trainers
    };
};

function Mission() {
    return (
        <Text>
            We usually update the schedule for each of our Trainers. You can always be sure that each one of them
            will be there for you when you need them. Plan a workout together! Get someone to spot you! We only hire the best.
        </Text>
    )
}

class Trainers extends Component {

    // TODO - removed local state
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         partners: PARTNERS
    //     }
    // }

    static navigationOptions = {
        title: 'Trainers'
    }

    render() {
        const renderPartner = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            );
        }
        console.log("Trainers", this.props.trainers)
        return (
            <ScrollView>
                <Card
                    title={"Our Team!"}
                    wrapperStyle={{ margin: 10 }}
                >
                    <Mission />
                </Card>
                <Card
                    title={"Currently Available"}
                    wrapperStyle={{ margin: 10 }}
                >
                    <FlatList
                        data={this.props.trainers.trainers}
                        renderItem={renderPartner}
                        keyExtractor={item => item.id.toString()}
                    />

                </Card>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Trainers);