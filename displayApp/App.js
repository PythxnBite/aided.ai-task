/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react"
import { View } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import Icon from "react-native-vector-icons/Ionicons"

// Material Icons Import TODO: Change theme to material
import MIcon from "react-native-vector-icons/MaterialIcons"

import HomeScreen from "./HomeScreen"
import ProvidersListScreen from "./ProvidersListScreen"
import ProfileScreen from "./ProfileScreen"

const ProfileStack = createStackNavigator(
	{
		Providers: ProvidersListScreen,
		Profile: ProfileScreen
	},
	{
		initialRouteName: "Providers",
		defaultNavigationOptions: {
			headerTitleStyle: {
				color: "#fff",
				fontFamily: "WorkSans-SemiBold"
			},
			headerStyle: {
				backgroundColor: "#486472"
			}
		}
	}
)

const TabNavigator = createMaterialBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarLabel: "Home",
				tabBarIcon: ({ tintColor }) => (
					<View>
						<MIcon
							style={[{ color: tintColor }]}
							size={25}
							name={"home"}
						/>
					</View>
				)
			}
		},
		Providers: {
			screen: ProfileStack,
			navigationOptions: {
				tabBarLabel: "Providers",
				tabBarIcon: ({ tintColor }) => (
					<View>
						<MIcon
							style={[{ color: tintColor }]}
							size={25}
							name={"person"}
						/>
					</View>
				)
				// activeColor: "#fff",
				// inactiveColor: "#008B87",
				// barStyle: { backgroundColor: "#00E5C7" }
			}
		}
	},
	{
		initialRouteName: "Home",
		activeColor: "#fff",
		inactiveColor: "#232F34",
		barStyle: { backgroundColor: "#344955" },
		shifting: true
	}
)

export default createAppContainer(TabNavigator)
