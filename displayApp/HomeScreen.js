import React, { PureComponent } from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
import Pie from "react-native-pie"
import { BarChart, Grid, YAxis } from "react-native-svg-charts"
import * as scale from "d3-scale"

import jsonData from "./formattedJson.json"

type Props = {}
class HomeScreen extends PureComponent<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					No of Providers: {jsonData.length}
				</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-around",
						width: Dimensions.get("window").width
					}}>
					<View>
						<Pie
							radius={50}
							innerRadius={45}
							series={[66]}
							colors={["#f00"]}
							backgroundColor="#ddd"
						/>
						<View style={styles.gauge}>
							<Text style={styles.gaugeText}>66%</Text>
						</View>
						<View style={{ alignItems: "center" }}>
							<Text>Individuals</Text>
						</View>
					</View>
					<View>
						<Pie
							radius={50}
							innerRadius={45}
							series={[34]}
							colors={["#f00"]}
							backgroundColor="#ddd"
						/>
						<View style={styles.gauge}>
							<Text style={styles.gaugeText}>34%</Text>
						</View>
						<View style={{ alignItems: "center" }}>
							<Text>Organizations</Text>
						</View>
					</View>
				</View>
				<Pie radius={100} series={[66, 34]} colors={["red", "blue"]} />
				<View>
					<BarChartDisp />
				</View>
			</View>
		)
	}
}

class BarChartDisp extends React.PureComponent {
	render() {
		const data = [
			{ value: 66, label: "Individuals" },
			{ value: 34, label: "Organizations" }
		]

		return (
			<View
				style={{
					flexDirection: "row",
					height: 200,
					width: 400,
					padding: 20
				}}>
				<YAxis
					data={data}
					yAccessor={({ index }) => index}
					scale={scale.scaleBand}
					contentInset={{ top: 10, bottom: 10 }}
					spacing={0.2}
					formatLabel={(_, index) => data[index].label}
				/>
				<BarChart
					style={{ flex: 1, marginLeft: 8 }}
					data={data}
					horizontal={true}
					yAccessor={({ item }) => item.value}
					svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
					contentInset={{ top: 10, bottom: 10 }}
					spacing={0.2}
					gridMin={0}>
					<Grid direction={Grid.Direction.VERTICAL} />
				</BarChart>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around"
	},
	title: {
		fontSize: 40,
		color: "black",
		fontFamily: "WorkSans-Light"
	},
	gauge: {
		position: "absolute",
		width: 100,
		height: 100,
		alignItems: "center",
		justifyContent: "center"
	},
	gaugeText: {
		backgroundColor: "transparent",
		color: "#000",
		fontSize: 24
	}
})

export default HomeScreen
