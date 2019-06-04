/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    ToastAndroid
} from "react-native";
import jsonData from "./formattedJson.json"; // path to json file

type Props = {};
export default class App extends Component<Props> {
    constructor() {
        super();
        this.state = {
            dataSource: [],
            isLoading: true
        };
    }

    renderSeperator = () => {
        return (
            <View
                style={{ height: 1, width: "100%", backgroundColor: "black" }}
            />
        );
    };

    componentDidMount() {
        this.setState({
            dataSource: jsonData
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                marginBottom: 3
                            }}
                            onPress={() =>
                                ToastAndroid.show(item.NAME, ToastAndroid.SHORT)
                            }>
                            <Image
                                style={{ width: 80, height: 80, margin: 5 }}
                                source={{
                                    uri:
                                        "https://hotemoji.com/images/dl/a/2-person-gesturing-no-emoji-by-twitter.png"
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
                    keyExtractor={(item, index) => index}
                    ItemSeparatorComponent={this.renderSeperator}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
});
