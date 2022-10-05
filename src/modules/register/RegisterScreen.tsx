import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

interface Props {
	goForward: () => void;
}

function RegisterScreen({ goForward }: Props) {
	return (
		<SafeAreaView>
			<TouchableOpacity onPress={goForward}>
				<Text>Forward</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

export default RegisterScreen;
