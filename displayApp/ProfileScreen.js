import React, { Component } from "react"
import { Text, View, Image, StyleSheet } from "react-native"

type Props = {}
class ProfileScreen extends Component<Props> {
	render() {
		const { navigation } = this.props
		const userObject = navigation.getParam("userObject")
		return (
			<View style={styles.container}>
				<View>
					<Image
						style={{
							width: 150,
							height: 150,
							margin: 5,
							borderWidth: 0.5,
							borderColor: "black"
						}}
						source={{
							uri:
								"https://cdn0.iconfinder.com/data/icons/user-interface-33/80/App_Interface_new-07-512.png"
						}}
					/>
				</View>
				<View>
					<Text
						style={{
							fontSize: 18,
							color: "green",
							alignContent: "flex-end"
						}}>
						Name: {userObject.NAME}
					</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		flexDirection: "row"
	},
	item: {
		flex: 1,
		justifyContent: "center",
		marginLeft: 5
	}
})

export default ProfileScreen
