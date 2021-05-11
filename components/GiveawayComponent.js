import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Button } from 'react-native';

class Giveaway extends Component {

    constructor(props) {
        super(props);

        this.state = {
            entries: 10,
            showCalendar: false
        };
    }

    static navigationOptions = {
        title: 'Enter Giveaway'
    }

    handleGiveaway() {
        console.log(JSON.stringify(this.state));
        this.setState({
            entries: 1,
            showCalendar: false     
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Number of entries to use:</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.entries}
                        onValueChange={itemValue => this.setState({entries: itemValue})}
                    >
                        <Picker.Item label='0' value='0' />
                        <Picker.Item label='1' value='1' />
                        <Picker.Item label='2' value='2' />
                        <Picker.Item label='3' value='3' />
                        <Picker.Item label='4' value='4' />
                        <Picker.Item label='5' value='5' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Button
                        onPress={() => this.handleGiveaway()}
                        title='Enter Giveaway'
                        color='#f78800'
                        accessibilityLabel='Tap me to enter monthly giveaway'
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20,
        marginTop: 100
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    }
});

export default Giveaway;