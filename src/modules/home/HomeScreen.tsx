import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

interface Props {
	goBack: () => void;
}

function HomeScreen({ goBack }: Props) {
	return (
		<SafeAreaView>
			<TouchableOpacity onPress={goBack}>
				<Text>Back</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

export default HomeScreen;
