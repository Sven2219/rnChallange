import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function App() {
	console.log('here');
	return (
		<SafeAreaView style={styles.container}>
			<Text>Sven Suk</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
	},
});

export default App;
