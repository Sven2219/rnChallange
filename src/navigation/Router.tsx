import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './routes';
import RegisterContainer from '/modules/register/RegisterContainer';
import HomeContainer from '/modules/home/HomeContainer';

const Stack = createNativeStackNavigator();

function Router() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name={Routes.Register} component={RegisterContainer} />
				<Stack.Screen name={Routes.Home} component={HomeContainer} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Router;
