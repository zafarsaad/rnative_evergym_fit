import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem, Image } from 'react-native-elements';
// TODO - import state locally
// import { PARTNERS } from '../shared/partners';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        trainers: state.trainers
    };
};

class Trainers extends Component {

    static navigationOptions = {
        title: 'Trainers'
    }

    render() {
        const renderPartner = ({ item }) => {
            return (
                // <ListItem
                //     title={item.name}
                //     subtitle={item.description}
                //     leftAvatar={{ source: { uri: baseUrl + item.image } }}
                // />
                <Card
                    // image={{ uri: baseUrl + item.image }}
                    // imageStyle={{
                    //     width: '200px',
                    //     height: '200px',
                    //     resizeMode: 'cover'
                    // }}
                >
                    <Image 
                        style={{height: 200}}
                        resizeMode="cover"
                        source={{ uri: baseUrl + item.image }}
                    />
                    <Text style={{
                        margin: 10,
                        textAlign: 'center'
                    }}>
                        {item.name}
                    </Text>
                    <Text style={{
                        margin: 10,
                        textAlign: 'center'
                    }}>
                        {item.description}
                    </Text>
                </Card>
            );
        }
        console.log("Trainers", this.props.trainers)
        return (
            <ScrollView>
                <FlatList
                    data={this.props.trainers.trainers}
                    renderItem={renderPartner}
                    keyExtractor={item => item.id.toString()}
                />
            </ScrollView>

            // Backup
            // <ScrollView>
            //     <Card
            //         title={"Currently Available"}
            //         wrapperStyle={{ margin: 10 }}
            //     >
            //         <FlatList
            //             data={this.props.trainers.trainers}
            //             renderItem={renderPartner}
            //             keyExtractor={item => item.id.toString()}
            //         />

            //     </Card>
            // </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Trainers);