/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react"
import { createStackNavigator, createAppContainer } from "react-navigation"

import HomeScreen from "./HomeScreen"
import ProfileScreen from "./ProfileScreen"

const AppNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		Profile: ProfileScreen
	},
	{
		initialRouteName: "Home"
	}
)

const AppContainer = createAppContainer(AppNavigator)

type Props = {}
export default class App extends Component<Props> {
	render() {
		return <AppContainer />
	}
}
