import React, { Component } from 'react';
import Home from './HomeComponent';
import WorkoutList from './WorkoutListComponent';
import WorkoutGroupInfo from './WorkoutGroupInfoComponent';
import Trainers from './TrainersComponent';
import Contact from './ContactComponent';
import Giveaway from './GiveawayComponent';
import Stopwatch from './StopWatchComponent';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { fetchWorkOutGroups, fetchExercises, fetchPromotions, fetchTrainers, fetchLogs } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchWorkOutGroups,
    fetchExercises,
    fetchLogs,
    fetchPromotions,
    fetchTrainers
};

const WorkoutListNavigator = createStackNavigator(
    {
        WorkoutList: {
            screen: WorkoutList,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <Icon
                    name='bolt'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        WorkoutGroupInfo: { screen: WorkoutGroupInfo }
    },
    {
        initialRouteName: 'WorkoutList',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#ff7803'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#f78800'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='star-o'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const TrainersNavigator = createStackNavigator(
    {
        Trainers: { screen: Trainers }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#f78800'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='user-plus'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const StopWatchNavigator = createStackNavigator(
    {
        Stopwatch: { screen: Stopwatch }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#f78800'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='clock-o'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const GiveawayNavigator = createStackNavigator(
    {
        Giveaway: { screen: Giveaway }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#f78800'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='hand-peace-o'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#f78800'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='address-card'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image source={require('./images/logo2.png')} style={styles.drawerImage} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}>EverGym Fit</Text>
                </View>
            </View>
            <DrawerItems {...props} 
                activeTintColor='white'
            />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerLabel: 'New Updates!',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='star-o'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Workouts: {
            screen: WorkoutListNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='bolt'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Trainers: {
            screen: TrainersNavigator,
            navigationOptions: {
                drawerLabel: 'Trainers',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='user-plus'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Stopwatch: {
            screen: StopWatchNavigator,
            navigationOptions: {
                drawerLabel: 'Stopwatch',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='clock-o'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Giveaway: {
            screen: GiveawayNavigator,
            navigationOptions: {
                drawerLabel: 'Giveaway',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='hand-peace-o'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name='envelope-open'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#f78800',
        contentComponent: CustomDrawerContentComponent
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

    componentDidMount() {
        this.props.fetchWorkOutGroups();
        this.props.fetchExercises();
        this.props.fetchLogs();
        this.props.fetchPromotions();
        this.props.fetchTrainers();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                }}>
                <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#f78800',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});


export default connect(null, mapDispatchToProps)(Main);