import React, { Component } from "react"
import {
	Text,
	View,
	FlatList,
	Image,
	TouchableOpacity,
	StyleSheet
} from "react-native"
import jsonData from "./formattedJson.json" // path to json file

type Props = {}
class ProvidersListScreen extends Component<Props> {
	static navigationOptions = {
		title: "Providers"
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={jsonData}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.list}
							onPress={() =>
								this.props.navigation.navigate("Profile", {
									userObject: item
								})
							}>
							<View
								style={{
									justifyContent: "center"
								}}>
								<Image
									style={{
										height: 60,
										width: 60,
										borderRadius: 30,
										margin: 5
									}}
									source={{
										uri:
											"https://www.pngkey.com/png/full/157-1579943_no-profile-picture-round.png"
									}}
								/>
							</View>
							<View
								style={{
									flex: 1,
									justifyContent: "center",
									marginLeft: 5
								}}>
								<Text
									style={{
										fontSize: 22,
										color: "#121212",
										marginRight: 5,
										fontFamily: "WorkSans-Regular"
									}}>
									{item.NAME}
								</Text>
								<Text
									style={{
										fontSize: 14,
										color: "#FFAD16",
										marginRight: 5,
										fontFamily: "WorkSans-Light"
									}}>
									{item.details.About}
								</Text>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#D1D1D1"
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44
	},
	list: {
		flex: 1,
		flexDirection: "row",
		marginTop: 2.5,
		marginBottom: 2.5,
		marginLeft: 5,
		marginRight: 5,
		color: "#fff",
		textAlign: "center",
		backgroundColor: "#fff"
	}
})

export default ProvidersListScreen
