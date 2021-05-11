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
                    title={"Jersey City"}
                    wrapperStyle={{ margin: 10 }}
                >
                    <Text>87 Newport Street,</Text>
                    <Text>Bayonne, NJ 07302</Text>
                    <Text style={{marginBottom: 10 }}>                        
                        U.S.A.
                    </Text>
                    <Text>Phone: 1-800-GYM-EVER</Text>
                    <Text>Email: jersey@evergym.com</Text>
                </Card>
                <Card
                    title={"Bayonne"}
                    wrapperStyle={{ margin: 10 }}
                >
                    <Text>175 Avenue A,</Text>
                    <Text>Bayonne, NJ 07002</Text>
                    <Text style={{marginBottom: 10 }}>                        
                        U.S.A.
                    </Text>
                    <Text>Phone: 1-800-856-7711</Text>
                    <Text>Email: bayonne@evergym.com</Text>
                </Card>
                <Card
                    title={"Union"}
                    wrapperStyle={{ margin: 10 }}
                >
                    <Text>11 Fairview Avenue,</Text>
                    <Text>Bayonne, NJ 07590</Text>
                    <Text style={{marginBottom: 10 }}>                        
                        U.S.A.
                    </Text>
                    <Text>Phone: 1-800-856-7712</Text>
                    <Text>Email: union@evergym.com</Text>
                </Card>
                <Card
                    title={"Hoboken"}
                    wrapperStyle={{ margin: 10 }}
                >
                    <Text>185 James Street,</Text>
                    <Text>Hoboken, NJ 07030</Text>
                    <Text style={{marginBottom: 10 }}>                        
                        U.S.A.
                    </Text>
                    <Text>Phone: 1-800-856-7713</Text>
                    <Text>Email: hoboken@evergym.com</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;