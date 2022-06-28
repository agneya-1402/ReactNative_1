import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
	BottomTabBarHeightContext,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//screens
import Favourites from "./screens/Favourites";
import Messages from "./screens/Messages";
import Home from "./screens/Home";
import Account from "./screens/Account";


//ScreenName
const home = "Home";
const fav = "Favourites";
const msg = "Messages";
const acc = "Account";


const tab = createBottomTabNavigator();

export default function Menu() {
	return (
		
		<tab.Navigator
			initialRouteName={home}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					let routeName = route.name;

					if (routeName === home) {
						iconName = focused ? "home" : "home-outline";
					} else if (routeName === fav) {
						iconName = focused ? "heart" : "heart-outline";
					} else if (routeName === msg) {
						iconName = focused ? "mail" : "mail-outline";
					} else if (routeName === acc) {
						iconName = focused ? "person" : "person-outline";
					}
					return (
						<Ionicons name={iconName} size={size} color="#1E1E1E" />
					);
				},
			})}
		>
			

			<tab.Screen
				name={home}
				component={Home}
				options={{
					headerShown: false,
					tabBarStyle: { height: 65 },
					tabBarLabelStyle: { marginBottom: 9, marginTop: -10 },
				}}
			/>
			<tab.Screen
				name={fav}
				component={Favourites}
				options={{
					headerShown: true,
					tabBarStyle: { height: 65 },
					tabBarLabelStyle: { marginBottom: 9, marginTop: -10 },
				}}
			/>
			<tab.Screen
				name={msg}
				component={Messages}
				options={{
					headerShown: true,
					tabBarStyle: { height: 65 },
					tabBarLabelStyle: { marginBottom: 9, marginTop: -10 },
				}}
			/>
			<tab.Screen
				name={acc}
				component={Account}
				options={{
					headerShown: true,
					tabBarStyle: { height: 65 },
					tabBarLabelStyle: { marginBottom: 9, marginTop: -10 },
				}}
			/>
		</tab.Navigator>
		
	);
}