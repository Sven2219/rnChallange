import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { globalScreenStyle } from '/const/styles';

function LoadingIndicator() {
	return (
		<View style={[globalScreenStyle.container, globalScreenStyle.centerColumn]}>
			<ActivityIndicator size="large" />
		</View>
	);
}

export default LoadingIndicator;
