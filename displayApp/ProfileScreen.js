import React, { Component } from "react"
import { Text, View, Image, StyleSheet } from "react-native"

type Props = {}
class ProfileScreen extends Component<Props> {
	render() {
		const { navigation } = this.props
		const userObject = navigation.getParam("userObject")
		return (
			<View style={styles.container}>
				<View style={styles.topDet}>
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
					<View style={{ flex: 1, borderWidth: 1 }}>
						<Text
							style={{
								fontSize: 18,
								color: "green",
								borderWidth: 1,
								alignSelf:"flex-end",
								alignItems:"flex-end",
								alignContent:"flex-end",
								textAlign:"right"
							}}>
							Name: {userObject.NAME}
						</Text>
						<Text>About: {userObject.details.About}</Text>
					</View>
				</View>
				<View>
					{/* TODO: Fill Remaining Info */}
					<Text>Hello</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		justifyContent: "space-between"
	},
	item: {
		flex: 1,
		justifyContent: "center",
		marginLeft: 5
	},
	topDet: {
		flexDirection: "row",
		borderWidth: 1
	}
})

export default ProfileScreen
