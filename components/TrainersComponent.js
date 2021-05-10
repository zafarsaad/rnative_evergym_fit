import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { Text } from 'react-native';
import { PARTNERS } from '../shared/partners';
import { FlatList } from 'react-native';

function Mission() {
    return (
        <Text>
            We usually update the schedule for each of our Trainers. You can always be sure that each one of them
            will be there for you when you need them. Plan a workout together! Get someone to spot you! We only hire the best.
        </Text>
    )
}

class Trainers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        }
    }

    static navigationOptions = {
        title: 'Trainers'
    }

    render() {
        // const renderPartner = ({ item }) => {
        //     return (
        //         <ListItem
        //             title={item.name}
        //             subtitle={item.description}
        //             leftAvatar={{ source: require('./images/bootstrap-logo.png') }}
        //         />
        //     );
        // }
        console.log("Partners", this.state.partners)
        return (
            <ScrollView>
                <Card
                    title={"Our Trainers"}
                    wrapperStyle={{ margin: 10 }}
                >
                    <Mission />
                </Card>
                <Card
                    title={"Current Trainers"}
                    wrapperStyle={{ margin: 10 }}
                >
                    <FlatList
                    // data={this.state.partners}
                    // renderItem={renderPartner}
                    // keyExtractor={item => item.id.toString()}
                    >
                        <ListItem
                        // title={this.state.partners[0].name}
                        // subtitle={this.state.partners[0].description}
                        // leftAvatar={{ source: require('./images/bootstrap-logo.png') }}
                        >
                            <Text>Test</Text>
                        </ListItem>
                    </FlatList>
                </Card>
            </ScrollView>
        );
    }
}

export default Trainers;