import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './routes';
import RegisterContainer from '/modules/register/RegisterContainer';
import HomeContainer from '/modules/home/HomeContainer';
import { useAppSelector } from '/hooks/useAppSelector';

const Stack = createNativeStackNavigator();

function Router() {
	const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{!isLoggedIn && <Stack.Screen name={Routes.Register} component={RegisterContainer} />}

				{isLoggedIn && <Stack.Screen name={Routes.Home} component={HomeContainer} />}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Router;
