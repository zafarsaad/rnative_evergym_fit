import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { Text } from 'react-native';

class Contact extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Card
                    title={"Contact Us"}
                    wrapperStyle={{ margin: 10 }}
                >
                    <Text>175 Avenue A,</Text>
                    <Text>Bayonne, NJ 07002</Text>
                    <Text style={{marginBottom: 10 }}>                        
                        U.S.A.
                    </Text>
                    <Text>Phone: 1-800-GYM-EVER</Text>
                    <Text>Email: hello@evergym.com</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;