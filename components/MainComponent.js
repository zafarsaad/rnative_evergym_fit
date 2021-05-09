import React, { Component } from 'react';
import Home from './HomeComponent';
import WorkoutList from './WorkoutListComponent';
import WorkoutGroupInfo from './WorkoutGroupInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const WorkoutListNavigator = createStackNavigator(
    {
        WorkoutList: { screen: WorkoutList },
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

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Workouts: { screen: WorkoutListNavigator }
    },
    {
        drawerBackgroundColor: '#fcc58d'
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
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

export default Main;