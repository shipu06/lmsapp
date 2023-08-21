// SplashScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require('./../../assets/logo.png')}
				style={styles.logo}
			/>
			<Text style={styles.text}>Your App Name</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	logo: {
		width: 200,
		height: 200,
		resizeMode: 'contain',
	},
	text: {
		marginTop: 20,
		fontSize: 20,
		fontWeight: 'bold',
	},
});

export default SplashScreen;
