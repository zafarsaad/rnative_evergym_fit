import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

class Stopwatch extends Component {

    state = {
        timer: null,
        counter: '00',
        miliseconds: '00',
        startDisabled: true,
        stopDisabled: false
    }

    constructor(props) {
        super(props);
        // this.state = {
        //     timer: null,
        //     counter: '00',
        //     miliseconds: '00',
        //     startDisabled: true,
        //     stopDisabled: false
        // }

        this.onButtonStart = this.onButtonStart.bind(this);
        this.onButtonStop = this.onButtonStop.bind(this);
        this.onButtonClear = this.onButtonClear.bind(this);
        this.start = this.start.bind(this);
    }

    static navigationOptions = {
        title: 'Stopwatch'
    }

    // componentDidMount() {
    //     this.start();
    // }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    start() {
        var self = this;
        let timer = setInterval(() => {
            var num = (Number(this.state.miliseconds) + 1).toString(),
                count = this.state.counter;

            if (Number(this.state.miliseconds) == 99) {
                count = (Number(this.state.counter) + 1).toString();
                num = '00';
            }

            self.setState({
                counter: count.length == 1 ? '0' + count : count,
                miliseconds: num.length == 1 ? '0' + num : num
            });
        }, 0);
        this.setState({ timer });
    }

    onButtonStart() {
        this.start();
        this.setState({ startDisabled: true, stopDisabled: false });
    }

    onButtonStop() {
        clearInterval(this.state.timer);
        this.setState({ startDisabled: false, stopDisabled: true });
    }

    onButtonClear() {
        this.setState({
            timer: null,
            counter: '00',
            miliseconds: '00'
        });
    }

    render() {
        return (
            <Card
                image={{ uri: baseUrl + "images/clock.jpeg" }}
            >
                <View
                    style={styles.cardRow}
                >
                    <Text style={{ fontSize: 80 }}>{this.state.counter}</Text>
                    <Text style={{ fontSize: 80 }}>:</Text>
                    <Text style={{ fontSize: 80 }}>{this.state.miliseconds}</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Button
                        title="Start"
                        color='#f78800'
                        onPress={() => this.onButtonStart()}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Button
                        title="Stop"
                        color='#f78800'
                        onPress={() => this.onButtonStop()}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Button
                        title="Clear"
                        onPress={() => this.onButtonClear()}
                    />
                </View>

            </Card>
        );
    }
}

const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 30,
        marginBottom: 50
    },
    cardRowTimer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20,
    },
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 20,
        marginTop: 50
    }
});

export default Stopwatch;