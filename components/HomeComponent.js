import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
// import { WORKOUTGROUPS } from '../shared/workoutGroups';
// import { PROMOTIONS } from '../shared/promotions';
// import { PARTNERS } from '../shared/partners';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        workoutGroups: state.workoutGroups,
        promotions: state.promotions,
        trainers: state.trainers
    };
};

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={{uri: baseUrl + item.image}}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    // TODO Delete Constructor
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         workoutGroups: WORKOUTGROUPS,
    //         promotions: PROMOTIONS,
    //         trainers: TRAINERS
    //     };
    // }

    static navigationOptions = {
        title: 'New Updates!'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.props.workoutGroups.workoutGroups.filter(workoutGroup => workoutGroup.featured)[0]}
                />
                <RenderItem 
                    item={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                />
                <RenderItem 
                    item={this.props.trainers.trainers.filter(trainer => trainer.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);