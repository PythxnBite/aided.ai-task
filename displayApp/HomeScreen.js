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
class HomeScreen extends Component<Props> {
	renderSeperator = () => {
		return (
			<View
				style={{ height: 1, width: "100%", backgroundColor: "black" }}
			/>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={jsonData}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={{
								flex: 1,
								flexDirection: "row",
								marginBottom: 3
							}}
							onPress={() =>
								this.props.navigation.navigate("Profile", {
									userObject: item
								})
							}>
							<Image
								style={{ width: 80, height: 80, margin: 5 }}
								source={{
									uri:
										"https://cdn0.iconfinder.com/data/icons/user-interface-33/80/App_Interface_new-07-512.png"
								}}
							/>
							<View
								style={{
									flex: 1,
									justifyContent: "center",
									marginLeft: 5
								}}>
								<Text
									style={{
										fontSize: 18,
										color: "green",
										marginBottom: 15
									}}>
									{item.NAME}
								</Text>
								<Text style={{ fontSize: 16, color: "red" }}>
									{item.details.About}
								</Text>
							</View>
						</TouchableOpacity>
					)}
					ItemSeparatorComponent={this.renderSeperator}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white"
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44
	}
})

export default HomeScreen
