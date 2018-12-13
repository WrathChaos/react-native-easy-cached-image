import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { Asset, FileSystem } from "expo";
import sha256 from "crypto-js/sha256";

export default class CachedImage extends React.Component {
	state = {
		source: null
	};

	async componentDidMount() {
		let { source } = this.props;

		try {
			if (typeof source === "number") {
				await Asset.fromModule(source).downloadAsync();
			} else if (source && source.uri) {
				const parts = source.uri.split(".");
				const ext = parts[parts.length - 1];
				const name = sha256(source.uri);
				const filepath = `${FileSystem.documentDirectory}${name}.${ext}'`;
				const { exists } = await FileSystem.getInfoAsync(filepath);
				if (exists) {
					source = { uri: filepath };
				} else {
					const { uri } = await FileSystem.downloadAsync(source.uri, filepath);
					source = { uri };
				}
			}
		} catch (e) {
			console.log(e);
		} finally {
			this.setState({ source });
		}
	}

	render() {
		if (this.state.source) {
			return <Image {...this.props} source={this.state.source} />;
		}
		const safeImageStyle = { ...StyleSheet.flatten(this.props.style) };
		delete safeImageStyle.tintColor;
		delete safeImageStyle.resizeMode;
		return <View style={safeImageStyle} />;
	}
}
